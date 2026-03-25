---
sidebar_position: 3
title: Wymagania sieciowe
description: Wymagania dotyczące sieci i połączeń dla stacji ładowania Stroomlijnen — przepustowość, reguły zapory ogniowej i tryb failover.
keywords: [wymagania sieciowe, łączność ładowarki, zapora ogniowa, przepustowość, tryb failover 4G, sieć lokalna]
---

# Wymagania sieciowe

Każda stacja ładowania Stroomlijnen wymaga niezawodnego połączenia internetowego w celu komunikacji z naszym systemem CSMS. Na tej stronie znajdują się wymagania dla operatorów lokalnych i zespołów IT.

## Łączność

### Podstawowa: Ethernet przewodowy
- **Minimalna przepustowość:** 1 Mbps na ładowarkę (symetryczna)
- **Zalecana:** 10 Mbps współdzielona dla do 10 ładowarek
- **Opóźnienie:** < 200 ms do punktów końcowych naszego systemu CSMS
- **Protokół:** WebSocket za pośrednictwem TLS (wss://)

### Rezerwowa: 4G/LTE
- Wszystkie ładowarki Stroomlijnen mają wbudowany moduł 4G
- Aktywuje się automatycznie, gdy połączenie przewodowe ulega awarii
- Wystarczająca dla komunikacji OCPP (niska przepustowość)
- Nie nadaje się do aktualizacji oprogramowania układowego (użyj połączenia przewodowego)

## Reguły zapory ogniowej

Jeśli sieć lokalna ma zaporę ogniową, należy zezwolić na następujące **wychodzące** połączenia z VLAN/podsieci ładowarki:

| Destynacja | Port | Protokół | Cel |
|-------------|------|----------|---------|
| csms.stroomlijnen.nl | 443 | TCP (WSS) | Komunikacja OCPP |
| firmware.stroomlijnen.nl | 443 | TCP (HTTPS) | Aktualizacje oprogramowania układowego |
| ntp.stroomlijnen.nl | 123 | UDP (NTP) | Synchronizacja czasu |
| hubject.com | 443 | TCP (HTTPS) | Walidacja certyfikatów PnC |
| *.sentry.io | 443 | TCP (HTTPS) | Raportowanie błędów (opcjonalnie) |

**Żadne porty przychodzące** nie muszą być otwarte. Ładowarki inicjują wszystkie połączenia wychodzące.

## Izolacja sieciowa

Zalecamy umieszczenie ładowarek w **własnej sieci VLAN**, izolowanej od ogólnej sieci lokalnej:

- Zapobiega mieszaniu się ruchu ładowarki z ruchem firmowym
- Uproszcza reguły zapory ogniowej
- Zmniejsza powierzchnię ataku
- Umożliwia priorytet QoS (Quality of Service), jeśli jest to konieczne

## Adresowanie IP

- **DHCP jest preferowany** — Ładowarki żądają adresu IP za pośrednictwem DHCP
- **Stały adres IP** — Może być skonfigurowany podczas instalacji, jeśli jest wymagany
- **IPv4** — Wymagany (łączność ładowarki z systemem CSMS)
- **IPv6** — Nie jest wymagany do komunikacji z systemem CSMS (używany wewnętrznie w kablu ładowania dla ISO 15118)

## DNS

Ładowarki wymagają rozwiązywania nazw DNS dla nazw hostów naszego systemu CSMS. Można to osiągnąć na dwa sposoby:
- Udostępnienie serwera DNS za pośrednictwem DHCP
- Skonfigurowanie statycznej konfiguracji DNS (zalecamy 1.1.1.1 / 8.8.8.8 jako adresy awaryjne)

## Synchronizacja czasu

Dokładny czas jest niezbędny dla:
- Walidacji certyfikatów (kontroli dat ważności)
- Pomiaru sesji (dokładności faktur)
- Korelacji logów

Ładowarki synchronizują czas za pomocą:
1. NTP (główny) — z naszego serwera NTP lub publicznej puli NTP
2. OCPP-heartbeat — system CSMS zawiera znacznik czasu w odpowiedziach heartbeat (rezerwowy)

## Szacowanie przepustowości

| Aktywność | Przepustowość | Częstotliwość |
|----------|-----------|-----------|
| OCPP-heartbeat | ~1 KB | Co 60 sekund |
| Żądanie autoryzacji | ~2 KB | Na początku każdej sesji |
| Wartości liczników | ~1 KB | Co 15 sekund podczas ładowania |
| Rozpoczęcie/zakończenie sesji | ~3 KB | Na każde zdarzenie |
| Aktualizacja oprogramowania układowego | 50–200 MB | Co kwartał |

**Typowy ruch na ładowarkę:** ~50 KB/godz. podczas aktywnego ładowania, ~1 KB/godz. w trybie czuwania.

## Ocena lokalna

Przed instalacją Stroomlijnen przeprowadza ocenę sieci:
1. **Test łączności** — Weryfikacja, czy połączenie internetowe kablowe sięga do miejsca instalacji ładowarki
2. **Zasięg sygnału 4G** — Test siły sygnału komórkowego w miejscu instalacji
3. **Ocena zapory ogniowej** — Potwierdzenie, że wymagane porty są otwarte
4. **Test przepustowości** — Weryfikacja wystarczającej pojemności dla planowanej liczby ładowarek

## Rozwiązywanie problemów

### Ładowarka wyświetla "Offline" w portalu
1. Sprawdź fizyczne połączenie Ethernet (diody LED na ładowarce i przełączniku)
2. Weryfikuj, czy DHCP przydziela adres IP (sprawdź logi serwera DHCP)
3. Przetestuj rozwiązywanie nazw DNS z podsieci ładowarki
4. Weryfikuj, czy zapora ogniowa zezwala na ruch wychodzący do portu 443 na csms.stroomlijnen.nl
5. Jeśli połączenie kablowe awaryjnie, sprawdź sygnał 4G i stan karty SIM

### Sporadyczne przerwy w połączeniu
- Sprawdź, czy występuje zator sieciowy lub problemy z QoS
- Weryfikuj, czy port przełącznika nie przechodzi w tryb uśpienia (wyłącz oszczędność energii na porcie)
- Sprawdź, czy nie występują konflikty adresów IP (inne urządzenie z tym samym adresem IP)
- Zobacz ustawienia limitu czasu sesji zapory ogniowej (połączenia WebSocket są długotrwałe)