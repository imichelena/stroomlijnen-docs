---
sidebar_position: 10
title: CPO, eMSP und Roaming erklärt
description: Was sind CPOs und eMSPs, wie funktioniert das Roaming zwischen Lade-Netzwerken und welche Protokolle werden verwendet?
keywords: [CPO, eMSP, Roaming, OCPI, OCPP, Lade-Netzwerk, Interoperabilität, Ladekarte]
---

# CPO, eMSP und Roaming erklärt

Die Welt der elektrischen Ladetechnologie hat ihre eigene Fachsprache. Diese Seite erklärt die wichtigsten Begriffe und Rollen.

## Die zwei Rollen im Ladesystem

### CPO — Charge Point Operator

Ein **CPO** verwaltet die physische Lade-Infrastruktur. Der CPO ist verantwortlich für:

- Installation und Wartung von Ladestationen
- Kommunikation zwischen Ladestation und Backoffice (via OCPP)
- Autorisierung von Ladesitzungen
- Messung und Abrechnung der gelieferten Energie
- Störungsdienst und Überwachung

Ein CPO betreibt Ladestationen an einem oder mehreren Standorten. Als Grundstückseigentümer haben Sie einen Vertrag mit einem CPO.

---

### eMSP — e-Mobility Service Provider

Ein **eMSP** bietet Dienstleistungen für den Endnutzer (Fahrer/Flottenmanager):

- Ausgabe von Ladekarten (RFID) oder Apps
- Roaming-Zugang zu Ladestationen verschiedener CPOs
- Monatliche Abrechnung für alle Ladesitzungen
- Kundenservice

Ein Flottenmanager hat einen Vertrag mit einem eMSP. Seine Fahrer können dann an allen Ladestationen laden, die über Roaming verbunden sind.

:::note Ein Unternehmen kann beide Rollen haben
Einige Anbieter sind sowohl CPO als auch eMSP. Das bedeutet, dass sie sowohl Ladestationen verwalten als auch Ladekarten ausgeben. Beispiele: Vattenfall, Shell Recharge, Allego, Eneco.
:::

---

## OCPP — das Protokoll zwischen Ladestation und Backoffice

**OCPP (Open Charge Point Protocol)** ist der internationale offene Standard für die Kommunikation zwischen einer Ladestation und dem Verwaltungssystem (Backoffice) des CPO.

| Version | Status | Merkmale |
|---|---|---|
| OCPP 1.6 | Weit verbreitet, ältere Installationen | Grundfunktionalität |
| OCPP 2.0.1 | Aktueller Standard | Smart Charging, V2G, verbesserte Sicherheit |
| OCPP 2.1 | In Entwicklung | MCS, erweitertes V2G |

**Warum OCPP wichtig für Grundstückseigentümer ist:** Eine Ladestation, die OCPP unterstützt, ist nicht an einen CPO gebunden. Sie können den CPO wechseln, ohne die Hardware ersetzen zu müssen.

---

## OCPI — das Protokoll für Roaming

**OCPI (Open Charge Point Interface)** ist das Protokoll, mit dem CPOs und eMSPs miteinander kommunizieren. Es ermöglicht das Roaming: Ein Fahrer mit einer Karte von eMSP A kann an einer Ladestation von CPO B laden, und beide Parteien verrechnen die Sitzung automatisch.

```
Fahrer (eMSP A-Karte)
        ↓
Ladestation (CPO B)
        ↓ OCPI-Verbindung
Backoffice CPO B → Backoffice eMSP A
        ↓
Abrechnung an den Flottenmanager
```

Je mehr CPOs und eMSPs über OCPI verbunden sind, desto größer ist das Netzwerk, auf das ein Fahrer zugreifen kann.

---

## Roaming in der Praxis

In den Niederlanden sind die meisten großen CPOs über Roaming-Hubs verbunden. Die größten Hubs sind:

| Hub | Rolle |
|---|---|
| **Gireve** | Europäischer Roaming-Hub, viele große Netze |
| **Hubject** | Plug & Charge-Roaming (ISO 15118) |
| **e-Laad** | Niederländische Netzbetreiber (Nuon, Stedin usw.) |

Eine Ladekarte eines niederländischen eMSPs funktioniert in der Regel an über 300.000 Ladestationen in Europa über diese Hubs.

---

## Was bedeutet dies für Sie als Grundstückseigentümer?

Wenn Sie eine Ladestation von einem CPO installieren lassen, der an Roaming-Netzwerke angeschlossen ist, können **alle Fahrer mit einer gültigen Ladekarte** an Ihrer Station laden – nicht nur Kunden dieses einen CPO.

**Fragen Sie bei der Auswahl eines CPO:**
- "Über welche Roaming-Netzwerke sind Ihre Ladestationen erreichbar?"
- "Funktionieren Ladekarten von Vattenfall, Shell Recharge und Allego an Ihren Stationen?"

---

## Relevante Quellen

| Organisation | Link |
|---|---|
| Open Charge Alliance (OCPP/OCPI) | [openchargealliance.org](https://openchargealliance.org) |
| ElaadNL (technische Standards NL) | [elaadnl.nl](https://elaadnl.nl) |
| Gireve (Roaming-Hub) | [gireve.com](https://gireve.com) |
| Hubject (Plug & Charge) | [hubject.com](https://hubject.com) |
| NAL (Nationale Agenda Lade-Infrastruktur) | [agendalaadinfrastructuur.nl](https://agendalaadinfrastructuur.nl) |