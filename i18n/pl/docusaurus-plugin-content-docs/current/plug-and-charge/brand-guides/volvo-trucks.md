---
sidebar_position: 1
title: Volvo Trucks — Konfiguracja Plug & Charge
description: Krok po kroku instrukcja konfigurowania Plug & Charge w samochodach ciężarowych Volvo FH, FM, FE i FL Electric za pomocą Volvo Connect.
keywords: [Volvo, FH Electric, FM Electric, Volvo Connect, Plug and Charge, ISO 15118, ładowanie floty]
---

# Volvo Trucks — Konfiguracja Plug & Charge

Volvo było jednym z pierwszych producentów samochodów ciężarowych, które w pełni wspierały standard ISO 15118-2 Plug & Charge. Wszystkie obecne modele elektryczne Volvo (FH, FM, FE, FL) obsługują PnC przy oprogramowaniu w wersji v3.2 lub nowszej.

## Obsługiwane Modele

| Model | Opcje baterii | Maks. ładowanie DC | Gotowe do PnC |
|-------|-----------|---------------|:---------:|
| FH Electric | 540 kWh | 250 kW (CCS) | ✅ |
| FM Electric | 540 kWh | 250 kW (CCS) | ✅ |
| FE Electric | 265 kWh | 150 kW (CCS) | ✅ |
| FL Electric | 265 kWh | 150 kW (CCS) | ✅ |

## Wymagania

- Konto zarządzania flotą Volvo Connect z dostępem administratora
- Oprogramowanie pojazdu w wersji v3.2 lub nowszej (sprawdź w Volvo Connect → Pojazd → Oprogramowanie)
- Konto floty Stroomlijnen z włączonym PnC ([Przewodnik instalacji](../setup-guide))

## Krok po Kroku: Volvo Connect

### 1. Sprawdź Wersję Oprogramowania

1. Zaloguj się na [Volvo Connect](https://connect.volvotrucks.com)
2. Wybierz swój pojazd z listy floty
3. Przejdź do **Szczegóły pojazdu** → **Oprogramowanie**
4. Upewnij się, że wersja oprogramowania to **3.2 lub nowsza**
5. Jeśli nie, skontaktuj się z dealerm Volvo w celu aktualizacji

### 2. Włącz Usługi Ładowania

1. Przejdź do **Usługi** → **Usługi ładowania** w Volvo Connect
2. Jeśli ten dział nie jest widoczny, poproś administratora Volvo Connect o włączenie **modułu eMobility** dla Twojego konta
3. Kliknij **Zarządzaj partnerami ładowania**

### 3. Autoryzuj Stroomlijnen

1. Wyszukaj w liście partnerów ładowania **"Stroomlijnen B.V."**
   - Jeśli nie jest wymieniony, kliknij **Dodaj partnera** i wyszukaj "Stroomlijnen" lub użyj kodu partnera `NL-STM`
2. Kliknij **Autoryzuj**
3. Przejrzyj uprawnienia:
   - ✅ Instalacja certyfikatu — Wymagana do PnC
   - ✅ Identyfikacja pojazdu — Wymagana do połączenia certyfikatu
   - ❌ Dane lokalizacyjne — Nie wymagane, możesz je odmówić
4. Kliknij **Potwierdź autoryzację**

### 4. Wybierz Pojazdy

1. Po autoryzacji zobaczysz ekran wyboru pojazdu
2. Zaznacz pole wyboru dla wszystkich samochodów ciężarowych, które mają używać PnC Stroomlijnen
3. Kliknij **Zastosuj**

### 5. Instalacja Certyfikatu

Po autoryzacji backend Stroomlijnen wyśle żądanie instalacji certyfikatu:

1. Żądanie pojawi się w Volvo Connect → **Powiadomienia** (zwykle w ciągu 30 minut)
2. System Volvo przesyła certyfikat umowy do samochodu
3. Samochód musi być **online** (kontakt włączony lub podłączony do ładowarki AC), aby go otrzymać
4. Instalacja jest zwykle ukończona w ciągu **1–2 godzin**

Możesz śledzić postęp w:
- **Volvo Connect** → Pojazd → Usługi ładowania → Status certyfikatu
- **Stroomlijnen Mój Flota** → Pojazd → zakładka Plug & Charge

### 6. Weryfikuj Instalację

Gdy status pokazuje "Aktywny" w obu portalach:

1. Jedź do ładowarki Stroomlijnen
2. Podłącz kabel CCS
3. Ładowarka powinna wyświetlić "Plug & Charge — Zautoryzowany" w ciągu 5–10 sekund
4. Ładowanie rozpocznie się automatycznie

## Procedura Aktualizacji Oprogramowania

Jeśli oprogramowanie Twojego samochodu jest starsze niż v3.2:

1. **Skontaktuj się z dealerm Volvo** w celu uzyskania aktualizacji oprogramowania
2. Aktualizacje mogą być wykonywane przez dealera (~2 godziny)
3. Niektóre aktualizacje są dostępne jako **OTA (Over-The-Air)** — sprawdź Volvo Connect → Pojazd → Aktualizacje oprogramowania
4. Wróć do kroku 2 po zaktualizowaniu

:::caution
Nie próbuj samodzielnie aktualizować oprogramowania pojazdu. Aktualizacje oprogramowania powinny być wykonywane przez autoryzowanego dealera Volvo lub za pomocą oficjalnego kanału OTA.
:::

## Rozwiązywanie Problemów

### "Usługi ładowania" nie są widoczne w Volvo Connect
Twoje konto Volvo Connect może nie zawierać modułu eMobility. Skontaktuj się z dealerm Volvo lub wsparciem Volvo Connect w celu aktywacji.

### Certyfikat wyświetla "W trakcie" przez więcej niż 24 godziny
1. Upewnij się, że samochód był online (kontakt włączony) przez co najmniej 30 minut po wysłaniu żądania
2. Sprawdź Volvo Connect pod kątem otwartych żądań autoryzacji
3. Skontaktuj się z wsparciem Stroomlijnen — możemy ponownie aktywować żądanie certyfikatu

### PnC nie powiedzie się, ale certyfikat wyświetla "Aktywny"
1. Sprawdź wyświetlacz ładowarki pod kątem specyficznych kodów błędów
2. Wypróbuj inny kabel CCS (jeśli dostępne)
3. Wyłącz kontakt samochodu, poczekaj 30 sekund, włącz go ponownie i połącz się ponownie
4. Zobacz ogólny [Przewodnik rozwiązywania problemów](../troubleshooting)

### Wiele Kont Volvo
Jeśli Twoja flota jest zarządzana przez wiele kont Volvo Connect (np. różne spółki zależne), każde konto musi oddzielnie autoryzować Stroomlijnen. Skontaktuj się ze swoim menedżerem konta Stroomlijnen w celu ustawienia wielu kont.

---

**Następny:** [Konfiguracja DAF →](./daf)