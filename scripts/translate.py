#!/usr/bin/env python3
"""
Translate Stroomlijnen docs to 9 languages using local Ollama (llama3.3:70b-36k).
Saves translations to Docusaurus i18n directory structure.

Usage: python3 scripts/translate.py [--lang nl] [--file docs/faq.md]
"""

import os
import sys
import json
import time
import argparse
import urllib.request
import urllib.error
from pathlib import Path

OLLAMA_URL = "http://127.0.0.1:11434/api/generate"
MODEL = "llama3.3:70b-36k"

LOCALES = {
    "nl": "Dutch",
    "de": "German",
    "fr": "French",
    "es": "Spanish",
    "pt": "Portuguese",
    "it": "Italian",
    "pl": "Polish",
    "sv": "Swedish",
    "da": "Danish",
}

BASE_DIR = Path(__file__).resolve().parent.parent
DOCS_DIR = BASE_DIR / "docs"
BLOG_DIR = BASE_DIR / "blog"
I18N_DIR = BASE_DIR / "i18n"


def translate_text(text: str, language: str) -> str:
    """Send text to Ollama for translation."""
    prompt = (
        f"Translate the following technical documentation to {language}. "
        "Keep ALL markdown formatting exactly as-is (headers, links, code blocks, tables, admonitions like :::tip). "
        "Keep technical terms in English: OCPP, ISO 15118, EMAID, CCS2, RFID, PLC, TLS, PKI, V2G, CDR, EVSE, CSMS, eMSP, CPO, OCPI, SoC, kW, kWh, kVA. "
        "Keep URLs, email addresses, and code examples unchanged. "
        "Keep frontmatter keys (title, description, keywords, sidebar_position, slug, authors, tags) in English — only translate their values. "
        "Be natural and professional, not robotic. "
        "Output ONLY the translated text, no explanations.\n\n"
        f"---\n{text}\n---"
    )

    payload = json.dumps({
        "model": MODEL,
        "prompt": prompt,
        "stream": False,
        "options": {
            "temperature": 0.3,
            "num_predict": 8192,
        }
    }).encode("utf-8")

    req = urllib.request.Request(
        OLLAMA_URL,
        data=payload,
        headers={"Content-Type": "application/json"},
    )

    try:
        with urllib.request.urlopen(req, timeout=600) as resp:
            result = json.loads(resp.read().decode("utf-8"))
            return result.get("response", "").strip()
    except urllib.error.URLError as e:
        print(f"  ❌ Ollama error: {e}")
        return ""
    except Exception as e:
        print(f"  ❌ Unexpected error: {e}")
        return ""


def get_i18n_path(source_path: Path, locale: str) -> Path:
    """Get the i18n output path for a source file."""
    rel = source_path.relative_to(BASE_DIR)

    if str(rel).startswith("docs/"):
        return I18N_DIR / locale / "docusaurus-plugin-content-docs" / "current" / rel.relative_to("docs")
    elif str(rel).startswith("blog/"):
        return I18N_DIR / locale / "docusaurus-plugin-content-blog" / rel.relative_to("blog")
    else:
        return I18N_DIR / locale / rel


def collect_files(only_file: str = None) -> list[Path]:
    """Collect all .md files to translate."""
    files = []

    if only_file:
        p = BASE_DIR / only_file
        if p.exists():
            files.append(p)
        else:
            print(f"File not found: {only_file}")
        return files

    # Docs
    for md in sorted(DOCS_DIR.rglob("*.md")):
        files.append(md)

    # Blog (only .md files, not authors.yml)
    for md in sorted(BLOG_DIR.glob("*.md")):
        files.append(md)

    return files


def main():
    parser = argparse.ArgumentParser(description="Translate docs using local Ollama")
    parser.add_argument("--lang", help="Translate to specific language only (e.g., nl)")
    parser.add_argument("--file", help="Translate specific file only (relative to project root)")
    args = parser.parse_args()

    locales = {args.lang: LOCALES[args.lang]} if args.lang else LOCALES
    files = collect_files(args.file)

    total = len(files) * len(locales)
    done = 0
    skipped = 0

    print(f"📚 Translating {len(files)} files to {len(locales)} languages ({total} total)")
    print(f"🤖 Model: {MODEL}")
    print()

    for source in files:
        content = source.read_text(encoding="utf-8")
        rel = source.relative_to(BASE_DIR)

        for code, lang_name in locales.items():
            done += 1
            out_path = get_i18n_path(source, code)

            # Skip if already translated
            if out_path.exists():
                skipped += 1
                print(f"  [{done}/{total}] ⏭ {code}/{rel} (exists)")
                continue

            print(f"  [{done}/{total}] 🔄 {code}/{rel} → {lang_name}...", end=" ", flush=True)

            start = time.time()
            translated = translate_text(content, lang_name)
            elapsed = time.time() - start

            if translated:
                # Clean up: remove wrapping --- if the model added them
                if translated.startswith("---\n") and content.startswith("---"):
                    # Model might have wrapped the output in ---
                    pass  # Keep as-is, it's likely the frontmatter
                elif translated.startswith("---") and not content.startswith("---"):
                    translated = translated.lstrip("-").lstrip("\n")

                out_path.parent.mkdir(parents=True, exist_ok=True)
                out_path.write_text(translated, encoding="utf-8")
                print(f"✅ ({elapsed:.0f}s, {len(translated)} chars)")
            else:
                print(f"❌ (failed after {elapsed:.0f}s)")

            # Brief pause to avoid hammering Ollama
            time.sleep(1)

    print()
    print(f"✅ Done! {done - skipped} translated, {skipped} skipped (already existed)")


if __name__ == "__main__":
    main()
