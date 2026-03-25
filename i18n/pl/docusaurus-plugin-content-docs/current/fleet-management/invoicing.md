---
sidebar_position: 4
title: Fakturowanie
description: Jak działa fakturowanie ładowania floty Stroomlijnen — miesięczne faktury, szczegółowe koszty, metody płatności i dokumentacja podatkowa.
keywords: [fakturowanie, rozliczenia, koszty ładowania floty, miesięczna faktura, VAT, cena za kWh, konto floty]
---

# Fakturowanie

Stroomlijnen oferuje przejrzyste i szczegółowe fakturowanie dla wszystkich działań ładowania Twojej floty. Faktury są generowane miesięcznie i zawierają podział na sesje.

## Model taryfowy

Klienci floty są rozliczani na podstawie zużytej energii:

- **Koszty energii** — cena za kWh zgodnie z umową floty
- **Brak opłat za sesję** — w przeciwieństwie do publicznego ładowania, nie pobieramy opłat startowych za sesję
- **Brak opłat czasowych** — płacisz za energię, a nie za czas parkowania
- **Zniżki za ilość** — dostępne dla flot, które przekraczają miesięczne progi zużycia energii (patrz umowa)

Twoja stawka umowna jest widoczna w **Moja Flota** → **Ustawienia** → **Fakturowanie** → **Karta taryfowa**.

## Miesięczna faktura

Faktury są generowane **1. dnia każdego miesiąca** za działania ładowania z poprzedniego miesiąca.

### Zawartość faktury

Każda faktura zawiera:

- **Podsumowanie** — całościowa energia (kWh), całkowite koszty (€), liczba sesji, liczba pojazdów
- **Podział na pojazd** — energia i koszty na pojazd
- **Szczegóły sesji** — data, godzina, lokalizacja, ID EVSE, kWh, koszty, metoda uwierzytelniania
- **Dane podatkowe** — VAT (21%) obliczony i wyświetlany oddzielnie
- **Warunki płatności** — 14 dni netto

### Formaty faktur

- **PDF** — sformatowany dokument faktury dla Twojej administracji
- **CSV** — czytelny maszynowo szczegół dla importu do systemów księgowych/ERP
- **UBL** — Universal Business Language XML dla zautomatyzowanego przetwarzania faktur (standard holenderski)

Wszystkie formaty są dostępne za pośrednictwem **Moja Flota** → **Fakturowanie** → **Pobierz**.

## Metody płatności

### Polecenie zapłaty (SEPA)
Preferowana metoda płatności dla klientów floty:
1. Przejdź do **Ustawienia** → **Fakturowanie** → **Metoda płatności**
2. Kliknij **Ustaw polecenie zapłaty**
3. Wprowadź swój numer IBAN i autoryzuj mandat SEPA
4. Faktury są automatycznie pobierane 14 dni po wystawieniu

### Przelew bankowy
Dla klientów, którzy płacą ręcznie:
- Dane do przelewu znajdują się na każdej fakturze
- Referencja: Numer faktury (format: `STM-2026-XXXXX`)
- Bank: ING Bank, NL
- Termin zapłaty: 14 dni od daty faktury

## Przydział kosztów

### Na miejscu pracy
Jeśli Twoje pojazdy są przypisane do miejsc pracy w sekcji Pojazdy, faktury mogą zawierać szczegóły dotyczące miejsca pracy. To bezpośrednio łączy się z Twoją wewnętrzną księgowością.

### Na dział lub grupę
Grupy pojazdów są odzwierciedlone w szczegółach faktury, co ułatwia rozdział kosztów między działami.

### Dostosowany przydział
Czy potrzebujesz specjalnej logiki przydziału? Możemy skonfigurować dostosowane grupy faktur dla Twojej organizacji. Skontaktuj się z menedżerem konta.

## Podatek i zgodność

### VAT
- Wszystkie ceny są podawane **bez VAT**
- VAT w wysokości 21% jest dodawany do wszystkich faktur
- Numer VAT znajduje się na każdej fakturze (Stroomlijnen B.V., KVK 93264526)

### Podatek od energii
- Podatek od energii jest uwzględniony w cenie za kWh, tam gdzie ma zastosowanie
- Stawka zależy od kategorii połączenia sieciowego lokalizacji
- Jest to przejrzyste — patrz umowa dla specyfikacji

### CSRD / ESG-raportowanie
Dla firm z obowiązkami raportowania zrównoważonego rozwoju:
- Dostarczamy **roczne certyfikaty energii**, które pokazują całkowite zużycie odnawialnej energii
- Obliczenia unikniętego CO₂ są uwzględnione w rocznym raporcie floty
- Format danych zgodny z powszechnymi ramami raportowania ESG

## Spory i korekty

Jeśli uważasz, że faktura zawiera błąd:

1. Przejdź do **Fakturowanie** → wybierz fakturę → **Zgłoś problem**
2. Wybierz odpowiednią sesję(-e)
3. Opisz problem
4. Nasz zespół fakturowania zbada sprawę i odpowie w ciągu 5 dni roboczych
5. Korekty są przetwarzane jako zaliczka na następnej fakturze

## Historyczne faktury

Wszystkie faktury są przechowywane przez **7 lat** (obowiązek prawny w Holandii) i są dostępne w portalu Moja Flota. Możesz również ustawić automatyczne wysyłanie faktur na dodatkowe adresy e-mail za pośrednictwem **Ustawienia** → **Fakturowanie** → **Odbiorcy faktur**.