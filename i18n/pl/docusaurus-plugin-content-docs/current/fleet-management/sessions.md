---
sidebar_position: 3
title: Sesje ładowania
description: Monitoruj i analizuj sesje ładowania dla swojej floty elektrycznej w portalu Stroomlijnen Mijn Vloot.
keywords: [sesje ładowania, monitorowanie sesji, zużycie energii, historia ładowania, analiza floty]
---

# Sesje ładowania

Każdy raz, gdy jedno z Twoich pojazdów ładuje się w lokalizacji Stroomlijnen, tworzony jest rekord sesji z pełnymi danymi — energia, koszty, czas trwania, krzywa mocy i metoda uwierzytelniania.

## Aktywne sesje

Widok **Aktywne sesje** wyświetla wszystkie pojazdy, które są obecnie ładowane:

- **Pojazd** — Zidentyfikowany za pomocą numeru rejestracyjnego, pseudonimu lub VIN
- **Lokalizacja** — Nazwa lokalizacji ładującej i specyficzny EVSE-ID
- **Rozpoczęcie** — Data i godzina rozpoczęcia sesji
- **Czas trwania** — Bieżący licznik
- **Energia** — Do tej pory dostarczona energia w kWh (aktualizowana co 60 sekund)
- **Moc** — Bieżąca moc ładowania w kW
- **SoC** — Poziom naładowania akumulatora (jeśli zgłoszony przez pojazd)
- **Metoda uwierzytelniania** — Plug & Charge, RFID lub aplikacja

Możesz kliknąć na każdą aktywną sesję, aby wyświetlić **krzywą mocy w czasie rzeczywistym**, która pokazuje profil ładowania.

## Historia sesji

Widok historii wyświetla wszystkie zakończone sesje z możliwością filtrowania:

### Filtry
- **Zakres dat** — Niestandardowe daty lub ustawienia predefiniowane (dzisiaj, ten tydzień, ten miesiąc, ostatnie 30 dni)
- **Pojazd** — Jeden pojazd lub grupa pojazdów
- **Lokalizacja** — Konkretna lokalizacja lub wszystkie lokalizacje
- **Metoda uwierzytelniania** — PnC, RFID, aplikacja lub wszystko
- **Minimalna energia** — Filtruj bardzo krótkie sesje

### Szczegóły sesji

Kliknij na sesję, aby zobaczyć:

- **Pełna krzywa mocy** — Wykres kW w czasie, z fazą rozruchu, plateau i spadkiem
- **Rozbicie energii** — Całkowita energia w kWh, maksymalna moc, średnia moc
- **Rozbicie kosztów** — Koszty energii (€/kWh), ewentualne opłaty, całkowite koszty
- **Dane pojazdu** — SoC na początku i końcu (jeśli zgłoszone), VIN, numer rejestracyjny
- **Dane ładujące** — EVSE-ID, typ konektora, wersja oprogramowania
- **CDR** — Charge Detail Record zgodnie z OCPI (do pobrania)

## Analiza

Panel analityczny oferuje spojrzenie na całą flotę:

### Zużycie energii
- Całkowita energia w kWh dziennie/tygodniowo/miesięcznie
- Rozbicie według pojazdu lub grupy pojazdów
- Porównanie w czasie
- Tendencje w kosztach za kWh

### Wskaźniki efektywności
- Średnia energia na sesję
- Średnie koszty za kWh
- Wykorzystanie (czas ładowania vs. czas postoju dla pojazdu)
- Wzorce szczytowego zapotrzebowania

### Analiza lokalizacji
- Które lokalizacje są najczęściej używane przez Twoją flotę
- Średni czas oczekiwania na wolny punkt ładowania
- Ceny energii według lokalizacji

## Powiadomienia

Skonfiguruj powiadomienia dla:

- **Nieudanych sesji** — Sesja, która została rozpoczęta, ale zakończyła się nieprawidłowo
- **Długich sesji** — Pojazd ładuje się dłużej niż określony czas
- **Wysokich kosztów** — Sesja przekracza próg kosztowy
- **Limitu SoC** — Poziom naładowania akumulatora pojazdu spadł poniżej minimum przed dotarciem do punktu ładowania

Powiadomienia są wysyłane za pomocą e-mail i/lub wyświetlane w dashboardzie Mijn Vloot.

## Eksport i integracja

### Eksport CSV
Pobierz każdy widok z filtrem jako plik CSV. Kolumny zawierają wszystkie szczegóły sesji oraz obliczone pola, takie jak koszty za kWh i czas trwania.

### API
Pobierz dane sesji programowo:

```
GET /api/v1/sessions?start_date=2026-03-01&end_date=2026-03-31
GET /api/v1/sessions/{session_id}
GET /api/v1/sessions/active
```

### Webhooki
Otrzymuj powiadomienia w czasie rzeczywistym, gdy sesje są rozpoczynane, aktualizowane lub kończone:

```json
{
  "event": "session.completed",
  "session_id": "ses_abc123",
  "vehicle_vin": "YV2RT60A1PB123456",
  "energy_kwh": 287.4,
  "cost_eur": 34.49,
  "duration_minutes": 142,
  "location": "Theater De Flint, Amersfoort"
}
```

Skonfiguruj webhooki za pomocą **Ustawień** → **API** → **Webhooki**.

## Zrozumienie krzywej mocy

Typowa sesja ładowania DC dla elektrycznego samochodu ciężarowego wykazuje następujący wzorzec:

1. **Rozruch** (0–3 min) — Moc rośnie, podczas gdy ładowarka i pojazd negocjują i akumulator jest rozgrzewany
2. **Plateau** (3 min – 60%+ SoC) — Maksymalna moc ładowania, często 150–350 kW w zależności od modelu samochodu ciężarowego
3. **Spadek** (60%+ SoC – docelowy SoC) — Moc maleje stopniowo, gdy akumulator staje się pełniejszy, w celu ochrony zdrowia komórek
4. **Zakończenie** — Sesja kończy się przy osiągnięciu docelowego SoC lub gdy jest ręcznie zatrzymana

Zrozumienie tej krzywej pomaga w planowaniu: jeśli musisz tylko naładować od 20% do 80% SoC, otrzymujesz najwięcej energii podczas szybkiej fazy plateau. Ładowanie od 80–100% trwa nieproporcjonalnie dłużej.