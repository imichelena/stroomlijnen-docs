---
sidebar_position: 3
title: Mercedes-Benz-Lkw — Plug & Charge einrichten
description: Schritt-für-Schritt-Anleitung zur Aktivierung von Plug & Charge auf Mercedes-Benz eActros- und eEconic-Lkw über Fleetboard.
keywords: [Mercedes-Benz, eActros, eEconic, Fleetboard, Plug and Charge, ISO 15118, Daimler Truck]
---

# Mercedes-Benz-Lkw — Plug & Charge einrichten

Mercedes-Benz (Daimler Truck) unterstützt ISO 15118-2 Plug & Charge auf dem eActros 600 und eActros 300. Der eEconic soll voraussichtlich PnC-Unterstützung über ein OTA-Update im Q2 2026 erhalten. Die Konfiguration wird über die Fleetboard-Plattform verwaltet.

## Unterstützte Modelle

| Modell | Batterieoptionen | Max. DC-Laden | PnC bereit |
|-------|-----------|---------------|:---------:|
| eActros 600 | Bis zu 621 kWh | 400 kW (MCS/CCS) | ✅ |
| eActros 300 | Bis zu 336 kWh | 160 kW (CCS) | ✅ |
| eEconic | Bis zu 336 kWh | 160 kW (CCS) | ⚠️ Q2 2026 |

## Anforderungen

- Fleetboard-Konto mit Administratorzugang für Flottenmanagement
- eActros-Firmware mit eMobility-Modul (standardmäßig seit Q4 2025 ausgestattet)
- Stroomlijnen-Flottenkonto mit PnC aktiviert ([Installationsanleitung](../setup-guide))

## Schritt für Schritt: Fleetboard

### 1. Zugriff auf eMobility-Einstellungen

1. Melden Sie sich bei [Fleetboard](https://fleetboard.com) an
2. Navigieren Sie zu **eMobility** → **Lademanagement**
3. Wenn Sie das neue **Daimler Truck Digital**-Portal verwenden, gehen Sie zu **Dienste** → **Lademanagement**

### 2. Stroomlijnen als Anbieter hinzufügen

1. Klicken Sie im Lademanagement auf **Ladeanbieter**
2. Klicken Sie auf **Anbieter hinzufügen**
3. Suchen Sie nach **"Stroomlijnen B.V."** (oder verwenden Sie die eMSP-ID `NL-STM`)
4. Klicken Sie auf **Verbinden**
5. Akzeptieren Sie die Bedingungen für den Datenaustausch (Fahrzeug-ID und Zertifikataustausch)

### 3. Fahrzeuge für PnC registrieren

1. Gehen Sie zu **Lademanagement** → **Fahrzeug-PnC-Einstellungen**
2. Führen Sie die folgenden Schritte für jedes eActros-Modell aus, das Sie aktivieren möchten:
   - Klicken Sie auf die Fahrzeugzeile
   - Schalten Sie **Plug & Charge** ein
   - Wählen Sie **Stroomlijnen** als bevorzugten Ladeanbieter (oder einen von mehreren)
3. Klicken Sie auf **Änderungen speichern**

### 4. Zertifikatausrollung

Nach dem Speichern:
1. Fleetboard initiiert die Zertifikatanfrage bei Stroomlijnen
2. Das Vertragszertifikat wird durch unsere Backend-Infrastruktur generiert
3. Es wird an den Lkw über die Telematik-Einheit von Daimler Truck gesendet
4. **Typische Ausrollzeit: 2–6 Stunden**
5. Der Lkw muss online sein (Kontakt geschlossen oder an einen Lader angeschlossen)

### 5. Überprüfen in beiden Portalen

- **Fleetboard** → eMobility → Fahrzeug → PnC-Status: sollte "Zertifikat aktiv" anzeigen
- **Stroomlijnen Mein Flotte** → Fahrzeug → Plug & Charge: sollte "✅ Aktiv" anzeigen

### 6. Erste Sitzung

Verbinden Sie den eActros mit einem Stroomlijnen-Lader. Das Dashboard des eActros zeigt den Authentifizierungsstatus "Plug & Charge". Die Ladung sollte automatisch innerhalb von 5–10 Sekunden starten.

## Mehrere Ladeanbieter

Mercedes-Benz unterstützt mehrere PnC-Anbieter gleichzeitig. Sie können Stroomlijnen-Zertifikate neben Zertifikaten anderer Anbieter auf demselben Fahrzeug haben. Der Lkw verwendet das richtige Zertifikat basierend auf dem Netzwerk des Laders.

## Fleetboard versus Daimler Truck Digital

Daimler Truck wechselt von Fleetboard zum neuen **Daimler Truck Digital**-Portal. Beide Portale unterstützen derzeit PnC-Verwaltung:

- **Fleetboard (Legacy):** Vollständige PnC-Unterstützung, gut dokumentiert
- **Daimler Truck Digital (neu):** PnC verfügbar unter Dienste → Lademanagement

Wenn Sie zwischen Plattformen migrieren, werden PnC-Einstellungen automatisch übertragen.

## Fehlerbehebung

### Abschnitt "eMobility" nicht verfügbar in Fleetboard
- Stellen Sie sicher, dass Ihr Fleetboard-Abonnement das eMobility-Modul enthält
- Das eMobility-Modul ist in Fleetboard Premium für Elektrofahrzeuge enthalten
- Wenden Sie sich an Ihren Mercedes-Benz-Händler zur Verifizierung

### Zertifikat zeigt über einen längeren Zeitraum "In Bearbeitung"
1. Stellen Sie sicher, dass der Lkw mindestens 2 Stunden online war
2. Überprüfen Sie Fleetboard → Meldungen auf eventuelle ausstehende Genehmigungen
3. Verifizieren Sie, dass die Telematik-Einheit von Daimler Truck eine Mobilfunknetzverbindung hat (überprüfen Sie die Antenne im Lkw)
4. Wenden Sie sich an den Stroomlijnen-Support für die Backend-Verifizierung

### eActros 600 mit MCS-Stecker
Der eActros 600 unterstützt sowohl CCS als auch MCS (Megawatt Charging System). PnC funktioniert auf beiden Connectortypen an Stroomlijnen-Standorten. MCS-Lader werden 2026 an ausgewählten Standorten eingesetzt.

---

**Weiter:** [Andere Lkw →](./other-trucks)