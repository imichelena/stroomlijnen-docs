---
sidebar_position: 2
title: Zarządzanie Pojazdami
description: Jak zarejestrować, skonfigurować i zarządzać pojazdami elektrycznymi w portalu Stroomlijnen Mijn Vloot.
keywords: [zarządzanie pojazdami, rejestracja floty, ciężarówka elektryczna, VIN, przypisanie RFID, polityka ładowania]
---

# Zarządzanie Pojazdami

Sekcja Pojazdy w Mijn Vloot to miejsce, gdzie rejestrujesz ciężarówki i busy, konfigurujesz ich ustawienia ładowania i monitorujesz ich status.

## Dodawanie Pojazdów

### Jeden Pojazd

1. Przejdź do **Pojazdy** → **Dodaj pojazd**
2. Wypełnij wymagane pola:
   - **VIN** — 17-znakowy numer identyfikacyjny pojazdu
   - **Numer rejestracyjny** — format holenderski lub unijny
   - **Marka & Model** — Wybierz z menu
   - **Rok produkcji** — Rok modelowy
   - **Pojemność akumulatora** — W kWh (wypełniane automatycznie dla znanych modeli)
3. Pola opcjonalne:
   - **Pseudonim** — Dla łatwiejszego rozpoznania (np. "Amsterdam 014")
   - **Dział/Grupa** — Do filtrowania organizacyjnego
   - **Miejsce kosztów** — Do przypisania faktur
4. Kliknij **Zapisz**

### Importuj Wielu Pojazdów

Dla flot z wieloma pojazdami:

1. Przejdź do **Pojazdy** → **Importuj**
2. Pobierz szablon CSV
3. Wypełnij dane pojazdu
4. Prześlij wypełniony plik CSV
5. Sprawdź podsumowanie importu — popraw błędy walidacji
6. Kliknij **Potwierdź import**

## Szczegóły Pojazdu

Strona szczegółów każdego pojazdu wyświetla:

### Status
- **Bieżący stan** — Ładowanie / Nieaktywny / Offline
- **Ostatnio widziany** — Kiedy pojazd ostatni raz komunikował się z ładowarką
- **Poziom naładowania** — Jeśli zgłoszony przez pojazd podczas ostatniej sesji

### Konfiguracja Ładowania
- **Metoda uwierzytelniania** — PnC, RFID lub obie
- **Status Plug & Charge** — Włączony/Wyłączony, status certyfikatu
- **Przypisane karty RFID** — Które karty są połączone z tym pojazdem
- **Polityka ładowania** — Maksymalna prędkość ładowania, pożądany cel SoC, zaplanowane okna ładowania

### Historia Sesji
- Lista wszystkich poprzednich sesji ładowania dla tego pojazdu
- Filtrowanie według zakresu dat, lokalizacji lub metody uwierzytelniania
- Całkowita energia, całkowite koszty i średnia długość sesji

### Dokumenty
- Dowód rejestracyjny (opcjonalnie przesłać)
- Certyfikat ubezpieczenia (opcjonalnie przesłać)
- Dane konserwacyjne

## Polityka Ładowania

Możesz ustawić politykę ładowania na poziomie pojazdu lub grupy:

### Limit Mocy
Ustaw maksymalną moc ładowania. Przydatne do:
- Zachowania żywotności baterii (ograniczenie do 80% maksymalnej mocy)
- Kontrolowania kosztów (niższa moc = niższe koszty pojemności w niektórych lokalizacjach)

### Cel SoC
Ustaw pożądany poziom naładowania (Stan Naładowania). Gdy osiągnięty, ładowarka obniża moc lub zatrzymuje się. To wydłuża żywotność baterii i uwalnia ładowarki dla innych pojazdów.

### Zaplanowane Ładowanie
Zdefiniuj przedziały czasowe, kiedy można ładować. Przydatne do:
- Taryf godzinowych na prąd
- Zarządzania obciążeniem sieci
- Optymalizacji czasu wyjazdu (ładowanie do 90% do godz. 06:00)

### Priorytet
Gdy wiele pojazdów floty znajduje się w tej samej lokalizacji i moc jest ograniczona, ustawienia priorytetu określają, które pojazdy jako pierwsze otrzymują pełną moc.

## Grupy Pojazdów

Organizuj pojazdy w grupy dla łatwiejszego zarządzania:

- **Według trasy** — Trasy Amsterdam, trasy Rotterdam
- **Według typu** — Długodystansowe, regionalne dostawy, ostatnia mila
- **Według działu** — Operacje, obsługa klienta

Grupy mogą mieć wspólną politykę ładowania i ustawienia rozliczeń.

## Wycofanie Pojazdu

Gdy pojazd opuszcza Twoją flotę:

1. Przejdź do **Pojazdy** → wybierz pojazd → **Ustawienia**
2. Kliknij **Wycofaj pojazd**
3. Spowoduje to:
   - Odwołanie wszystkich aktywnych certyfikatów PnC
   - Odłączenie wszystkich kart RFID
   - Zarchiwizowanie historii sesji pojazdu (nadal dostępne do raportowania)
   - Zatrzymanie rozliczeń dla tego pojazdu

Pojazd można ponownie aktywować, jeśli wróci do floty.

## Eksport Danych

Eksportuj dane pojazdu do integracji z własnymi systemami:

- **Lista Pojazdów** — CSV ze wszystkimi szczegółami pojazdu
- **Historia Sesji** — CSV na poziomie pojazdu lub dla wszystkich pojazdów
- **API** — Programowy dostęp do danych pojazdu (zobacz Przegląd Zarządzania Flotą → API)