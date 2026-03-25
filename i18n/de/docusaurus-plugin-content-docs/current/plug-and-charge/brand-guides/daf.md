---
sidebar_position: 2
title: DAF-Lkw — Plug & Charge einrichten
description: Schritt-für-Schritt-Anleitung zum Aktivieren von Plug & Charge auf DAF XF, XD und XB Elektro-Lkw über DAF Connect.
keywords: [DAF, XF Electric, XD Electric, XB Electric, DAF Connect, Plug and Charge, ISO 15118]
---

# DAF-Lkw — Plug & Charge einrichten

Das elektrische Lkw-Angebot von DAF — Teil der PACCAR-Gruppe — unterstützt ISO 15118-2 Plug & Charge auf allen aktuellen BEV-Modellen. Die Konfiguration wird über DAF Connect, die Flottenmanagementplattform, verwaltet.

## Unterstützte Modelle

| Modell | Batterieoptionen | Max. DC-Laden | PnC bereit |
|-------|-----------|---------------|:---------:|
| XF Electric | Bis 525 kWh | 350 kW (CCS) | ✅ |
| XD Electric | Bis 350 kWh | 250 kW (CCS) | ✅ |
| XB Electric | Bis 210 kWh | 175 kW (CCS) | ✅ |

## Anforderungen

- DAF Connect-Flottenmanagementkonto mit Administratorzugang
- Aktuellste Fahrzeugsoftware (überprüfen in DAF Connect → Fahrzeug → Diagnose)
- Stroomlijnen-Flottenkonto mit PnC aktiviert ([Installationsanleitung](../setup-guide))

## Schritt für Schritt: DAF Connect

### 1. Zugriff auf Ladeeinstellungen

1. Melden Sie sich bei [DAF Connect](https://dafconnect.paccar.com) an
2. Navigieren Sie zu **Flottenmanagement** → **Elektromobilität**
3. Wenn Sie den Bereich Elektromobilität nicht sehen, wenden Sie sich an den DAF Connect-Support, um diesen für Ihr Konto zu aktivieren

### 2. Lade-Partner konfigurieren

1. Gehen Sie zu **Elektromobilität** → **Lade-Partner**
2. Klicken Sie auf **Lade-Partner hinzufügen**
3. Suchen Sie nach **"Stroomlijnen"** oder geben Sie die Partner-ID `NL-STM` ein
4. Klicken Sie auf **Hinzufügen und autorisieren**

### 3. Fahrzeuge zuweisen

1. Gehen Sie nach dem Hinzufügen von Stroomlijnen zu **Lade-Partner** → **Stroomlijnen B.V.**
2. Klicken Sie auf **Fahrzeuge verwalten**
3. Wählen Sie die Lkw aus, die PnC verwenden sollen
4. Klicken Sie auf **Speichern**

### 4. Zertifikatinstallation genehmigen

1. DAF Connect zeigt eine Benachrichtigung zur Genehmigung der Zertifikatinstallation an
2. Überprüfen Sie die Anforderungsdetails (Fahrzeuge, Berechtigungen)
3. Klicken Sie auf **Genehmigen**
4. Die Vertragszertifikate werden an die ausgewählten Lkw gesendet

### 5. Warten auf Installation

- Die Zertifikatlieferung dauert in der Regel **4–8 Stunden**
- Das Fahrzeug muss online sein (Kontakt eingeschaltet oder an eine Stromquelle angeschlossen)
- Verfolgen Sie den Status in DAF Connect → **Elektromobilität** → **Zertifikatsstatus**

### 6. Überprüfen und testen

1. Überprüfen Sie den Status sowohl in DAF Connect als auch in Stroomlijnen Mein Flotte
2. Stecken Sie das Fahrzeug an einer Stroomlijnen-Ladestation ein, um die automatische Authentifizierung zu überprüfen
3. Die erste PnC-Sitzung bestätigt, dass alles funktioniert

## Hinweis zur Aktivierung durch den Flottenmanager

DAF erfordert, dass der **Flottenmanager** (nicht einzelne Fahrer) PnC für jedes Fahrzeug aktiviert. Dies ist eine Sicherheitsfunktion — nur autorisierte Flottenmanager können die automatische Abrechnung auf Unternehmensfahrzeugen aktivieren.

Wenn Ihre Organisation mehrere Flottenmanager hat:
- Jeder kann PnC für Fahrzeuge unter seiner Verwaltung aktivieren
- Ein Super-Manager kann Elektromobilitätsrechte delegieren

## Fehlerbehebung

### Bereich "Elektromobilität" nicht sichtbar
Diese Funktion erfordert ein DAF Connect Premium-Abonnement. Wenden Sie sich an Ihren DAF-Händler, um Ihr Abonnementsniveau zu überprüfen.

### Zertifikatinstallation dauert länger als 24 Stunden
1. Überprüfen Sie, ob das Fahrzeug mindestens 1 Stunde online war, nachdem die Genehmigung erteilt wurde
2. Überprüfen Sie DAF Connect auf Fehlermeldungen unter Elektromobilität → Meldungen
3. Wenden Sie sich an den Stroomlijnen-Support, um zu überprüfen, ob die Anfrage auf unserer Seite erhalten wurde

### Authentifizierung schlägt bei der Ladestation fehl
1. Überprüfen Sie in DAF Connect, ob der Zertifikatsstatus "Aktiv" ist
2. Stellen Sie sicher, dass die Fahrzeugsoftware aktuell ist
3. Starten Sie das Fahrzeug neu (vollständiger Kontaktzyklus)
4. Siehe die allgemeine [Fehlerbehebungsanleitung](../troubleshooting)

---

**Weiter:** [Mercedes-Benz einrichten →](./mercedes-trucks)