---
sidebar_position: 3
title: Netwerkvereisten
description: Netwerk- en verbindingsvereisten voor Stroomlijnen-laadstations — bandbreedte, firewallregels en failover.
keywords: [netwerkvereisten, laderconnectiviteit, firewall, bandbreedte, 4G failover, locatienetwerk]
---

# Netwerkvereisten

Elk Stroomlijnen-laadstation heeft een betrouwbare internetverbinding nodig om te communiceren met ons CSMS. Op deze pagina staan de vereisten voor locatie-exploitanten en IT-teams.

## Connectiviteit

### Primair: Bekabeld Ethernet
- **Minimale bandbreedte:** 1 Mbps per lader (symmetrisch)
- **Aanbevolen:** 10 Mbps gedeeld voor tot 10 laders
- **Latentie:** < 200 ms naar onze CSMS-eindpunten
- **Protocol:** WebSocket via TLS (wss://)

### Back-up: 4G/LTE
- Alle Stroomlijnen-laders hebben een ingebouwde 4G-modem
- Activeert automatisch als de bekabelde verbinding uitvalt
- Voldoende voor OCPP-communicatie (lage bandbreedte)
- Niet geschikt voor firmware-updates (gebruik bekabeld daarvoor)

## Firewallregels

Als het locatienetwerk een firewall heeft, moet het volgende **uitgaand** zijn toegestaan vanuit het VLAN/subnet van de lader:

| Bestemming | Poort | Protocol | Doel |
|-------------|------|----------|---------|
| csms.stroomlijnen.nl | 443 | TCP (WSS) | OCPP-communicatie |
| firmware.stroomlijnen.nl | 443 | TCP (HTTPS) | Firmware-updates |
| ntp.stroomlijnen.nl | 123 | UDP (NTP) | Tijdsynchronisatie |
| hubject.com | 443 | TCP (HTTPS) | PnC-certificaatvalidatie |
| *.sentry.io | 443 | TCP (HTTPS) | Foutrapportage (optioneel) |

**Geen inkomende poorten** hoeven te worden geopend. Laders initiëren alle verbindingen uitgaand.

## Netwerkisolatie

We raden aan laders op een **eigen VLAN** te plaatsen, geïsoleerd van het algemene netwerk van de locatie:

- Voorkomt dat laderverkeer zich mengt met bedrijfsverkeer
- Vereenvoudigt firewallregels
- Verkleint het aanvalsoppervlak
- Maakt QoS (Quality of Service)-prioritering mogelijk indien nodig

## IP-adressering

- **DHCP heeft voorkeur** — Laders vragen een IP aan via DHCP
- **Statisch IP** — Kan worden geconfigureerd tijdens installatie indien vereist
- **IPv4** — Vereist (lader-naar-CSMS)
- **IPv6** — Niet vereist voor CSMS-communicatie (intern gebruikt op de laadkabel voor ISO 15118)

## DNS

Laders hebben DNS-omzetting nodig voor onze CSMS-hostnamen. Ofwel:
- Een DNS-server verstrekken via DHCP, of
- Statische DNS configureren (we raden 1.1.1.1 / 8.8.8.8 aan als terugval)

## Tijdsynchronisatie

Nauwkeurige tijd is essentieel voor:
- Certificaatvalidatie (vervaldatumcontroles)
- Sessiemeting (factuurnauwkeurigheid)
- Logcorrelatie

Laders synchroniseren de tijd via:
1. NTP (primair) — van onze NTP-server of een publieke NTP-pool
2. OCPP-heartbeat — CSMS bevat tijdstempel in heartbeat-antwoorden (back-up)

## Bandbreedteschatting

| Activiteit | Bandbreedte | Frequentie |
|----------|-----------|-----------|
| OCPP-heartbeat | ~1 KB | Elke 60 seconden |
| Autorisatieverzoek | ~2 KB | Per sessiestart |
| Meterwaarden | ~1 KB | Elke 15 seconden tijdens laden |
| Sessie starten/stoppen | ~3 KB | Per gebeurtenis |
| Firmware-update | 50–200 MB | Elk kwartaal |

**Typische belasting per lader:** ~50 KB/uur tijdens actief laden, ~1 KB/uur in rust.

## Locatiebeoordeling

Voor installatie voert Stroomlijnen een netwerkbeoordeling uit:
1. **Connectiviteitstest** — Verifieer dat bekabeld internet de laderlocatie bereikt
2. **4G-dekking** — Test de sterkte van het mobiele signaal op het installatiepunt
3. **Firewallbeoordeling** — Bevestig dat vereiste poorten worden geopend
4. **Bandbreedtetest** — Verifieer voldoende capaciteit voor het geplande aantal laders

## Probleemoplossing

### Lader toont "Offline" in portaal
1. Controleer de fysieke Ethernet-verbinding (link-LED's op lader en switch)
2. Verifieer dat DHCP een IP toewijst (raadpleeg DHCP-serverlogboeken)
3. Test DNS-omzetting vanuit het subnet van de lader
4. Verifieer dat de firewall uitgaand verkeer naar poort 443 op csms.stroomlijnen.nl toestaat
5. Als bekabeld mislukt, controleer dan 4G-signaal en SIM-status

### Sporadische verbroken verbindingen
- Controleer op netwerkcongestie of QoS-problemen
- Verifieer dat de switchpoort niet in slaapstand gaat (energiebesparing op de poort uitschakelen)
- Controleer op IP-conflicten (een ander apparaat met hetzelfde IP)
- Bekijk time-outinstellingen van de firewall-sessie (WebSocket-verbindingen zijn langlevend)
