---
sidebar_position: 1
title: Elektrisch touren — was Sie wissen müssen
description: Praktischer Leitfaden für Fahrer, die mit einem Elektrofahrzeug auf Tournee gehen. Von Reichweite bis Ladeverwaltung unterwegs.
keywords: [elektrisch touren, Fahrer, Reichweite, OBC, Ladestrategie, Schnellader, LKW, Transporter]
---

# Elektrisch touren — was Sie wissen müssen

Ein praktischer Leitfaden für Fahrer, die mit einem Elektrofahrzeug auf Tournee gehen. Die Kernregel ist einfach: **Laden Sie, wenn Sie stillstehen, nicht wenn Sie fahren**.

---

## Das Fahrzeug

### Reichweite bestimmt alles

Die Reichweite Ihres Fahrzeugs bestimmt, ob Sie von A nach B ohne Zwischenstopp kommen. Einige Faustregeln für Deutschland:

- **Personenwagen mit großem Akkupaket** (z.B. 77+ kWh): Von Ihrem Startpunkt aus kommen Sie zu fast allen Theatern und zurück innerhalb einer Ladung
- **Transporter**: Dies ist mit den meisten Modellen fast unmöglich auf eine Ladung – Laden unterwegs ist unvermeidlich
- **LKW**: Abhängig von Route und Ladung, aber Laden im Theater ist entscheidend

### WLTP-Reichweite vs. Realität

Die offizielle WLTP-Reichweite basiert auf gemischter Nutzung und ist kein guter Maßstab für konstantes Autobahnfahren.

| Geschwindigkeit | Verbrauch im Vergleich zur WLTP | Effektive Reichweite |
|---|---|---|
| 90 km/h | ~100% | WLTP-Reichweite erreichbar |
| 100 km/h | ~110% | ~10% geringere Reichweite |
| 120 km/h | ~150% | ~30% geringere Reichweite |

**Praxisbeispiel (Kia e-Soul, WLTP 452 km):**
- Bei 90 km/h: ~450 km erreichbar
- Bei 120 km/h: ~300 km in der Praxis
- Faustregel bei durchschnittlich 100 km/h: rechnen Sie mit ~330 km

Temperatur und Wind verringern die Reichweite weiter. Rechnen Sie immer mit einem Sicherheitspuffer.

### Der OBC — On-Board-Lader

Der **OBC (On Board Charger)** ist der eingebaute Lader des Fahrzeugs. Dieser bestimmt, wie schnell Sie an einer herkömmlichen AC-Ladestation laden können. Es ist das langsamste Element in der Kette.

| OBC-Leistung | Zeit zum Aufladen von 60 kWh |
|---|---|
| 3 kW | ~20 Stunden |
| 7 kW | ~8,5 Stunden |
| 11 kW | ~5,5 Stunden |
| 22 kW | ~2,75 Stunden |

:::warning
Ein OBC mit 11 kW lädt maximal mit 11 kW, auch wenn die Ladestation mehr liefern kann. Der OBC ist das limitierende Element bei AC-Laden.
:::

Fast alle Fahrzeuge mit einem B-Führerschein (Personenwagen, Transporter) haben einen begrenzten OBC — dies war bereits bei Diesel der Fall (Strom für den Aufbau), aber bei Elektrofahrzeugen ist es noch relevanter.

---

## Lader

### AC-Lader (öffentliche Säulen, Heimlader)

AC-Lader liefern Wechselstrom an das Fahrzeug — der OBC wandelt diesen in Gleichstrom für die Batterie um.

- **Leistung:** 3,7–22 kW (abhängig von der Säule und dem OBC)
- **Standorte:** Öffentliche Ladestationen auf der Straße, bei Unternehmen, in Theatern
- **Preis:** relativ niedrig (€0,25–€0,45/kWh)
- **Nachteil:** Langsam, und immer mehr Säulen begrenzen die Ladeleistung während der Abendstaus (16:00–22:00 Uhr) oder liefern dann gar nichts

:::warning Abendstau
Viele öffentliche Ladestationen begrenzen die Ladeleistung oder stoppen vollständig zwischen 16:00 und 22:00 Uhr wegen Netzüberlastung. Wenn Sie auf eine volle Batterie am Morgen warten, aber die Säule hat 6 Stunden kaum geladen — dann stehen Sie vor einer Überraschung.
:::

:::note Ladesäulen-Blockierer
Bei vielen Ladestationen gibt es inzwischen Strafen, wenn Sie nach dem Laden nicht entfernen. Stellen Sie eine Benachrichtigung in Ihrer App ein.
:::

### DC-Lader (Schnellader)

DC-Lader wandeln den Strom selbst um und laden die Batterie direkt — ohne OBC. Viel schneller.

