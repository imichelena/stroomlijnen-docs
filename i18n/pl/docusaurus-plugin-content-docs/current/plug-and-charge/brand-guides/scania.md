---
sidebar_position: 4
title: Scania BEV — Konfiguracja Plug & Charge
description: Krok po kroku instrukcja konfigurowania Plug & Charge w samochodach ciężarowych Scania serii R i P z silnikiem elektrycznym za pomocą zarządzania flotą Scania.
keywords: [Scania, BEV, seria R, seria P, Zarządzanie flotą Scania, Plug and Charge, ISO 15118]
---

# Scania BEV — Konfiguracja Plug & Charge

Samochody ciężarowe Scania z silnikiem elektrycznym (seria R i seria P BEV) obsługują ISO 15118-2 Plug & Charge z wersją oprogramowania 2025.3 lub nowszą. PnC jest zarządzany za pomocą portalu Zarządzania flotą Scania.

## Obsługiwane Modele

| Model | Opcje akumulatora | Maksymalne ładowanie DC | Gotowe do PnC |
|-------|-----------|---------------|:---------:|
| Seria R BEV | Do 624 kWh | 375 kW (CCS) | ✅ (fw 2025.3+) |
| Seria P BEV | Do 416 kWh | 250 kW (CCS) | ✅ (fw 2025.3+) |

## Wymagania

- Konto Zarządzania flotą Scania z dostępem administratora
- Wersja oprogramowania pojazdu 2025.3 lub nowsza
- Konto floty Stroomlijnen z włączonym PnC ([Przewodnik instalacji](../setup-guide))

## Krok po Kroku: Zarządzanie flotą Scania

### 1. Weryfikacja Oprogramowania

1. Zaloguj się na [My Scania](https://my.scania.com) (Zarządzanie flotą Scania)
2. Wybierz swój pojazd → **Informacje o pojeździe** → **Wersja oprogramowania**
3. Potwierdź wersję 2025.3 lub nowszą
4. Jeśli jest niższa, zaplanuj wizytę u dealera lub sprawdź dostępne aktualizacje OTA pod **Konserwacja** → **Aktualizacje oprogramowania**

### 2. Włączenie Usług Elektryfikacji

1. Przejdź do Zarządzania flotą Scania → **Usługi** → **Elektryfikacja**
2. Jeśli ten dział nie jest widoczny, Twoje konto może wymagać dodatku Elektryfikacja — skontaktuj się z dealerm Scania
3. Kliknij na **Zarządzanie partnerami ładowania**

### 3. Dodanie Stroomlijnen

1. Kliknij na **Dodaj partnera**
2. Wyszukaj **"Stroomlijnen B.V."** lub wprowadź ID eMSP `NL-STM`
3. Kliknij na **Połącz**
4. Przejrzyj i zaakceptuj umowę dotyczącą udostępniania danych (identyfikacja pojazdu do połączenia certyfikatu)
5. Kliknij na **Potwierdź**

### 4. Przypisanie Pojazdów

1. Kliknij na **Zarządzaj pojazdami** po połączeniu z Stroomlijnen
2. Wybierz samochody ciężarowe, dla których PnC powinno być włączone
3. Kliknij na **Zastosuj**

### 5. Instalacja Certyfikatu

- Bramka telematyczna Scania wysyła certyfikat kontraktowy do pojazdu
- Pojazd musi być online (kontakt włączony lub podłączony do ładowarki)
- **Typowy czas instalacji: 4–12 godzin**
- Śledź postęp w Zarządzaniu flotą Scania → Elektryfikacja → Status certyfikatu

### 6. Weryfikacja

1. Sprawdź status w Zarządzaniu flotą Scania oraz w Stroomlijnen Mój Tabor
2. Podłącz się do ładowarki Stroomlijnen, aby przetestować
3. Automatyczna autoryzacja powinna zostać ukończona w ciągu 5–10 sekund

## Ważne Uwagi

### Telematyka-SIM
Samochody ciężarowe Scania mają oddzielną telematykę z własnym połączeniem komórkowym (niezależnym od systemu infotainment). Upewnij się, że abonament telematyki-SIM jest aktywny — dostarczanie certyfikatu zależy od tego połączenia, a nie od WiFi pojazdu.

### Aktualizacje Oprogramowania
Scania wypuszcza aktualizacje oprogramowania związane z PnC stopniowo w każdym regionie. Jeśli Twój samochód ma oprogramowanie w wersji 2025.2 lub starszej, aktualizacja PnC może nie być jeszcze dostępna za pośrednictwem OTA. Twój dealer może ją zainstalować ręcznie.

### Wiele Flot
Jeśli Twoje samochody ciężarowe są zarejestrowane w wielu kontach Zarządzania flotą Scania (np. po przejęciach), każde konto musi oddzielnie autoryzować Stroomlijnen.

## Rozwiązywanie Problemów

| Problem | Rozwiązanie |
|---------|----------|
| "Elektryfikacja" nie jest wyświetlana w menu | Konto może wymagać uaktualnienia — skontaktuj się z dealerm Scania |
| Certyfikat utknął na "W trakcie przetwarzania" | Upewnij się, że pojazd jest online, telematyka-SIM jest aktywna, oprogramowanie ≥ 2025.3 |
| PnC nie powiedzie się przy ładowarce | Zrestartuj samochód (pełny cykl kontaktu), spróbuj ponownie. Sprawdź status certyfikatu. |
| "Partner nie znaleziony" podczas wyszukiwania | Upewnij się, że wyszukujesz z prawidłową nazwą lub kodem (NL-STM) |

---

**Następny:** [Konfiguracja MAN →](./man)