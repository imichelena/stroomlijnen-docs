---
sidebar_position: 10
title: Fehlerbehebung Plug & Charge
description: Häufige Plug & Charge-Probleme und Lösungen — von Zertifikatsfehlern bis Kommunikationsstörungen bei der Ladestation.
keywords: [Plug and Charge Fehlerbehebung, PnC-Fehler, ISO 15118-Probleme, Ladevorgang fehlgeschlagen, Zertifikatsfehler]
---

# Fehlerbehebung Plug & Charge

Wenn Plug & Charge nicht wie erwartet funktioniert, fällt das Problem in der Regel in eine von mehreren Kategorien: Zertifikatsprobleme, Kommunikationsstörungen oder Konfigurationsmängel. Diese Anleitung behandelt die häufigsten Probleme.

## Schnelle Diagnose-Checkliste

Führen Sie diese Checkliste durch, bevor Sie sich mit den Details befassen:

- [ ] Ist das Fahrzeug [PnC-kompatibel](./compatible-vehicles)?
- [ ] Ist die Firmware des Fahrzeugs auf dem neuesten Stand?
- [ ] Ist PnC im Stroomlijnen Mijn Vloot-Portal aktiviert?
- [ ] Zeigt der Zertifikatsstatus "Aktiv" in beiden Portalen (OEM + Stroomlijnen)?
- [ ] Steht der Fahrzeugkontakt an oder ist die Accessoiremodus aktiv?
- [ ] Steckt die CCS-Kabel vollständig in der Fahrzeugaufnahme?

## Häufige Probleme

### 1. Ladestation zeigt "Authentifizierung fehlgeschlagen"

**Symptome:** Kabel angeschlossen, Ladestation versucht PnC, aber gibt einen Authentifizierungsfehler aus.

**Ursachen & Lösungen:**

| Ursache | Lösung |
|---------|----------|
| Zertifikat abgelaufen | Überprüfen Sie das Ablaufdatum im Mijn Vloot → Fahrzeug → PnC-Reiter. Verlängern Sie es, wenn es abgelaufen ist. |
| Zertifikat noch nicht installiert | Status kann "In Bearbeitung" anzeigen. Stellen Sie sicher, dass das Fahrzeug online ist. Warten Sie bis zu 24 Stunden. |
| Zertifikat widerrufen | Wenn absichtlich widerrufen, aktivieren Sie PnC erneut über das Portal. |
| EMAID nicht synchronisiert | Kontaktieren Sie den Stroomlijnen-Support — unser Backend muss möglicherweise mit Hubject synchronisiert werden. |
| Falsches Zertifikat präsentiert | Wenn mehrere eMSP-Zertifikate installiert sind, kann das Fahrzeug das falsche präsentieren. Überprüfen Sie das OEM-Portal. |

### 2. Ladestation fällt zurück auf RFID

**Symptome:** Anstatt PnC zu verwenden, fordert die Ladestation "Bitte scannen Sie Ihre RFID-Karte."

**Ursachen & Lösungen:**

- **Fahrzeug startet ISO 15118-2 nicht:** Die Kommunikationsmodule des Fahrzeugs bietet möglicherweise PnC nicht an. Starten Sie das Fahrzeug neu und versuchen Sie es erneut.
- **PLC-Kommunikation fehlgeschlagen:** Power Line Communication zwischen Kabel und Fahrzeug kann nicht hergestellt werden. Versuchen Sie, ein anderes Kabel oder einen anderen Connector (wenn verfügbar) zu verwenden. Reinigen Sie die CCS-Connectorkontakte.
- **PnC der Ladestation vorübergehend deaktiviert:** Selten kann eine Ladestation PnC für Wartungszwecke deaktivieren. Versuchen Sie, eine andere Ladestation an derselben Stelle zu verwenden.

### 3. Zertifikatsstatus bleibt auf "In Bearbeitung"

**Symptome:** Sie haben PnC vor Tagen aktiviert, aber das Zertifikat ist nicht installiert worden.

**Lösungen:**
1. **Stellen Sie sicher, dass das Fahrzeug online war** — Das Fahrzeug muss eingeschaltet sein (Kontakt oder Accessoiremodus) mit mobiler Verbindung, damit das Zertifikat ausgeliefert werden kann
2. **Überprüfen Sie das OEM-Portal** — Es kann ein offenes Autorisierungsanfrage geben, das Sie genehmigen müssen
3. **Überprüfen Sie die Portalrechte** — Stellen Sie sicher, dass Ihr Konto Administratorzugriff für PnC-Verwaltung hat
4. **Zertifikatinstallation erneut auslösen** — Im Mijn Vloot → Fahrzeug → PnC-Reiter, klicken Sie auf **Zertifikatanfrage erneut senden**
5. **Kontaktieren Sie den Support** — Wenn länger als 48 Stunden feststeckt, kontaktieren Sie sowohl Stroomlijnen als auch Ihren OEM-Händler

### 4. PnC Funktioniert Sporadisch

**Symptome:** PnC funktioniert bei einigen Ladestationen oder zu bestimmten Zeiten, aber schlägt fehl, ohne erkennbares Muster.

**Mögliche Ursachen:**

