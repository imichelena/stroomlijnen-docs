---
sidebar_position: 3
title: Netwerkvereisten
description: Netwerk- en connectiviteitsvereisten voor Stroomlijnen-laadstations — bandbreedte, firewallregels en failover.
keywords: [network requirements, charger connectivity, firewall, bandwidth, 4G failover, site network]
---

# Netwerkvereisten

Elk Stroomlijnen-laadstation heeft een betrouwbare internetverbinding nodig om te communiceren met ons CSMS. Deze pagina beschrijft de vereisten voor locatiebeheerders en IT-teams.

## Connectiviteit

### Primair: Bedraad Ethernet
- **Minimale bandbreedte:** 1 Mbps per lader (symmetrisch)
- **Aanbevolen:** 10 Mbps gedeeld voor tot 10 laders
- **Latentie:** < 200 ms naar onze CSMS-eindpunten
- **Protocol:** WebSocket over TLS (wss://)

### Backup: 4G/LTE
- Alle Stroomlijnen-laders beschikken over een ingebouwd 4G-modem
- Activeert automatisch als de bedrade verbinding uitvalt
- Voldoende voor OCPP-communicatie (lage bandbreedte)
- Niet geschikt voor firmware-updates (gebruik hiervoor bedrade verbinding)

## Firewallregels

Als het locatienetwerk een firewall heeft, moet het volgende **uitgaand** zijn toegestaan vanuit het VLAN/subnet van de lader:

| Bestemming | Poort | Protocol | Doel |
|------------|-------|----------|------|
| csms.stroomlijnen.nl | 443 | TCP (WSS) | OCPP-communicatie |
| firmware.stroomlijnen.nl | 443 | TCP (HTTPS) | Firmware-updates |
| ntp.stroomlijnen.nl | 123 | UDP (NTP) | Tijdsynchronisatie |
| hubject.com | 443 | TCP (HTTPS) | PnC-certificaatvalidatie |
| *.sentry.io | 443 | TCP (HTTPS) | Foutrapportage (optioneel) |

**Er hoeven geen inkomende poorten** geopend te worden. Laders initiëren alle verbindingen uitgaand.

## Netwerkisolatie

We raden aan om laders op een **apart VLAN** te plaatsen, geïsoleerd van het algemene netwerk van de locatie:

- Voorkomt dat laderverkeer zich mengt met bedrijfsverkeer
- Vereenvoudigt firewallregels
- Vermindert het aanvalsoppervlak
- Maakt QoS (Quality of Service)-prioritering mogelijk indien gewenst

## IP-adressering

- **DHCP heeft de voorkeur** — Laders vragen een IP-adres op via DHCP
- **Statisch IP** — Kan worden geconfigureerd tijdens installatie indien vereist
- **IPv4** — Vereist (lader naar CSMS)
- **IPv6** — Niet vereist voor CSMS-communicatie (wordt intern op de laadkabel gebruikt voor ISO 15118)

## DNS

Laders hebben DNS-resolutie nodig voor onze CSMS-hostnamen. Kies één van de volgende opties:
- Stel een DNS-server in via DHCP, of
- Configureer statisch DNS (wij raden 1.1.1.1 / 8.8.8.8 aan als fallback)

## Tijdsynchronisatie

Nauwkeurige tijd is cruciaal voor:
- Certificaatvalidatie (vervaldatumcontroles)
- Sessiemeting (factuurnauwkeurigheid)
- Logcorrelatie

Laders synchroniseren de tijd via:
1. NTP (primair) — vanuit onze NTP-server of een publieke NTP-pool
2. OCPP-heartbeat — CSMS neemt tijdstempel op in heartbeat-antwoorden (backup)

## Bandbreedteschatting

| Activiteit | Bandbreedte | Frequentie |
|------------|-------------|------------|
| OCPP-heartbeat | ~1 KB | Elke 60 seconden |
| Autorisatieverzoek | ~2 KB | Per sessiestart |
| Meterwaarden | ~1 KB | Elke 15 seconden tijdens laden |
| Sessiestart/-stop | ~3 KB | Per gebeurtenis |
| Firmware-update | 50–200 MB | Per kwartaal |

**Typische belasting per lader:** ~50 KB/uur tijdens actief laden, ~1 KB/uur in rust.

## Locatieverkenning

Vóór installatie voert Stroomlijnen een netwerkevaluatie uit:
1. **Connectiviteitstest** — Verifiëren of bedraad internet de laderlocatie bereikt
2. **4G-dekking** — Cellulaire signaalsterkte testen op het installatiepunt
3. **Firewallcontrole** — Bevestigen dat de vereiste poorten worden geopend
4. **Bandbreedtetest** — Voldoende capaciteit verifiëren voor het geplande aantal laders

## Probleemoplossing

### Lader toont "Offline" in portaal
1. Controleer de fysieke Ethernet-verbinding (linklampen op lader en switch)
2. Verifieer of DHCP een IP-adres toewijst (controleer DHCP-serverlogs)
3. Test DNS-resolutie vanuit het subnet van de lader
4. Controleer of de firewall uitgaand verkeer op poort 443 naar csms.stroomlijnen.nl toestaat
5. Als bedraad mislukt, controleer dan 4G-signaal en SIM-status

### Intermitterende verbrekingen
- Controleer op netwerkcongestion of QoS-problemen
- Verifieer dat de switchpoort niet in slaapstand gaat (schakel energiebesparing op de poort uit)
- Controleer op IP-conflicten (een ander apparaat met hetzelfde IP)
- Bekijk de firewallsessie-timeoutinstellingen (WebSocket-verbindingen zijn langlevend)
