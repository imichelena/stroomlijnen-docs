---
sidebar_position: 3
title: Karty RFID
description: Jak zamówić, aktywować i zarządzać kartami RFID dla Twojej floty elektrycznej w Stroomlijnen.
keywords: [karta RFID, karta ładowania, NL*STM, ładowanie floty, aktywacja karty]
---

# Karty RFID

Karty RFID (Radio Frequency Identification) są tradycyjnym sposobem autentykacji na stacji ładowania. Przyłóż kartę, zacznij ładować — prosto i niezawodnie.

## Jak działają karty RFID

Każe karta zawiera unikalny kod identyfikacyjny (token lub UID), który jest powiązany z Twoim kontem floty. Gdy przyłożysz kartę do czytnika na ładowarce:

1. Ładowarka odczytuje UID z karty
2. Wysyła go za pomocą OCPP do serwera Stroomlijnen
3. Nasz system sprawdza: czy karta jest ważna? Do której floty należy?
4. Jeśli ważna → rozpoczyna ładowanie. Sesja jest rozliczana na koncie floty.

Działa to na każdej lokalizacji Stroomlijnen i u partnerów roamingowych w całej Europie — karta przenosi Twoją tożsamość NL\*STM eMSP.

## Zamawianie kart

### Rejestracja nowej floty
Podczas rejestracji floty możesz zamówić karty bezpośrednio przez portal:

1. Przejdź do **Moja Flota → Karty RFID**
2. Kliknij **Zamów karty**
3. Podaj wymaganą liczbę kart
4. Wprowadź adres dostawy
5. Karty przyjdą w ciągu 3-5 dni roboczych

### Dodatkowe karty
Potrzebujesz więcej? Ta sama procedura. Możesz zamówić dodatkowe karty w dowolnym momencie.

### Cena
- Karty są dostarczane bezpłatnie z Twoim abonamentem floty
- Zamiana przy utracie: bezpłatna (pierwsze dwie rocznie), 5€ za kartę później

## Aktywacja karty

Karty są **wstępnie aktywowane** i powiązane z Twoją flotą. Musisz jednak:

1. Przejść do **Moja Flota → Karty RFID** w portalu
2. Sprawdzić, czy nowe karty pojawią się na liście
3. **Przypisać każdą kartę do kierowcy** (opcjonalnie, ale zalecane — ułatwia śledzenie sesji)
4. Przetestować kartę na ładowarce

:::tip
Przypisz karty do konkretnych kierowców. Dzięki temu Twoje raporty ładowania pokażą, który kierowca użył której karty, co ułatwi rozliczanie kosztów floty.
:::

## Zarządzanie kartami

### Deaktywacja karty
Jeśli karta zostanie utracona lub kierowca opuści firmę:
1. Przejdź do **Moja Flota → Karty RFID**
2. Wyszukaj kartę (po numerze lub nazwie kierowcy)
3. Kliknij **Deaktywuj**
4. Karta przestaje działać na wszystkich ładowarkach

### Ponowna aktywacja karty
Znaleziono "zagubioną" kartę? Możesz ją ponownie aktywować w ten sam sposób.

### Grupy kart
Dla większych flot możesz zorganizować karty w grupy:
- **Per pojazd** — jedna karta na ciężarówkę
- **Per kierowca** — osobiste karty, które działają na każdym pojeździe
- **Per departament** — oddzielne rozliczanie kosztów dla jednostek organizacyjnych

## Utracone lub skradzione karty

1. **Deaktywuj natychmiast** w portalu (lub zadzwoń do nas)
2. Karta zostaje unieważniona na wszystkich połączonych ładowarkach w ciągu 60 sekund
3. Zamów zastępczą kartę
4. Ewentualne koszty poniesione przed deaktywacją pojawią się na Twoim standardowym rachunku

:::caution
Deaktywuj utracone karty jak najszybciej. Do tego czasu każdy może używać karty do ładowania na Twoje konto. Przetwarzamy deaktywację w ciągu 60 sekund — ale Ty musisz zainicjować tę czynność.
:::

## RFID a Plug & Charge

| Funkcja | Karta RFID | Plug & Charge |
|---------|-----------|---------------|
| Czas konfiguracji | Zamów karty, przypisz je do kierowców | Zarejestruj VIN, zainstaluj certyfikat |
| Czynność kierowcy | Przyłóż kartę przed/po ładowaniu | Po prostu podłącz |
| Działanie w przypadku wielu flot | Karta jest powiązana z kierowcą | Certyfikat jest powiązany z pojazdem |
| Ryzyko utraty | Karta może zostać utracona lub skradziona | Nic nie jest fizycznie narażone na utratę |
| Roaming | Działa wszędzie | Rozwija się, ale jeszcze nie jest powszechny |
| Opcja awaryjna | Zawsze działa | Wymaga RFID jako opcji awaryjnej |

**Nasza rekomendacja:** Skonfiguruj Plug & Charge dla wygody, zachowaj karty RFID jako opcję awaryjną. Pasek i pas.

## Szczegóły techniczne

- **Technologia kart:** MIFARE DESFire EV2 (szyfrowana, bezpieczna)
- **Częstotliwość:** 13,56 MHz (NFC)
- **Standard:** ISO 14443
- **Format UID:** 14 znaków szesnastkowych
- **Marka:** Logo Stroomlijnen z identyfikacją NL\*STM

## Następne kroki

- [Skonfiguruj Plug & Charge](/docs/plug-and-charge/setup-guide) obok Twoich kart RFID
- [Zarządzaj kierowcami](/docs/fleet-management/driver-management)
- [Zrozum raporty faktur](/docs/fleet-management/invoicing)