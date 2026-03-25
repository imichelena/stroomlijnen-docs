---
sidebar_position: 4
title: Scania BEV — Plug & Charge Einrichten
description: Schritt-für-Schritt-Anleitung zum Aktivieren von Plug & Charge auf Scania R-Serie- und P-Serie-BEV-Lkw über Scania Fleet Management.
keywords: [Scania, BEV, R-Serie, P-Serie, Scania Fleet Management, Plug and Charge, ISO 15118]
---

# Scania BEV — Plug & Charge Einrichten

Die batterie-elektrischen Lkw von Scania (R-Serie und P-Serie BEV) unterstützen ISO 15118-2 Plug & Charge mit Firmware-Version 2025.3 oder höher. PnC wird über das Scania Fleet Management-Portal verwaltet.

## Unterstützte Modelle

| Modell | Batterieoptionen | Max. DC-Laden | PnC Bereit |
|-------|-----------|---------------|:---------:|
| R-Serie BEV | Bis 624 kWh | 375 kW (CCS) | ✅ (fw 2025.3+) |
| P-Serie BEV | Bis 416 kWh | 250 kW (CCS) | ✅ (fw 2025.3+) |

## Anforderungen

- Scania Fleet Management-Konto mit Administratorzugang
- Lkw-Firmware-Version 2025.3 oder höher
- Stroomlijnen-Flottenkonto mit PnC aktiviert ([Installationsanleitung](../setup-guide))

## Schritt für Schritt: Scania Fleet Management

### 1. Firmware Überprüfen

1. Melden Sie sich bei [My Scania](https://my.scania.com) (Scania Fleet Management) an
2. Wählen Sie Ihr Fahrzeug → **Fahrzeuginfo** → **Softwareversion**
3. Bestätigen Sie die Version 2025.3 oder höher
4. Wenn niedriger, planen Sie einen Besuch bei einem Händler oder überprüfen Sie auf verfügbare OTA-Updates unter **Wartung** → **Software-Updates**

### 2. Elektrifizierungsdienste Aktivieren

1. Gehen Sie in Scania Fleet Management zu **Dienste** → **Elektrifizierung**
2. Wenn dieser Bereich nicht sichtbar ist, benötigt Ihr Abonnement möglicherweise die Elektrifizierungs-Add-on – wenden Sie sich an Ihren Scania-Händler
3. Klicken Sie auf **Ladepartnerverwaltung**

### 3. Stroomlijnen Hinzufügen

1. Klicken Sie auf **Partner hinzufügen**
2. Suchen Sie nach **"Stroomlijnen B.V."** oder geben Sie die eMSP-ID `NL-STM` ein
3. Klicken Sie auf **Verbinden**
4. Überprüfen und akzeptieren Sie den Datenfreigabevertrag (Fahrzeugidentifikation für Zertifikatverknüpfung)
5. Klicken Sie auf **Bestätigen**

### 4. Fahrzeuge Zuweisen

1. Klicken Sie nach dem Verbinden von Stroomlijnen auf **Fahrzeuge verwalten**
2. Wählen Sie die Lkw aus, für die PnC aktiviert werden soll
3. Klicken Sie auf **Anwenden**

### 5. Zertifikatinstallation

- Die Telematik-Gateway von Scania pusht das Vertragszertifikat zum Fahrzeug
- Das Fahrzeug muss online sein (Kontakt an oder an einen Lader angeschlossen)
- **Typische Installationszeit: 4–12 Stunden**
- Verfolgen Sie den Fortschritt in Scania Fleet Management → Elektrifizierung → Zertifikatstatus

### 6. Überprüfen

1. Überprüfen Sie den Status in beiden Scania Fleet Management und Stroomlijnen Mein Flotte
2. Stecken Sie das Fahrzeug in einen Stroomlijnen-Lader ein, um zu testen
3. Die automatische Authentifizierung sollte innerhalb von 5–10 Sekunden abgeschlossen sein

## Wichtige Hinweise

### Telematik-SIM
Scania-Lkw haben eine separate Telematik-Modul mit einer eigenen mobilen Verbindung (unabhängig vom Infotainmentsystem). Stellen Sie sicher, dass das Telematik-SIM-Abonnement aktiv ist – die Zertifikatlieferung hängt von dieser Verbindung ab, nicht von der WiFi des Fahrzeugs.

### Firmware-Updates
Scania rollt PnC-bezogene Firmware-Updates schrittweise pro Region aus. Wenn Ihr Lkw Firmware 2025.2 oder früher hat, ist das PnC-Update möglicherweise noch nicht über OTA verfügbar. Ihr Händler kann es manuell installieren.

### Mehrere Flotten
Wenn Ihre Lkw bei mehreren Scania Fleet Management-Konten registriert sind (z. B. nach Übernahmen), muss jedes Konto Stroomlijnen separat autorisieren.

## Fehlerbehebung

| Problem | Lösung |
|---------|----------|
| "Elektrifizierung" nicht im Menü | Abonnement benötigt möglicherweise Upgrade – wenden Sie sich an Ihren Scania-Händler |
| Zertifikat hängt bei "In Bearbeitung" | Überprüfen Sie, ob das Fahrzeug online ist, Telematik-SIM aktiv, Firmware ≥ 2025.3 |
| PnC schlägt bei Lader fehl | Neustart des Fahrzeugs (vollständiger Kontaktzyklus), erneuter Versuch. Überprüfen Sie den Zertifikatstatus. |
| "Partner nicht gefunden" bei Suche | Stellen Sie sicher, dass Sie nach dem richtigen Namen oder Code suchen (NL-STM) |

---

**Weiter:** [MAN Einrichten →](./man)