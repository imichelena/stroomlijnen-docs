---
sidebar_position: 3
title: Network Requirements
description: Network and connectivity requirements for Stroomlijnen charging stations — bandwidth, firewall rules, and failover.
keywords: [network requirements, charger connectivity, firewall, bandwidth, 4G failover, site network]
---

# Network Requirements

Every Stroomlijnen charging station needs a reliable internet connection to communicate with our CSMS. This page details the requirements for site operators and IT teams.

## Connectivity

### Primary: Wired Ethernet
- **Minimum bandwidth:** 1 Mbps per charger (symmetric)
- **Recommended:** 10 Mbps shared for up to 10 chargers
- **Latency:** < 200 ms to our CSMS endpoints
- **Protocol:** WebSocket over TLS (wss://)

### Backup: 4G/LTE
- All Stroomlijnen chargers include a built-in 4G modem
- Activates automatically if the wired connection fails
- Sufficient for OCPP communication (low bandwidth)
- Not suitable for firmware updates (use wired for those)

## Firewall Rules

If the site network has a firewall, the following must be allowed **outbound** from the charger's VLAN/subnet:

| Destination | Port | Protocol | Purpose |
|-------------|------|----------|---------|
| csms.stroomlijnen.nu | 443 | TCP (WSS) | OCPP communication |
| firmware.stroomlijnen.nu | 443 | TCP (HTTPS) | Firmware updates |
| ntp.stroomlijnen.nu | 123 | UDP (NTP) | Time synchronization |
| hubject.com | 443 | TCP (HTTPS) | PnC certificate validation |
| *.sentry.io | 443 | TCP (HTTPS) | Error reporting (optional) |

**No inbound ports** need to be opened. Chargers initiate all connections outbound.

## Network Isolation

We recommend placing chargers on a **dedicated VLAN**, isolated from the site's general network:

- Prevents charger traffic from mixing with business traffic
- Simplifies firewall rules
- Reduces attack surface
- Allows QoS (Quality of Service) prioritization if needed

## IP Addressing

- **DHCP preferred** — Chargers request an IP via DHCP
- **Static IP** — Can be configured during installation if required
- **IPv4** — Required (charger-to-CSMS)
- **IPv6** — Not required for CSMS communication (used internally on the charging cable for ISO 15118)

## DNS

Chargers need DNS resolution for our CSMS hostnames. Either:
- Provide a DNS server via DHCP, or
- Configure static DNS (we recommend 1.1.1.1 / 8.8.8.8 as fallback)

## Time Synchronization

Accurate time is critical for:
- Certificate validation (expiry checks)
- Session metering (billing accuracy)
- Log correlation

Chargers sync time via:
1. NTP (primary) — from our NTP server or a public NTP pool
2. OCPP heartbeat — CSMS includes timestamp in heartbeat responses (backup)

## Bandwidth Estimation

| Activity | Bandwidth | Frequency |
|----------|-----------|-----------|
| OCPP heartbeat | ~1 KB | Every 60 seconds |
| Authorization request | ~2 KB | Per session start |
| Meter values | ~1 KB | Every 15 seconds during charging |
| Session start/stop | ~3 KB | Per event |
| Firmware update | 50–200 MB | Quarterly |

**Typical load per charger:** ~50 KB/hour during active charging, ~1 KB/hour when idle.

## Site Survey

Before installation, Stroomlijnen performs a network assessment:
1. **Connectivity test** — Verify wired internet reaches the charger location
2. **4G coverage** — Test cellular signal strength at the installation point
3. **Firewall review** — Confirm required ports will be opened
4. **Bandwidth test** — Verify sufficient capacity for the planned number of chargers

## Troubleshooting

### Charger shows "Offline" in portal
1. Check physical Ethernet connection (link lights on charger and switch)
2. Verify DHCP is assigning an IP (check DHCP server logs)
3. Test DNS resolution from the charger's subnet
4. Verify firewall allows outbound 443 to csms.stroomlijnen.nu
5. If wired fails, check 4G signal and SIM status

### Intermittent disconnections
- Check for network congestion or QoS issues
- Verify the switch port isn't going to sleep (disable energy saving on the port)
- Check for IP conflicts (another device with the same IP)
- Review firewall session timeout settings (WebSocket connections are long-lived)
