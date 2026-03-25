---
sidebar_position: 1
title: Przegląd Zarządzania Flotą
description: Zarządzaj ładowaniem swojej floty elektrycznej za pomocą portalu Mój Flota od Stroomlijnen — pojazdy, sesje, faktury i zarządzanie kierowcami.
keywords: [zarządzanie flotą, portal Mój Flota, flota elektryczna, zarządzanie ładowaniem, pulpit nawigacyjny floty]
---

# Przegląd Zarządzania Flotą

Portal **Mój Flota** od Stroomlijnen zapewnia menedżerom floty pełną wiedzę i kontrolę nad działaniami związanymi z ładowaniem pojazdów elektrycznych. Z jednego pulpitu nawigacyjnego można zarządzać pojazdami, monitorować sesje ładowania w czasie rzeczywistym, kontrolować koszty oraz generować raporty.

## Dostęp do Mój Flota

Przejdź do **my.stroomlijnen.nl** i zaloguj się przy użyciu danych logowania menedżera floty. Nowi użytkownicy muszą się zarejestrować, podając numer KVK swojej firmy i uzyskać akceptację od menedżera konta Stroomlijnen.

## Pulpit Nawigacyjny

Główny pulpit nawigacyjny wyświetla:

- **Status Floty** — Liczba pojazdów, które są aktualnie ładowane, stoją na postoju lub są w trasie
- **Energia Dzienna** — Całkowita ilość kWh dostarczonej do floty w ciągu dnia
- **Aktywne Sesje** — Wgląd w czasie rzeczywistym we wszystkie trwające sesje ładowania z krzywymi mocy
- **Powiadomienia** — Wygasłe certyfikaty, nieudane sesje lub nietypowe wzorce ładowania
- **Przegląd Miesięczny** — Bieżący koszt ogółem i porównanie z poprzednim miesiącem

## Główne Funkcje

### Zarządzanie Pojazdami
Zarejestruj, skonfiguruj i monitoruj wszystkie swoje pojazdy elektryczne w jednym miejscu. Aktywuj Plug & Charge, przypisz karty RFID i ustal politykę ładowania dla każdego pojazdu lub grupy.

→ [Szczegóły Zarządzania Pojazdami](./vehicles)

### Monitorowanie Sesji
Śledź każdą sesję ładowania — przeszłą i obecną. Wyświetl dostarczoną energię, czas trwania, koszty, metodę uwierzytelniania i lokalizację ładowarki. Eksportuj do CSV lub zintegruj za pomocą API.

→ [Szczegóły Sesji](./sessions)

### Faktury
Miesięczne faktury z szczegółowym rozliczeniem dla każdego pojazdu, lokalizacji i daty. Pobierz faktury jako PDF, otrzymuj analizę kosztów na kilometr i ustal automatyczne fakturowanie.

→ [Szczegóły Faktur](./invoicing)

### Zarządzanie Kierowcami
Przypisz kierowców do pojazdów, wydaj im osobiste karty RFID i ustal limity ładowania na kierowcę. Kierowcy mogą używać aplikacji Stroomlijnen, aby znaleźć ładowarki i uruchomić sesje.

→ [Szczegóły Zarządzania Kierowcami](./driver-management)

## Role Użytkowników

| Rola | Uprawnienia |
|------|-------------|
| **Menedżer Floty** | Pełny dostęp: pojazdy, faktury, PnC, użytkownicy, klucze API |
| **Menedżer Floty** | Zarządzanie pojazdami, monitorowanie sesji, raporty |
| **Menedżer Faktur** | Dostęp do faktur, metod płatności, raportów kosztowych |
| **Kierowca** | Wgląd w własne sesje, wyszukiwanie ładowarek, uruchamianie/zatrzymywanie sesji |

## Dostęp do API

Dla firm, które chcą zintegrować dane o ładowaniu ze swoim systemem zarządzania flotą lub ERP, oferujemy REST API:

- Webhooki sesji w czasie rzeczywistym
- Historyczne dane sesji
- Zarządzanie pojazdami i kierowcami
- Wyszukiwanie faktur

Dokumentacja API jest dostępna w portalu Mój Flota pod **Ustawienia** → **API**.

## Rozpoczęcie Pracy

1. [Zarejestruj swoją flotę](https://stroomlijnen.nl/fleet-signup) lub skontaktuj się z menedżerem konta
2. [Dodaj swoje pojazdy](./vehicles)
3. [Aktywuj Plug & Charge](../plug-and-charge/setup-guide) lub [wydaj karty RFID](../getting-started/rfid-cards)
4. Rozpocznij ładowanie — wszystkie sesje będą automatycznie śledzone i fakturowane