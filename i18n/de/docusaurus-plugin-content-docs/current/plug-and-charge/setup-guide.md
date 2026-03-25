---
sidebar_position: 4
title: Installationsanleitung Plug & Charge
description: Wie Sie Plug & Charge für Ihre Flotte über das Stroomlijnen-Portal einrichten — von der Registrierung bis zur ersten automatisierten Sitzung.
keywords: [Plug and Charge einrichten, Flottenerfassung, Vertragszertifikat, Mein Flotten-Portal, PnC-Aktivierung]
---

# Installationsanleitung Plug & Charge

Die Einrichtung von Plug & Charge für Ihre Flotte dauert etwa 15 Minuten Portalarbeit. Sobald konfiguriert, authentifiziert jedes registrierte Fahrzeug automatisch und lädt an jedem Stroomlijnen-Standort — keine Pässe, keine Apps.

## Voraussetzungen

Bevor Sie beginnen:

- [ ] Ein **Stroomlijnen-Flottenkonto** (registrieren Sie sich über [stroomlijnen.nl](https://stroomlijnen.nl) oder kontaktieren Sie Ihren Accountmanager)
- [ ] Die **FIN-Nummern** Ihrer Fahrzeuge (Fahrzeugidentifikationsnummern)
- [ ] Zugriff auf Ihr OEM-Flottenportal (Volvo Connect, DAF Connect, Fleetboard usw.)
- [ ] Ein **kompatibles Fahrzeug** (siehe [Kompatible Fahrzeuge](./compatible-vehicles))

## Schritt 1: Anmelden bei Mein Flotte

Navigieren Sie zu **my.stroomlijnen.nl** und melden Sie sich mit Ihren Flottenverwaltungsdaten an.

Wenn Sie noch kein Konto haben:
1. Klicken Sie auf **Registrieren** und füllen Sie Ihre Unternehmensdaten aus (KVK-Nummer, Rechnungsadresse)
2. Sie erhalten eine Verifizierungs-E-Mail — klicken Sie auf den Link
3. Ihr Konto wird innerhalb eines Arbeitstages überprüft und aktiviert

## Schritt 2: Fahrzeuge hinzufügen

Im Mein Flotte-Dashboard:

1. Gehen Sie zu **Fahrzeuge** → **Fahrzeug hinzufügen**
2. Geben Sie die Fahrzeugdaten ein:
   - **FIN** — 17-Zeichen-Fahrzeugidentifikationsnummer (am Türpfosten des Fahrers oder auf dem Fahrzeugschein)
   - **Kennzeichen** — Für Identifizierung und Berichterstattung
   - **Marke/Modell** — Wählen Sie aus dem Auswahlmenü (z. B. Volvo FH Electric)
   - **Spitzname** — Optional, für einfache Erkennung (z. B. "LKW 014 — Amsterdam-Route")
3. Klicken Sie auf **Speichern & Fortfahren**

Wiederholen Sie dies für jedes Fahrzeug in Ihrer Flotte. Sie können auch **in Bulk importieren** über CSV-Upload.

### CSV-Format

```csv
fin,kennzeichen,marke,model,spitzname
YV2RT60A1PB123456,AB-123-C,Volvo,FH Electric,LKW 014
XLRAE75PC0H987654,DE-456-F,DAF,XF Electric,LKW 022
```

## Schritt 3: Plug & Charge aktivieren

Für jedes Fahrzeug:

1. Gehen Sie zu **Fahrzeuge** → Wählen Sie ein Fahrzeug → Registerkarte **Plug & Charge**
2. Stellen Sie **Plug & Charge aktivieren** auf AN
3. Das System wird:
   - Ein **Vertragszertifikat** für dieses Fahrzeug generieren
   - Die Installation über den Certificate Provisioning Service des OEM anfordern
   - Den Status anzeigen: `In Bearbeitung → Installieren → Aktiv`

:::note Installationszeit Zertifikat
Die Zertifikatinstallation dauert in der Regel **1–24 Stunden**, je nach OEM:
- **Volvo**: In der Regel innerhalb von 2 Stunden über Volvo Connect
- **DAF**: 4–8 Stunden über DAF Connect
- **Mercedes-Benz**: 2–6 Stunden über Fleetboard
- **Scania**: 4–12 Stunden über Scania Fleet Management
- **MAN**: 6–24 Stunden über die RIO-Plattform

Das Fahrzeug muss **online** sein (Kontakt an oder an das Ladesystem angeschlossen), um das Zertifikat zu erhalten.
:::

## Schritt 4: Autorisierung über OEM-Portal

Einige OEMs erfordern, dass Sie PnC-Dienste in ihrem Flottenportal genehmigen:

### Volvo Connect
1. Melden Sie sich bei Volvo Connect an → **Dienste** → **Ladedienste**
2. Suchen Sie nach "Stroomlijnen B.V." in der Partnerliste und klicken Sie auf **Genehmigen**
3. Bestätigen Sie die aufzunehmenden Fahrzeuge
4. Siehe die [Volvo-Markenhandbuch](./brand-guides/volvo-trucks) für detaillierte Schritte

### DAF Connect
1. Melden Sie sich bei DAF Connect an → **Einstellungen** → **Ladepartner**
2. Aktivieren Sie Stroomlijnen und wählen Sie Fahrzeuge aus
3. Siehe die [DAF-Markenhandbuch](./brand-guides/daf) für detaillierte Schritte

### Mercedes-Benz Fleetboard
1. Melden Sie sich bei Fleetboard an → **eMobility** → **Lademanagement**
2. Fügen Sie Stroomlijnen als Ladeanbieter hinzu
3. Siehe die [Mercedes-Markenhandbuch](./brand-guides/mercedes-trucks) für detaillierte Schritte

## Schritt 5: Aktivierungsüberprüfung

Sobald das Zertifikat installiert ist:

1. Im Mein Flotte-Portal → **Fahrzeuge** → Wählen Sie ein Fahrzeug → Registerkarte **Plug & Charge**
2. Der Status sollte **✅ Aktiv** anzeigen
3. Zertifikatdetails werden angezeigt:
   - EMAID (e-Mobility-Kontoidentifikator)
   - Ablaufdatum des Zertifikats
   - Letzte erfolgreiche PnC-Sitzung (sofern vorhanden)

## Schritt 6: Testen

Fahren Sie zu einem Stroomlijnen-Standort und verbinden Sie das Ladekabel. Die Ladesitzung sollte innerhalb von 5–10 Sekunden starten, ohne manuelle Aktion.

**Worauf zu achten:**
- Das Laderdisplay zeigt "Plug & Charge — Verifiziert" (oder ähnlich) an
- Die Sitzung erscheint im Mein Flotte-Portal → **Sitzungen** innerhalb von 1 Minute
- Keine RFID-Tik oder App-Aktion war erforderlich

## Fehlerbehebung bei der Einrichtung

| Problem | Lösung |
|---------|----------|
| Zertifikatstatus bleibt auf "In Bearbeitung" | Stellen Sie sicher, dass das Fahrzeug online ist (Kontakt an). Überprüfen Sie das OEM-Portal auf offene Genehmigungen. |
| OEM-Portal zeigt Stroomlijnen nicht an | Kontaktieren Sie uns — möglicherweise müssen wir die Backend-Verbindung für Ihr spezifisches OEM-Konto herstellen. |
| Zertifikat installiert, aber PnC fehlgeschlagen | Siehe das [Fehlerbehebungshandbuch](./troubleshooting) für detaillierte Diagnose. |
| Fehler "EMAID nicht gefunden" auf dem Lader | Das Zertifikat wurde möglicherweise noch nicht an unsere Backend-Systeme übergeben. Warten Sie 1 Stunde und versuchen Sie es erneut. |
| Bulkimportfehler | Überprüfen Sie das FIN-Format (17 Zeichen, keine O/I/Q), überprüfen Sie, ob die CSV-Codierung UTF-8 ist. |

## Zertifikate verwalten

### Verlängerung
Vertragszertifikate laufen nach **2 Jahren** ab. Das Mein Flotte-Portal sendet E-Mail-Benachrichtigungen 60, 30 und 7 Tage vor dem Ablaufdatum. Die Verlängerung erfolgt automatisch, wenn Ihr Flottenabonnement aktiv ist.

### Widerruf
Wenn ein Fahrzeug verkauft, gestohlen oder außer Betrieb genommen wird:
1. Gehen Sie zu **Fahrzeuge** → Wählen Sie ein Fahrzeug → Registerkarte **Plug & Charge**
2. Klicken Sie auf **Zertifikat widerrufen**
3. Das Zertifikat wird sofort ungültig gemacht auf allen verbundenen Lade-Netzwerken

### Übertragung
Wenn ein Fahrzeug an eine andere Abrechnungseinheit innerhalb Ihrer Organisation übergeht:
1. Widerrufen Sie das aktuelle Zertifikat
2. Registrieren Sie das Fahrzeug erneut unter der neuen Abrechnungseinheit
3. Ein neues Zertifikat wird ausgestellt

---

**Weiter:** [Markenhandbücher →](./brand-guides/volvo-trucks)