---
sidebar_position: 1
title: Volvo Trucks — Plug & Charge Einrichten
description: Schritt-für-Schritt-Anleitung zum Aktivieren von Plug & Charge auf Volvo FH, FM, FE und FL Elektro-Lkw über Volvo Connect.
keywords: [Volvo, FH Electric, FM Electric, Volvo Connect, Plug and Charge, ISO 15118, Flottenladung]
---

# Volvo Trucks — Plug & Charge Einrichten

Volvo war einer der ersten Lkw-Hersteller, die ISO 15118-2 Plug & Charge vollständig unterstützte. Alle aktuellen Volvo-Elektro-Modelle (FH, FM, FE, FL) unterstützen PnC bei Firmware v3.2 oder höher.

## Unterstützte Modelle

| Modell | Batterieoptionen | Max. DC-Laden | PnC Bereit |
|-------|-----------|---------------|:---------:|
| FH Electric | 540 kWh | 250 kW (CCS) | ✅ |
| FM Electric | 540 kWh | 250 kW (CCS) | ✅ |
| FE Electric | 265 kWh | 150 kW (CCS) | ✅ |
| FL Electric | 265 kWh | 150 kW (CCS) | ✅ |

## Anforderungen

- Volvo Connect-Flottenmanagement-Konto mit Administrator-Zugriff
- Lkw-Firmware v3.2 oder höher (überprüfen in Volvo Connect → Fahrzeug → Software)
- Stroomlijnen-Flottenkonto mit PnC aktiviert ([Installationsanleitung](../setup-guide))

## Schritt für Schritt: Volvo Connect

### 1. Überprüfen der Firmware-Version

1. Melden Sie sich bei [Volvo Connect](https://connect.volvotrucks.com) an
2. Wählen Sie Ihr Fahrzeug aus der Flottenliste aus
3. Gehen Sie zu **Fahrzeugdetails** → **Software**
4. Überprüfen Sie, dass die Firmware-Version **3.2 oder höher** ist
5. Wenn nicht, wenden Sie sich an Ihren Volvo-Händler für ein Update

### 2. Aktivieren der Ladedienste

1. Gehen Sie in Volvo Connect zu **Dienste** → **Ladedienste**
2. Wenn dieser Abschnitt nicht sichtbar ist, bitten Sie Ihren Volvo Connect-Administrator, die **eMobility-Modul** für Ihr Konto zu aktivieren
3. Klicken Sie auf **Ladepartner verwalten**

### 3. Autorisieren von Stroomlijnen

1. Suchen Sie in der Liste der Ladepartner nach **"Stroomlijnen B.V."**
   - Wenn dieser nicht aufgeführt ist, klicken Sie auf **Partner hinzufügen** und suchen nach "Stroomlijnen" oder verwenden den Partnercode `NL-STM`
2. Klicken Sie auf **Autorisieren**
3. Überprüfen Sie die Berechtigungen:
   - ✅ Zertifikatinstallation — Erforderlich für PnC
   - ✅ Fahrzeugidentifizierung — Erforderlich für Zertifikatverknüpfung
   - ❌ Standortdaten — Nicht erforderlich, Sie können dies ablehnen
4. Klicken Sie auf **Autorisierung bestätigen**

### 4. Auswählen der Fahrzeuge

1. Nach der Autorisierung sehen Sie einen Bildschirm für die Fahrzeugauswahl
2. Aktivieren Sie die Kontrollkästchen für alle Lkw, die Stroomlijnen PnC verwenden sollen
3. Klicken Sie auf **Anwenden**

### 5. Zertifikatinstallation

Nach der Autorisierung sendet die Stroomlijnen-Backend eine Zertifikatinstallationsanfrage:

1. Die Anfrage erscheint in Volvo Connect → **Benachrichtigungen** (in der Regel innerhalb von 30 Minuten)
2. Das Volvo-System pusht das Vertragszertifikat an den Lkw
3. Der Lkw muss **online** sein, um es zu erhalten (Kontakt eingeschaltet oder an einen AC-Lader angeschlossen)
4. Die Installation ist in der Regel innerhalb von **1–2 Stunden** abgeschlossen

Sie können den Fortschritt verfolgen in:
- **Volvo Connect** → Fahrzeug → Ladedienste → Zertifikatstatus
- **Stroomlijnen Mein Flotte** → Fahrzeug → Registerkarte Plug & Charge

### 6. Überprüfen der Installation

Sobald der Status "Aktiv" in beiden Portalen angezeigt wird:

1. Fahren Sie zu einer Stroomlijnen-Ladestation
2. Schließen Sie die CCS-Kabel an
3. Die Ladestation sollte "Plug & Charge — Authentifiziert" innerhalb von 5–10 Sekunden anzeigen
4. Das Laden beginnt automatisch

## Firmware-Update-Prozedur

Wenn Ihr Lkw eine Firmware-Version niedriger als v3.2 hat:

1. **Wenden Sie sich an Ihren Volvo-Händler** für ein Firmware-Update
2. Updates können bei dem Händler (~2 Stunden) durchgeführt werden
3. Einige Updates sind als **OTA (Over-The-Air)** verfügbar — überprüfen Sie Volvo Connect → Fahrzeug → Software-Updates
4. Kehren Sie nach dem Update zu Schritt 2 zurück

:::caution
Versuchen Sie nicht, die Firmware des Lkw selbst zu aktualisieren. Firmware-Updates müssen von einem autorisierten Volvo-Händler oder über das offizielle OTA-Kanal durchgeführt werden.
:::

## Fehlerbehebung

### "Ladedienste" nicht sichtbar in Volvo Connect
Ihr Volvo Connect-Abonnement enthält möglicherweise nicht die eMobility-Modul. Wenden Sie sich an Ihren Volvo-Händler oder den Volvo Connect-Support für die Aktivierung.

### Zertifikat zeigt mehr als 24 Stunden "In Bearbeitung"
1. Überprüfen Sie, dass der Lkw online war (Kontakt eingeschaltet) während mindestens 30 Minuten nach der Anfrage
2. Überprüfen Sie Volvo Connect auf eventuelle offene Autorisierungsanfragen
3. Wenden Sie sich an den Stroomlijnen-Support — wir können die Zertifikatsanfrage erneut aktivieren

### PnC schlägt fehl, aber Zertifikat zeigt "Aktiv"
1. Überprüfen Sie das Display der Ladestation auf spezifische Fehlercodes
2. Versuchen Sie eine andere CCS-Kabel (wenn mehrere verfügbar)
3. Schalten Sie den Kontakt des Lkw aus, warten Sie 30 Sekunden und schalten Sie ihn wieder ein
4. Siehe die allgemeine [Fehlerbehebungsanleitung](../troubleshooting)

### Mehrere Volvo-Konten
Wenn Ihre Flotte über mehrere Volvo Connect-Konten (z.B. verschiedene Tochtergesellschaften) verwaltet wird, muss jedes Konto Stroomlijnen separat autorisieren. Wenden Sie sich an Ihren Stroomlijnen-Kontomanager für die Multi-Konto-Einrichtung.

---

**Weiter:** [DAF Einrichten →](./daf)