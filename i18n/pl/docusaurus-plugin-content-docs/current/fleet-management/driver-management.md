---
sidebar_position: 5
title: Zarządzanie kierowcami
description: Zarządzaj kierowcami Twojej floty elektrycznej — przypisz pojazdy, wydaj karty RFID, ustaw limity ładowania i monitoruj aktywność kierowców.
keywords: [zarządzanie kierowcami, kierowcy floty, przypisanie kart RFID, limity ładowania, aplikacja kierowcy]
---

# Zarządzanie kierowcami

Sekcja Zarządzanie kierowcami umożliwia zarządcom floty określenie, kto może ładować, na jakich pojazdach i z jakimi limitami.

## Dodawanie kierowców

1. Przejdź do **Kierowcy** → **Dodaj kierowcę**
2. Wypełnij dane kierowcy:
   - **Imię i nazwisko** — Imię i nazwisko
   - **Adres e-mail** — Dla dostępu do konta i powiadomień
   - **Numer telefonu** — Dla uwierzytelniania aplikacji (opcjonalnie)
   - **Numer pracownika** — Dla wewnętrznej referencji
   - **Dział/grupa** — Dla filtrowania organizacyjnego
3. Kliknij **Zapisz**

Kierowca otrzyma wiadomość e-mail z zaproszeniem do skonfigurowania swojego konta Stroomlijnen i pobrania aplikacji mobilnej.

## Przypisywanie pojazdów

Kierowców można przypisać do jednego lub wielu pojazdów:

1. Przejdź do **Kierowcy** → wybierz kierowcę → **Pojazdy**
2. Kliknij **Przypisz pojazd** i wybierz z floty
3. Kierowca może rozpocząć sesje tylko na przypisanych pojazdach (jeśli połączenie pojazdu z kierowcą jest włączone w ustawieniach floty)

### Elastyczne przypisywanie
Dla flot, w których kierowcy dzielą pojazdy:
- Ustaw **Połączenie pojazdu z kierowcą** na "Elastyczne" w ustawieniach floty
- Każdy zarejestrowany kierowca może ładować każdy pojazd floty
- Sesje są nadal śledzone dla każdego kierowcy (za pomocą karty RFID lub aplikacji)

## Karty RFID dla kierowców

Każdy kierowca może otrzymać osobistą kartę RFID:

1. Przejdź do **Kierowcy** → wybierz kierowcę → **Karty RFID**
2. Kliknij **Przypisz kartę** i wprowadź UID karty (wydrukowany na karcie)
3. Karta jest teraz połączona z tym kierowcą i jego przypisanymi pojazdami

Gdy kierowca użyje swojej osobistej karty przy ładowarce, sesja zostanie przypisana specjalnie do niego — przydatne do raportowania i rozliczania kosztów na kierowcę.

Zobacz także: [Karty RFID](../getting-started/rfid-cards) dotyczące zamawiania i aktywowania.

## Limity ładowania

Ustaw limity dla każdego kierowcy, aby kontrolować koszty:

### Miesięczny limit energii
Maksymalna ilość kWh, którą kierowca może ładować miesięcznie. Jeśli limit zostanie osiągnięty:
- Kierowca zostanie powiadomiony przez e-mail/aplikację
- Dalsze ładowanie będzie wymagało zatwierdzenia przez zarządcę floty (lub limit zostanie zresetowany w następnym miesiącu)

### Limit na sesję
Maksymalna ilość kWh na pojedynczą sesję. Przydatne do uniknięcia niezamierzonego nocnego ładowania.

### Ograniczenia lokalizacyjne
Ogranicz, w których miejscach kierowca może ładować. Na przykład tylko lokale Stroomlijnen na przypisanej trasie.

## Aplikacja kierowcy

Kierowcy mogą pobrać aplikację Stroomlijnen, aby:

- **Znaleźć ładowarki** — Mapa wszystkich lokalizacji Stroomlijnen z czasem rzeczywistym
- **Rozpocząć sesje** — Skanowanie kodu QR lub używanie Bluetooth do rozpoczęcia ładowania (alternatywa dla karty RFID)
- **Monitorować sesje** — Bieżąca moc, dostarczona energia, szacowany czas do osiągnięcia pożądanego SoC
- **Wyświetlać historię** — Poprzednie sesje z detalami energii i kosztów
- **Otrzymywać powiadomienia** — Sesja zakończona, ładowarka dostępna, zdarzenia PnC

Aplikacja jest dostępna dla systemów iOS i Android. Kierowcy logują się przy użyciu adresu e-mail zarejestrowanego w Mój Flota.

## Raportowanie

### Raporty kierowców
- Całkowita ilość kWh na kierowcę miesięcznie
- Liczba sesji
- Średnia długość sesji
- Najczęściej używane lokalizacje
- Rozliczenie kosztów

### Porównanie kierowców
Porównaj wzorce ładowania kierowców, aby rozpoznać:
- Wydajne versus niewydajne zachowania ładowania
- Możliwości optymalizacji tras
- Wysokie koszty

Raporty są dostępne za pośrednictwem **Raporty** → **Analiza kierowców** i mogą być eksportowane jako CSV lub PDF.