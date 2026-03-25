---
sidebar_position: 1
title: Was ist Plug & Charge?
description: "Wenn ein Plug-&-Charge-kompatibler Lkw an unserem Ladegerät angeschlossen wird, beginnt die Abrechnung automatisch — kein Pass, keine App, keine Aktion des Fahrers erforderlich."
keywords: [Plug and Charge, ISO 15118, automatisches Laden, Elektrolkw, Flottennachladung, PnC]
---

# Was ist Plug & Charge?

**Wenn ein Plug-&-Charge-kompatibler Lkw an unserem Ladegerät angeschlossen wird, beginnt die Abrechnung automatisch — kein Pass, keine App, keine Aktion des Fahrers erforderlich.**

Das ist alles. Einstecken, weggehen, zurückkommen zu einem aufgeladenen Lkw. Das Ladegerät und der Lkw regeln Authentifizierung, Autorisierung und Abrechnung untereinander.

## Das Problem, das Plug & Charge löst

Derzeit erfordern die meisten Ladesitzungen, dass der Fahrer:
1. Den richtigen Pass oder die App bei sich hat
2. Weiß, welches Netzwerk dieses Ladegerät verwaltet
3. Einen Pass streicht, einen QR-Code scannet oder eine Sitzung in einer App startet
4. Auf Autorisierung wartet
5. Dann erst einsteckt

Für den Besitzer eines Personenkraftwagens, der einmal pro Woche auflädt, ist dies geringer Reibungswiderstand. Für eine Flotte mit 20 Lkws und mehreren Fahrern über Schichten hinweg ist es jedoch eine betriebliche Belastung:

- Fahrer vergessen Pässe
- Pässe werden verloren oder beschädigt
- Neue Fahrer müssen eingewiesen werden
- Verschiedene Ladernetzwerke erfordern verschiedene Apps
- Gemeinsam genutzte Fahrzeuge erfordern gemeinsam genutzte Pässe (Sicherheitsrisiko)
- Jede fehlgeschlagene Authentifizierung ist verlorene Ladezeit

### Die tatsächlichen Kosten des Reibungswiderstands

Für eine Flotte von 20 Elektrolkws:
- Im Durchschnitt **3 Minuten** pro Sitzung an Authentifizierungsproblemen
- Im Durchschnitt **2 Ladesitzungen** pro Lkw pro Tag
- Das sind **120 Minuten pro Tag** — zwei Stunden Fahrerzeit, die für das Streichen von Passen verschwendet werden
- Bei €35/Stunde voll belasteten Fahrerkosten: **€1.225/Monat** an verlorener Produktivität
- Plus fehlgeschlagene Sitzungen, Supportanrufe und frustrierte Fahrer

## Wie Plug & Charge dieses Problem löst

Mit Plug & Charge:
1. Der Fahrer steckt den Kabel ein
2. **Fertig.**

Das Bordzertifikat des Lkws regelt alles. Das Ladegerät weiß, wer Sie sind, zu welcher Flotte Sie gehören und wohin die Rechnung geschickt werden soll — alles kryptografisch ausgetauscht in weniger als 5 Sekunden.

Keine Pässe, die verloren gehen können. Keine Apps, die installiert werden müssen. Keine Schulung erforderlich. Kein Unterschied zwischen einem Fahrer vom ersten Tag und einem Veteranen von 10 Jahren.

## Wer kann es nutzen?

Plug & Charge erfordert:

1. **Ein kompatibles Fahrzeug** — der Lkw oder Transporter muss ISO 15118-2 oder höher unterstützen. Siehe unsere Liste mit [kompatiblen Fahrzeugen](/docs/plug-and-charge/compatible-vehicles).
2. **Ein kompatibles Ladegerät** — muss ISO 15118 unterstützen und mit einem Plug-&-Charge-Ökosystem verbunden sein. Alle Stroomlijnen-Ladegeräte unterstützen dies.
3. **Zertifikatbereitstellung** — Ihr Fahrzeug benötigt ein Vertragszertifikat. Wir regeln dies über unser Portal.

## Ist es sicher?

Ja. Plug & Charge verwendet die gleiche Art von Kryptografie, die Online-Banking sichert:

- **X.509-Zertifikate** — jedes Fahrzeug hat ein eindeutiges digitales Zertifikat
- **PKI (Public Key Infrastructure)** — eine Vertrauenskette vom Fahrzeug zum eMSP
- **TLS-Verschlüsselung** — alle Kommunikation zwischen Fahrzeug und Ladegerät ist verschlüsselt
- **Keine sensiblen Daten preisgegeben** — der Kabel überträgt verschlüsselte Zertifikatdaten, keine Kontonummern

Ein gestohlenes Fahrzeug kann ferngesteuert deaktiviert werden, indem das Zertifikat widerrufen wird. Ein RFID-Pass hingegen funktioniert, bis jemand bemerkt, dass er fehlt.

:::info
Plug & Charge ist **sicherer** als RFID-Pässe. Pässe können geklont werden (obwohl moderne Pässe dies schwierig machen). Zertifikate nicht — sie verwenden asymmetrische Kryptografie mit 256-Bit-Schlüsseln.
:::

## Die Geschäftliche Begründung

Für Flottenmanager ist Plug & Charge nicht nur praktisch — es ist eine Kostenersparnis:

| Faktor | RFID | Plug & Charge |
|--------|------|---------------|
| Fahrerzeit pro Sitzung | 2–5 Minuten | 0 Minuten |
| Verwaltungsaufwand für Pässe | Hoch | Kein |
| Risiko von Verlust/Diebstahl | Reales Risiko | Nicht vorhanden |
| Einarbeitungsprozess neuer Fahrer | Pass aushändigen, Prozess erklären | "Einfach einstecken" |
| Fahrzeuge mit mehreren Schichten | Pässe teilen (risikoreich) | Automatisch pro Fahrzeug |
| Monatliche Verwaltungszeit | Stunden | Minuten |

## Los geht's

Bereit, Plug & Charge für Ihre Flotte einzurichten?

1. **[Überprüfen Sie die Fahrzeugkompatibilität](/docs/plug-and-charge/compatible-vehicles)** — unterstützt Ihr Lkw dies?
2. **[Verstehen Sie, wie es funktioniert](/docs/plug-and-charge/how-it-works)** — die Technologie dahinter
3. **[Richten Sie es ein](/docs/plug-and-charge/setup-guide)** — Schritt für Schritt in unserem Portal
4. **[Herstellerspezifische Anleitungen](/docs/plug-and-charge/brand-guides/volvo-trucks)** — detaillierte Anweisungen pro Hersteller