---
sidebar_position: 3
title: Mercedes-Benz Trucks — Konfiguracja Plug & Charge
description: Krok po kroku instrukcja konfigurowania Plug & Charge w samochodach ciężarowych Mercedes-Benz eActros i eEconic za pomocą Fleetboard.
keywords: [Mercedes-Benz, eActros, eEconic, Fleetboard, Plug and Charge, ISO 15118, Daimler Truck]
---

# Mercedes-Benz Trucks — Konfiguracja Plug & Charge

Mercedes-Benz (Daimler Truck) obsługuje ISO 15118-2 Plug & Charge w modelach eActros 600 i eActros 300. Model eEconic otrzyma wsparcie dla PnC poprzez aktualizację OTA w Q2 2026. Konfiguracja jest zarządzana za pomocą platformy Fleetboard.

## Obsługiwane Modele

| Model | Opcje baterii | Maks. ładowanie DC | Gotowy do PnC |
|-------|-----------|---------------|:---------:|
| eActros 600 | Do 621 kWh | 400 kW (MCS/CCS) | ✅ |
| eActros 300 | Do 336 kWh | 160 kW (CCS) | ✅ |
| eEconic | Do 336 kWh | 160 kW (CCS) | ⚠️ Q2 2026 |

## Wymagania

- Konto Fleetboard z dostępem administratora do zarządzania flotą
- Oprogramowanie eActros z modułem eMobility (dostarczonym standardowo od Q4 2025)
- Konto Stroomlijnen dla floty z włączonym PnC ([Przewodnik instalacji](../setup-guide))

## Krok po Kroku: Fleetboard

### 1. Dostęp do ustawień eMobility

1. Zaloguj się na [Fleetboard](https://fleetboard.com)
2. Przejdź do **eMobility** → **Zarządzanie ładowaniem**
3. Jeśli używasz nowego portalu **Daimler Truck Digital**, przejdź do **Usługi** → **Zarządzanie ładowaniem**

### 2. Dodanie Stroomlijnen jako Dostawcy

1. Kliknij w Zarządzaniu ładowaniem na **Dostawcy ładowania**
2. Kliknij na **Dodaj dostawcę**
3. Wyszukaj **"Stroomlijnen B.V."** (lub użyj eMSP-ID `NL-STM`)
4. Kliknij na **Połącz**
5. Zaakceptuj warunki udostępniania danych (ID pojazdu i wymiana certyfikatów)

### 3. Rejestrowanie Pojazdów dla PnC

1. Przejdź do **Zarządzanie ładowaniem** → **Ustawienia PnC pojazdu**
2. Wykonaj następujące czynności dla każdego eActros, który chcesz włączyć:
   - Kliknij na wiersz pojazdu
   - Ustaw **Plug & Charge** na WŁĄCZONY
   - Wybierz **Stroomlijnen** jako preferowanego dostawcę ładowania (lub jeden z wielu)
3. Kliknij na **Zapisz zmiany**

### 4. Wdrożenie Certyfikatu

Po zapisaniu:
1. Fleetboard inicjuje wniosek o certyfikat w Stroomlijnen
2. Certyfikat umowy jest generowany przez nasze backend
3. Zostaje on wysłany do ciężarówki za pośrednictwem jednostki telematycznej Daimler Truck
4. **Typowy czas wdrożenia: 2–6 godzin**
5. Ciężarówka musi być online (kontakt włączony lub podłączony do ładowarki)

### 5. Weryfikacja w Obu Portalach

- **Fleetboard** → eMobility → Pojazd → Status PnC: powinien wyświetlać "Certyfikat Aktywny"
- **Stroomlijnen Mój Tabor** → Pojazd → Plug & Charge: powinien wyświetlać "✅ Aktywny"

### 6. Pierwsza Sesja

Podłącz eActros do ładowarki Stroomlijnen. Na pulpicie eActros wyświetlany jest stan uwierzytelnienia "Plug & Charge". Ładowanie powinno rozpocząć się automatycznie w ciągu 5–10 sekund.

## Wiele Dostawców Ładowania

Mercedes-Benz obsługuje wiele dostawców PnC jednocześnie. Możesz mieć certyfikaty Stroomlijnen obok certyfikatów innych dostawców na tym samym pojeździe. Ciężarówka używa odpowiedniego certyfikatu na podstawie sieci ładowarki.

## Fleetboard versus Daimler Truck Digital

Daimler Truck przechodzi z Fleetboard na nową platformę **Daimler Truck Digital**. Obecnie oba portale obsługują zarządzanie PnC:

- **Fleetboard (starszy):** Pełne wsparcie dla PnC, dobrze udokumentowane
- **Daimler Truck Digital (nowy):** PnC dostępny w Usługi → Zarządzanie ładowaniem

Jeśli migrujesz między platformami, ustawienia PnC są automatycznie przenoszone.

## Rozwiązywanie Problemów

### Sekcja "eMobility" niedostępna w Fleetboard
- Upewnij się, że Twoje konto Fleetboard zawiera moduł eMobility
- Moduł eMobility jest włączony w Fleetboard Premium dla pojazdów elektrycznych
- Skontaktuj się z dealerm Mercedes-Benz w celu weryfikacji

### Certyfikat wyświetla "W trakcie" przez dłuższy czas
1. Upewnij się, że ciężarówka była online przez co najmniej 2 godziny
2. Sprawdź powiadomienia w Fleetboard na oczekujące zatwierdzenia
3. Zweryfikuj, czy jednostka telematyczna Daimler Truck ma połączenie z siecią komórkową (sprawdź antenę w ciężarówce)
4. Skontaktuj się z supportem Stroomlijnen w celu weryfikacji backendu

### eActros 600 z konektorem MCS
eActros 600 obsługuje zarówno CCS, jak i MCS (Megawatt Charging System). PnC działa na obu typach konektorów na stacjach Stroomlijnen. Ładowarki MCS będą wdrożone w 2026 roku na wybranych lokalizacjach.

---

**Następny:** [Inne Ciężarówki →](./other-trucks)