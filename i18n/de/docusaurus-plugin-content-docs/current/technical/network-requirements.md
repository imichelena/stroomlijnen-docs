---
sidebar_position: 3
title: Netzwerkanforderungen
description: Netzwerk- und Verbindungsanforderungen für Stroomlijnen-Ladestationen — Bandbreite, Firewallregeln und Failover.
keywords: [Netzwerkanforderungen, Laderkonnektivität, Firewall, Bandbreite, 4G-Failover, Standortnetzwerk]
---

# Netzwerkanforderungen

Jedes Stroomlijnen-Ladestation benötigt eine zuverlässige Internetverbindung, um mit unserem CSMS zu kommunizieren. Auf dieser Seite finden Sie die Anforderungen für Standortbetreiber und IT-Teams.

## Konnektivität

### Primär: Verkabeltes Ethernet
- **Minimale Bandbreite:** 1 Mbps pro Lader (symmetrisch)
- **Empfohlen:** 10 Mbps geteilt für bis zu 10 Lader
- **Latenz:** < 200 ms zu unseren CSMS-Endpunkten
- **Protokoll:** WebSocket über TLS (wss://)

### Back-up: 4G/LTE
- Alle Stroomlijnen-Lader haben ein eingebauten 4G-Modem
- Aktiviert automatisch, wenn die verkabelte Verbindung ausfällt
- Ausreichend für OCPP-Kommunikation (geringe Bandbreite)
- Nicht geeignet für Firmware-Updates (verwenden Sie dafür eine verkabelte Verbindung)

## Firewallregeln

Wenn das Standortnetzwerk eine Firewall hat, muss folgendes **ausgehend** vom VLAN/Subnet des Laders zugelassen werden:

| Ziel | Port | Protokoll | Zweck |
|-------------|------|----------|---------|
| csms.stroomlijnen.nl | 443 | TCP (WSS) | OCPP-Kommunikation |
| firmware.stroomlijnen.nl | 443 | TCP (HTTPS) | Firmware-Updates |
| ntp.stroomlijnen.nl | 123 | UDP (NTP) | Zeitsynchronisierung |
| hubject.com | 443 | TCP (HTTPS) | PnC-Zertifikatsvalidierung |
| *.sentry.io | 443 | TCP (HTTPS) | Fehlerberichterstattung (optional) |

**Keine eingehenden Ports** müssen geöffnet werden. Lader initiieren alle Verbindungen ausgehend.

## Netzwerkisolierung

Wir empfehlen, Lader auf einem **eigenen VLAN** zu platzieren, isoliert vom allgemeinen Netzwerk des Standorts:

- Verhindert, dass Laderverkehr mit Unternehmensverkehr vermischt wird
- Vereinfacht Firewallregeln
- Reduziert die Angriffsfläche
- Ermöglicht QoS (Quality of Service)-Priorisierung bei Bedarf

## IP-Adressierung

- **DHCP hat Vorrang** — Lader fragen eine IP-Adresse über DHCP an
- **Statische IP** — Kann während der Installation konfiguriert werden, wenn erforderlich
- **IPv4** — Erforderlich (Lader-zu-CSMS)
- **IPv6** — Nicht erforderlich für CSMS-Kommunikation (intern verwendet auf dem Ladekabel für ISO 15118)

## DNS

Lader benötigen DNS-Auflösung für unsere CSMS-Hostnamen. Entweder:
- Eine DNS-Server-Adresse über DHCP bereitstellen oder
- Statische DNS konfigurieren (wir empfehlen 1.1.1.1 / 8.8.8.8 als Fallback)

## Zeitsynchronisierung

Genaue Zeit ist essentiell für:
- Zertifikatsvalidierung (Ablaufdatumprüfungen)
- Sitzungsmessung (Rechnungsgenauigkeit)
- Logkorrelation

Lader synchronisieren die Zeit über:
1. NTP (primär) — von unserem NTP-Server oder einem öffentlichen NTP-Pool
2. OCPP-Heartbeat — CSMS enthält Timestamp in Heartbeat-Antworten (Sicherung)

## Bandbreitenschätzung

| Aktivität | Bandbreite | Häufigkeit |
|----------|-----------|-----------|
| OCPP-Heartbeat | ~1 KB | Alle 60 Sekunden |
| Autorisierungsanfrage | ~2 KB | Pro Sitzungsstart |
| Zählerwerte | ~1 KB | Alle 15 Sekunden während des Ladevorgangs |
| Sitzungsstart/Stop | ~3 KB | Pro Ereignis |
| Firmware-Update | 50–200 MB | Jedes Quartal |

**Typische Belastung pro Lader:** ~50 KB/Stunde während aktiven Ladens, ~1 KB/Stunde im Ruhezustand.

## Standortbewertung

Vor der Installation führt Stroomlijnen eine Netzwerkbewertung durch:
1. **Konnektivitätstest** — Überprüfen Sie, ob das verkabelte Internet die Laderposition erreicht
2. **4G-Abdeckung** — Testen Sie die Signalstärke des Mobilfunknetzes am Installationsort
3. **Firewallbewertung** — Bestätigen Sie, dass die erforderlichen Ports geöffnet sind
4. **Bandbreitentest** — Überprüfen Sie die ausreichende Kapazität für die geplante Anzahl von Ladern

## Fehlerbehebung

### Lader zeigt "Offline" im Portal an
1. Überprüfen Sie die physische Ethernet-Verbindung (Link-LEDs auf Lader und Switch)
2. Verifizieren Sie, dass DHCP eine IP-Adresse zuweist (überprüfen Sie die DHCP-Server-Logdateien)
3. Testen Sie die DNS-Auflösung vom Subnet des Laders
4. Verifizieren Sie, dass die Firewall ausgehenden Datenverkehr zum Port 443 auf csms.stroomlijnen.nl zulässt
5. Wenn die verkabelte Verbindung fehlschlägt, überprüfen Sie das 4G-Signal und den SIM-Status

### Sporadische unterbrochene Verbindungen
- Überprüfen Sie auf Netzwerküberlastung oder QoS-Probleme
- Verifizieren Sie, dass die Switch-Port nicht in den Schlafmodus wechselt (Energiesparmodus auf dem Port deaktivieren)
- Überprüfen Sie auf IP-Konflikte (ein anderes Gerät mit der gleichen IP-Adresse)
- Überprüfen Sie die Time-out-Einstellungen der Firewall-Sitzung (WebSocket-Verbindungen sind langlebig)