- **Leistung:** 20–350+ kW
- **Preis:** Bis zu 4-mal höher als bei einer AC-Säule (€0,60–€0,90/kWh auf öffentlichen Schnellladestationen)
- **Standorte für Personenwagen/Transporter:** Fastned, Shell Recharge, Allego usw.
- **Standorte für LKW:** ~100 öffentliche Ladeflächen in Deutschland (über [Chargemap](https://chargemap.com) oder [Truckcharging von Volvo](https://truckscharging.com) zu finden)

:::warning LKW dürfen nicht an regulären Schnellladestationen
LKW sind nicht willkommen bei Fastned, Shell Recharge und ähnlichen Schnellladestationen für Verbraucher. Sie sind auf spezielle LKW-Ladeflächen angewiesen.
:::

### Mitnahme eines eigenen Laders

Die Mitnahme eines eigenen Laders (mobiler Ladekabel oder Wallbox) ist eine clevere Option — Sie wissen dann sicher, dass Sie laden können, wenn ein Starkstromanschluss verfügbar ist.

**Achten Sie bei Starkstromanschlüssen:**
- Ein 32A-Kabel/Stecker kann diese Leistung nur in der Spitze erreichen, aber nur **25A kontinuierlich** (netto ~15 kW kontinuierliches Laden)
- Ein 63A-Kabel bietet die doppelte Kapazität (~30 kW kontinuierlich)
- KabelLänge und -dicke bestimmen, ob Sie die volle Leistung erreichen können — schwere Kabel über große Entfernungen verlieren Leistung

Nicht alle Lade- und Losebereiche bei Theatern haben Starkstrom in der Nähe. Überprüfen Sie dies im Voraus.

---

## Fahrverhalten

### Regeneratives Bremsen

Die meisten Elektrofahrzeuge können Energie zurückgewinnen, wenn sie bremsen (regeneratives Bremsen). Der Motor arbeitet als Dynamo und lädt die Batterie beim Abbremsen.

- Sie können **nicht mehr ausrollen** — das Fahrzeug bremst, sobald Sie den Gashebel loslassen
- Dies ist erst einmal gewöhnungsbedürftig, aber bringt deutlich Reichweite bei jeder Ausfahrt oder Geschwindigkeitsreduzierung
- Ihre Bremsen verschleißen kaum

**Tipp:** Lernen Sie, mit einem Pedal zu fahren. Bei jeder Ausfahrt oder im Stau gewinnen Sie kostenlose Reichweite.

---

## Ladestrategie unterwegs

Die ideale Strategie für einen tourenden Fahrer:

```
Heimatbasis       → Volle Batterie beim Abfahren
        ↓
Theater/Standort  → Laden während des Aufbaus/Vorstellungen/Abbaus
        ↓
Heimatbasis       → Eventuell Nachladen zu Hause
```

Wenn die Reichweite für die einfache Fahrt nicht ausreicht:

- Wählen Sie ein Fahrzeug mit **hoher DC-Ladeschnelligkeit (>100 kW)** — das ermöglicht einen Schnellladestopp von 15 Minuten anstelle von 45 Minuten
- Suchen Sie Schnellader auf der Route über [Chargemap](https://chargemap.com), [ABRP](https://abetterrouteplanner.com) oder [PlugShare](https://www.plugshare.com)

---

## LKW: Besondere Hinweise

Für LKW gelten zusätzliche Einschränkungen:

- **Fahrpersonalgesetz:** Kombinieren von Laden mit Wartungsarbeiten ist gesetzlich problematisch, wenn der Fahrer auf den Lader warten muss. Bei Theatern, die nicht laden können, ist ein **dedizierter Fahrer** erforderlich.
- **Kein Zugang zu Verbraucher-Schnellladestationen** — suchen Sie spezielle LKW-Ladeflächen
- **Laden im Theater**: Nicht immer möglich und nicht überall ist ein Anschluss in der Nähe des Ladedocks

---

## Zusammenfassung

- **Laden, wenn Sie stillstehen** — zu Hause und im Theater. Laden unterwegs zählt auf Ihre Arbeitszeit.
- **Reichweite > Ladeschnelligkeit**, wenn Sie überall laden können
- **Ladeschnelligkeit > Reichweite**, wenn Sie Zwischenstopps unterwegs nicht vermeiden können — dann wollen Sie >100 kW DC
- **Abendstau** (16:00–22:00): Öffentliche Säulen können überraschend wenig liefern
- **Eigener Lader mitnehmen** ist clever — unabhängig von der verfügbaren Infrastruktur
- **Schnellader sind teuer** — verwenden Sie sie nur, wenn es wirklich notwendig ist
- **LKW**: Suchen Sie Ladeflächen, keine regulären Schnellladestationen
- **LKW + kein Theaterlader** = dedizierter Fahrer erforderlich (Fahrpersonalgesetz)