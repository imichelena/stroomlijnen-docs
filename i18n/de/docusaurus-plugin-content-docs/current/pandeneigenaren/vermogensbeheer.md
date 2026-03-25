---
sidebar_position: 6
title: Leistungsmanagement und Netzanbindung
description: Erklärung zu Anschlussleistung, vertraglich vereinbarter Leistung, Peak-Shaving und intelligenter Ladesteuerung für Gebäudeeigentümer.
keywords: [Anschlussleistung, vertraglich vereinbarter Leistung, Peak-Shaving, intelligente Ladesteuerung, Netzanbindung, Lastmanagement]
---

# Leistungsmanagement und Netzanbindung

Bevor Sie Ladeeinrichtungen installieren, ist es wichtig zu verstehen, wie Ihre Stromversorgung funktioniert und wie die Ladeinfrastruktur damit umgeht.

## Zwei Begriffe, die Sie kennen sollten

### Anschlussleistung

Die **Anschlussleistung** ist das physische Maximum, das Ihre Netzanbindung aushält — bestimmt durch die Kabel und das Transformatorstation Ihres Netzbetreibers. Dies ist die absolute Obergrenze.

**Typisch für ein Theater:** 400–2000 kVA (= 400–2000 kW pro Phase, abhängig von der Größe)

### Vertraglich vereinbarter Leistung

Die **vertraglich vereinbarte Leistung** ist die maximale Leistung, für die Sie einen Vertrag mit Ihrem Netzbetreiber haben. Sie zahlen eine Grundgebühr auf Basis dieser Leistung. Wenn Sie strukturell mehr verbrauchen, können Sie Strafen erhalten oder müssen Ihren Vertrag anpassen.

Die vertraglich vereinbarte Leistung ist in der Regel **niedriger** als die Anschlussleistung.

**Typisch für ein Theater:** 150–500 kW

---

:::tip Faustregel
- **Anschlussleistung** = was die Kabel aushalten (Obergrenze)
- **Vertraglich vereinbarter Leistung** = was Sie bezahlt haben (Vertrag)
- **Aktueller Verbrauch** = was Sie tatsächlich verbrauchen (variiert pro Stunde)

Tagsüber haben Sie in der Regel viel Platz zwischen Ihrem aktuellen Verbrauch und Ihrer vertraglich vereinbarten Leistung. Diesen Platz können Sie für das Laden nutzen.
:::

---

## Wie sich ein DC-Lader zu Ihrer Anschlussleistung verhält

Ein DC-Lader zieht seine Leistung direkt und schnell aus Ihrer Anschlussleistung. Ein 60 kW DC-Lader zieht 60 kW, solange er aktiv ist. Das ist:

| Ladertyp | Leistung | % von 270 kW Vertrag |
|---|---|---|
| AC-Lader (Einfachphase) | 3,7–7,4 kW | 1–3% |
| AC-Lader (Dreiphasig) | 11–22 kW | 4–8% |
| DC-Lader | 50–150 kW | 18–55% |
| DC-Schnelllader (LKW) | 100–350 kW | 37–130% |

Ein einzelner DC-Lader von 150 kW auf einem Vertrag von 270 kW nimmt also mehr als die Hälfte Ihrer Vertragskapazität ein. Das ist in Ordnung tagsüber, wenn das Theater wenig verbraucht — aber abends während einer Vorstellung kann das Probleme bereiten.

**Die Lösung: Peak-Shaving / Lastmanagement**

---

## Peak-Shaving und intelligente Ladesteuerung

**Peak-Shaving** (auch Lastmanagement oder intelligente Ladesteuerung) ist ein System, das die Ladeleistung automatisch anhand der verfügbaren Leistung auf diesem Moment anpasst.

### Wie es funktioniert

1. Das System misst kontinuierlich den aktuellen Stromverbrauch des Gebäudes
2. Es berechnet, wie viel Platz noch unter Ihrer vertraglich vereinbarten Leistung ist
3. Die Ladesäule erhält genau so viel Leistung, wie verfügbar ist — nicht mehr
4. Wenn der Saal sich füllt und der Verbrauch steigt, wird die Ladeleistung automatisch zurückgeschroeft
5. Wenn der Verbrauch sinkt (z.B. nach einer Vorstellung), geht die Ladeleistung wieder hoch

### Ergebnis

- **Nie** Überschreitung Ihrer vertraglich vereinbarten Leistung
- **Maximale Ladeschnelligkeit**, wenn es möglich ist
- **Keine manuelle Aktion** erforderlich

```
Vertraglich vereinbarter Leistung:     270 kW
Theaterverbrauch Abend:       220 kW
Verfügbar für Laden:       50 kW → Ladesäule lädt mit 50 kW

Theaterverbrauch Tag:      40 kW
Verfügbar für Laden:      230 kW → Ladesäule lädt mit 150 kW (max. Säule)
```

---

## Wann ist eine Netzerweiterung erforderlich?

In den meisten Theatern ist eine Netzerweiterung **nicht** erforderlich für eine erste Ladesäule von 60–150 kW, solange Peak-Shaving installiert ist.

Eine Netzerweiterung wird erst relevant, wenn Sie:
- Mehrere Ladeeinrichtungen gleichzeitig betreiben möchten (>3 Schnelllader)
- Eine feste Leistungskapazität für das Laden reservieren möchten (z.B. für Vertragsgarantien an Transporteure)
- Batteriespeicher (BSS) hinzufügen möchten, um zusätzliche Pufferkapazitäten zu schaffen

:::note Netzbetreiber
Wartezeiten für Netzerweiterungen in den Niederlanden betragen derzeit 5–10 Jahre in vielen Regionen. Batteriespeicher (BSS) kann eine Alternative sein, um die Wartezeit zu überbrücken. Siehe den [ElaadNL Outlook Logistik](https://elaadnl.nl) für aktuelle Zahlen zu Netzkongestion und Ladeinfrastruktur.
:::

---

## Batteriespeicher als Puffer

Ein Battery-Storage-System (BSS) lädt auf, wenn Ihr Stromverbrauch niedrig ist, und liefert diese Energie an die Ladesäulen zurück, wenn sie benötigt wird. Dies ermöglicht höhere Ladeleistungen ohne Ihre Netzanbindung zu überschreiten.

| Szenario | Ohne BSS | Mit BSS |
|---|---|---|
| Verfügbar tagsüber | 230 kW | 230 kW + Puffer |
| Verfügbar abends | 50 kW | 50 kW + Puffer aus BSS |
| Max. Ladeleistung abends | 50 kW | 150 kW (aus BSS) |