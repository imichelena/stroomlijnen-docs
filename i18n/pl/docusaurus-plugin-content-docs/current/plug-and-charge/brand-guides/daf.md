---
sidebar_position: 2
title: DAF Trucks — Konfiguracja Plug & Charge
description: Krok po kroku instrukcja konfigurowania Plug & Charge w samochodach ciężarowych DAF XF, XD i XB Electric za pomocą DAF Connect.
keywords: [DAF, XF Electric, XD Electric, XB Electric, DAF Connect, Plug and Charge, ISO 15118]
---

# DAF Trucks — Konfiguracja Plug & Charge

Oferta samochodów ciężarowych marki DAF, należącej do grupy PACCAR, obsługuje standard ISO 15118-2 Plug & Charge we wszystkich obecnych modelach BEV. Konfigurację zarządza się za pomocą platformy DAF Connect.

## Obsługiwane Modele

| Model | Opcje baterii | Maks. ładowanie DC | Gotowy do PnC |
|-------|-----------|---------------|:---------:|
| XF Electric | Do 525 kWh | 350 kW (CCS) | ✅ |
| XD Electric | Do 350 kWh | 250 kW (CCS) | ✅ |
| XB Electric | Do 210 kWh | 175 kW (CCS) | ✅ |

## Wymagania

- Konto zarządzania flotą DAF Connect z dostępem administratora
- Najnowsze oprogramowanie pojazdu (sprawdź w DAF Connect → Pojazd → Diagnostyka)
- Konto floty Stroomlijnen z włączonym PnC ([Przewodnik instalacji](../setup-guide))

## Krok po Kroku: DAF Connect

### 1. Dostęp do Ustawień Ładowania

1. Zaloguj się na [DAF Connect](https://dafconnect.paccar.com)
2. Przejdź do **Zarządzanie flotą** → **Elektromobilność**
3. Jeśli nie widzisz sekcji Elektromobilność, skontaktuj się z supportem DAF Connect, aby włączyć tę funkcję dla Twojego konta

### 2. Konfigurowanie Partnerów Ładowania

1. Przejdź do **Elektromobilność** → **Partnerzy ładowania**
2. Kliknij **Dodaj partnera ładowania**
3. Wyszukaj **"Stroomlijnen"** lub wprowadź ID partnera `NL-STM`
4. Kliknij **Dodaj i autoryzuj**

### 3. Przypisanie Pojazdów

1. Po dodaniu Stroomlijnen przejdź do **Partnerzy ładowania** → **Stroomlijnen B.V.**
2. Kliknij **Zarządzaj pojazdami**
3. Wybierz samochody ciężarowe, które mają używać PnC
4. Kliknij **Zapisz**

### 4. Akceptacja Instalacji Certyfikatu

1. DAF Connect wyświetli powiadomienie o akceptacji instalacji certyfikatu
2. Przejrzyj szczegóły wniosku (pojazdy, uprawnienia)
3. Kliknij **Akceptuj**
4. Certyfikaty umowy zostaną przesłane do wybranych samochodów ciężarowych

### 5. Oczekiwanie na Instalację

- Dostarczanie certyfikatów zwykle trwa **4–8 godzin**
- Samochód ciężarowy musi być online (kontakt włączony lub podłączony do sieci)
- Śledź status w DAF Connect → **Elektromobilność** → **Status certyfikatu**

### 6. Weryfikacja i Test

1. Sprawdź status w obu DAF Connect i Stroomlijnen Mój Flota
2. Podłącz się do ładowarki Stroomlijnen, aby zweryfikować automatyczną autentykację
3. Pierwsza sesja PnC potwierdzi, że wszystko działa

## Uwaga dotycząca Aktywacji przez Zarządzającego Flotą

DAF wymaga, aby **zarządzający flotą** (a nie pojedynczy kierowcy) aktywowali PnC dla każdego pojazdu. Jest to funkcja zabezpieczająca — tylko upoważnieni zarządzający flotą mogą włączyć automatyczne rozliczanie na pojazdach firmowych.

Jeśli Twoja organizacja ma wielu zarządzających flotą:
- Każdy z nich może aktywować PnC dla pojazdów pod ich zarządem
- Super-zarządzający mogą delegować prawa Elektromobilności

## Rozwiązywanie Problemów

### Sekcja "Elektromobilność" nie jest widoczna
Funkcja ta wymaga subskrypcji DAF Connect Premium. Skontaktuj się z dealerm DAF, aby sprawdzić poziom subskrypcji.

### Instalacja certyfikatu trwa dłużej niż 24 godziny
1. Sprawdź, czy samochód ciężarowy był co najmniej 1 godzinę online po akceptacji
2. Sprawdź DAF Connect pod kątem błędów w sekcji Elektromobilność → Powiadomienia
3. Skontaktuj się z supportem Stroomlijnen, aby potwierdzić, czy wniosek został odebrany po naszej stronie

### Autentykacja nie powiedzie się u ładowarki
1. Sprawdź w DAF Connect, czy status certyfikatu jest "Aktywny"
2. Upewnij się, że oprogramowanie pojazdu jest aktualne
3. Zrestartuj pojazd (pełny cykl kontaktowy)
4. Zobacz ogólny [Przewodnik rozwiązywania problemów](../troubleshooting)

---

**Następnie:** [Konfiguracja Mercedes-Benz →](./mercedes-trucks)