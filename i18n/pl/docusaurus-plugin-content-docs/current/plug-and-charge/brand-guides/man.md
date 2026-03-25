---
sidebar_position: 5
title: MAN Electric — Konfiguracja Plug & Charge
description: Krok po kroku instrukcja konfigurowania Plug & Charge w samochodach ciężarowych MAN eTGX i eTGS za pomocą platformy RIO.
keywords: [MAN, eTGX, eTGS, RIO, Plug and Charge, ISO 15118, TRATON]
---

# MAN Electric — Konfiguracja Plug & Charge

Oferta samochodów ciężarowych marki MAN (część grupy TRATON wraz z Scanią) obsługuje standard ISO 15118-2 Plug & Charge w modelach eTGX i eTGS. Modele eTGL i eTGM otrzymają wsparcie dla PnC poprzez stopniową aktualizację oprogramowania w 2026 roku. Konfiguracja jest zarządzana za pomocą platformy RIO.

## Obsługiwane Modele

| Model | Opcje baterii | Maks. ładowanie DC | PnC Gotowy |
|-------|-----------|---------------|:---------:|
| eTGX | Do 480 kWh | 375 kW (CCS) | ✅ |
| eTGS | Do 400 kWh | 250 kW (CCS) | ✅ |
| eTGL | Do 265 kWh | 150 kW (CCS) | ⚠️ Wdrożenie w toku |
| eTGM | Do 265 kWh | 150 kW (CCS) | ⚠️ Wdrożenie w toku |

## Wymagania

- Konto platformy RIO z dostępem do zarządzania flotą
- eTGX/eTGS z najnowszym oprogramowaniem (koniec 2025+)
- Konto floty Stroomlijnen z włączonym PnC ([Przewodnik instalacji](../setup-guide))

## Krok po Kroku: Platforma RIO

### 1. Dostęp do Zarządzania Ładowaniem

1. Zaloguj się na [RIO](https://rio.cloud)
2. Przejdź do **Usługi** → **Zarządzanie ładowaniem**
3. Jeśli Zarządzanie ładowaniem nie jest widoczne, może być konieczne jego aktywowanie — przejdź do **Marketplace** → wyszukaj "Zarządzanie ładowaniem" → **Aktywuj**

### 2. Połączenie z Stroomlijnen

1. W Zarządzaniu ładowaniem przejdź do **Partnerzy ładowania**
2. Kliknij **Połącz nowego partnera**
3. Wyszukaj **"Stroomlijnen B.V."** (lub użyj eMSP-ID `NL-STM`)
4. Kliknij **Połącz & Autoryzuj**
5. Zaakceptuj warunki

### 3. Wybór Pojazdów

1. Po połączeniu strona partnera wyświetli Twoje pojazdy kwalifikujące się do PnC
2. Zaznacz pole wyboru obok ciężarówek, dla których chcesz włączyć PnC
3. Kliknij **Zapisz wybór**

### 4. Oczekiwanie na Instalację Certyfikatu

- RIO aktywuje provisionowanie certyfikatu za pomocą systemu telematycznego MAN
- Ciężarówka musi być online z włączonym kontaktem
- **Ważne:** MAN używa modułu bezpieczeństwa sprzętowego (HSM) do przechowywania certyfikatów. HSM wchodzi w tryb provisionowania przez pierwsze 30 minut po włączeniu kontaktu. Jeśli ciężarówka jest zaparkowana z włączonym kontaktem przez ponad 30 minut bez otrzymania certyfikatu, wyłącz i włącz kontakt ponownie, aby aktywować tryb provisionowania.
- **Typowy czas instalacji: 6–24 godziny**

### 5. Weryfikacja

Sprawdź status certyfikatu w RIO oraz w Stroomlijnen Mój Tabor. Przetestuj przy ładowarce Stroomlijnen.

## Tryb Provisionowania HSM — Ważne

Architektura bezpieczeństwa MAN wykorzystuje moduł bezpieczeństwa sprzętowego z określonym oknem provisionowania:

1. Po włączeniu kontaktu ciężarówki, HSM wchodzi w tryb provisionowania na 30 minut
2. W tym czasie można instalować nowe certyfikaty
3. Po 30 minutach HSM zamyka się, aby uniemożliwić nieautoryzowane zmiany certyfikatów
4. Aby ponownie otworzyć okno: wyłącz kontakt, poczekaj 10 sekund, włącz ponownie

**Co to oznacza w praktyce:** Jeśli włączysz PnC w portalu RIO, podczas gdy ciężarówka jest w trakcie jazdy, certyfikat zostanie umieszczony w kolejce i zainstalowany przy następnym uruchomieniu (w pierwszym 30-minutowym oknie).

## Integracja z Grupą TRATON

MAN i Scania należą do grupy TRATON i dzielą część infrastruktury backendu. Jednak:

- Każda marka ma własny portal floty (RIO dla MAN, My Scania dla Scani)
- PnC musi być skonfigurowany oddzielnie w każdym portalu
- Certyfikaty są specyficzne dla marki i nieprzenaszalne

## Rozwiązywanie Problemów

| Problem | Rozwiązanie |
|---------|----------|
| "Zarządzanie ładowaniem" nie jest widoczne w RIO | Aktywuj je z Marketplace RIO |
| Certyfikat w trakcie przetwarzania > 24 godziny | Wykonaj cykl kontaktu, aby ponownie aktywować tryb provisionowania HSM |
| eTGL/eTGM wyświetla "PnC niedostępne" | Aktualizacja oprogramowania może być w trakcie — sprawdź u dealera MAN |
| PnC działa raz, a potem nie powiodło się | HSM może mieć problem z połączeniem — wymagana diagnostyka dealera |

---

**Następny:** [Inne Ciężarówki →](./other-trucks)