- **Schwaches PLC-Signal:** Das Power Line Communication-Signal kann durch Kabelzustand, Connectorverschleiß oder elektromagnetische Interferenzen beeinflusst werden. Versuchen Sie, das Kabel vollständig zu trennen und erneut anzuschließen.
- **Softwarefehler im Fahrzeug:** Starten Sie das Fahrzeug neu (vollständiger Kontaktzyklus: aus → 30 Sekunden warten → an).
- **Backend-Time-out:** Wenn unser Backend langsam reagiert, kann die Ladestation einen Time-out erhalten. Dies wird in der Regel durch erneutes Versuchen behoben.
- **Zertifikat bald abgelaufen:** Einige Systeme haben strengere Validierung, wenn Zertifikate bald ablaufen. Überprüfen Sie die verbleibende Gültigkeit.

### 5. Fehler "Vertragszertifikat ungültig"

**Symptome:** Die Ladestation meldet speziell das Vertragszertifikat als ungültig.

**Lösungen:**
1. **Überprüfen Sie die Zertifikatkette:** Überprüfen Sie die Zertifikatdetails im Mijn Vloot. Wenn die Kette gebrochen ist (z.B. Zwischen-CA abgelaufen), kontaktieren Sie den Stroomlijnen-Support.
2. **Zeitsynchronisation:** Wenn die Uhr des Fahrzeugs erheblich von der aktuellen Zeit abweicht, kann die Zertifikatsvalidierung fehlschlagen. Dies ist selten bei modernen Fahrzeugen, aber möglich nach langer Lagerung.
3. **Root CA-Update erforderlich:** Die Ladestation benötigt möglicherweise ein aktualisiertes Rootzertifikat. Stroomlijnen verwaltet dies automatisch, aber während der Rollout-Phasen können vorübergehende Lücken auftreten. Melden Sie die spezifische Ladegeräte-ID beim Support.

### 6. Sitzung Startet Aber Stoppt Sofort

**Symptome:** PnC authentifiziert erfolgreich, Laden beginnt, aber stoppt innerhalb von Sekunden.

**Dies ist in der Regel kein PnC-Problem.** Die Authentifizierung hat funktioniert — das Problem liegt in der Ladesitzung selbst:

- **Eingreifen des Batteriemanagementsystems (BMS):** Das BMS des Fahrzeugs kann die Ladezufuhr einschränken (Temperatur, SoC, Zellbalancierung)
- **Leistungsverhandlung fehlgeschlagen:** Die Ladestation und das Fahrzeug konnten sich nicht auf Ladeparameter einigen. Versuchen Sie es erneut — dynamische Leistungszuweisung kann variieren.
- **Erdungsfehlererkennung:** Das Sicherheitssystem hat ein Problem erkannt. Trennen Sie die Verbindung, überprüfen Sie das Kabel und den Stecker auf Feuchtigkeit oder Schmutz und versuchen Sie es erneut.

## Fehlercodes

Wenn die Ladestation einen spezifischen Fehlercode anzeigt, notieren Sie diesen und kontaktieren Sie den Support. Häufige Codes:

| Code | Bedeutung | Aktion |
|------|---------|--------|
| AUTH-001 | Kein gültiges Vertragszertifikat gefunden | Überprüfen Sie die Zertifikatinstallation |
| AUTH-002 | Zertifikatkettvalidierung fehlgeschlagen | Kontaktieren Sie den Support |
| AUTH-003 | EMAID nicht autorisiert | Überprüfen Sie den PnC-Status im Mijn Vloot |
| AUTH-004 | Backend-Kommunikation Time-out | Warten Sie 2 Minuten, versuchen Sie es erneut |
| COMM-001 | PLC-Verbindung fehlgeschlagen | Kabel erneut anschließen, Kontakte reinigen |
| COMM-002 | ISO 15118-Protokollversion nicht kompatibel | Firmware des Fahrzeugs aktualisieren |
| COMM-003 | TLS-Handshake fehlgeschlagen | Kontaktieren Sie den Support |

## Diagnoseinformationen Sammeln

Stellen Sie sicher, dass Sie bei der Kontaktaufnahme mit dem Support folgende Informationen bereitstellen:

1. **Fahrzeugdetails:** Marke, Modell, VIN, Firmwareversion
2. **Ladestationdetails:** Standortname, Ladegeräte-ID (auf dem Gerät gedruckt, Format: `NL*STM*E...`)
3. **Datum und Uhrzeit** des fehlgeschlagenen Versuchs
4. **Fehlermeldung** oder Code auf der Ladestation angezeigt
5. **Screenshots** vom Ladegerätedisplay und/oder Fahrzeugdashboard (wenn sicher zu machen)

## Kontaktieren Sie Den Support

- **E-Mail:** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Telefon:** Verfügbar für Flottenkunden (siehe Ihr Vertrag für die Supportnummer)
- **Mijn Vloot-Portal:** Reichen Sie eine Supportanfrage über den Hilfebereich ein

---

**Immer noch feststecken?** Überprüfen Sie die [FAQ](../faq) für weitere häufig gestellte Fragen oder kontaktieren Sie Ihren Stroomlijnen-Kontomanager.