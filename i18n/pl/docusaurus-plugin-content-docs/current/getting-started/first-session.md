---
sidebar_position: 2
title: Twój Pierwszy Seans Ładowania
description: Krok po kroku instrukcja dla Twojego pierwszego seansu ładowania samochodów elektrycznych na miejscu Stroomlijnen.
keywords: [pierwsze ładowanie, jak ładować, samochód elektryczny, RFID, Plug and Charge]
---

# Twój Pierwszy Seans Ładowania

Czy jesteś menadżerem floty, który wszystko konfiguruje, czy kierowcą, który po raz pierwszy stoi przy ładowarce — tutaj przeczytasz dokładnie, co się dzieje.

## Przed Przyjazdem

### Jako Menadżer Floty

1. **Zarejestruj** się na portalu Stroomlijnen pod adresem [portal.stroomlijnen.nl](https://portal.stroomlijnen.nl)
2. **Dodaj swoje pojazdy** — numery VIN i tablice rejestracyjne
3. **Wybierz metodę uwierzytelniania:**
   - **Karty RFID** — wyślemy je do Ciebie (zobacz [Karty RFID](/docs/getting-started/rfid-cards))
   - **Plug & Charge** — konfiguracja za pośrednictwem portalu (zobacz [Przewodnik instalacji](/docs/plug-and-charge/setup-guide))
4. **Poinformuj swoich kierowców** — podziel się adresem miejsca i ewentualnymi kodami dostępu

### Jako Kierowca

- Upewnij się, że masz przy sobie **kartę RFID** (lub że Twój samochód obsługuje Plug & Charge)
- Zna adres miejsca i ewentualne kody dostępu do bram
- Sprawdź **aktualny poziom naładowania** swojego samochodu — zaplanuj potrzebny czas ładowania

## Przy Ładowarce

### Krok 1: Parkowanie i Podłączanie

1. Zajedź do dostępnego miejsca ładowania
2. Wyłącz silnik (niektóre samochody tego wymagają, inne nie — sprawdź instrukcję producenta)
3. Otwórz luk ładowania
4. Podłącz kabel ładowania:
   - **CCS2** (Combined Charging System) — europejski standard dla szybkiego ładowania prądem stałym
   - Wtyczka pasuje tylko w jednym kierunku. Nie wymuszaj.

### Krok 2: Uwierzytelnianie

**Z kartą RFID:**
1. Przytrzymaj kartę przed czytnikiem na ładowarce
2. Czekaj na zielone światło i/lub potwierdzenie na wyświetlaczu
3. Ładowanie rozpocznie się automatycznie

**Z Plug & Charge:**
1. Podłącz kabel. To wszystko.
2. Samochód i ładowarka wymieniają certyfikaty za pośrednictwem ISO 15118
3. Ładowanie rozpocznie się w ciągu 5–10 sekund

**Z aplikacją ładowania (roaming):**
1. Otwórz aplikację swojego eMSP
2. Zeskanuj kod QR na ładowarce lub wprowadź ID ładowarki
3. Rozpocznij sesję w aplikacji

### Krok 3: Monitorowanie

- Wyświetlacz ładowarki pokazuje rzeczywistą moc (kW) i dostarczoną energię (kWh)
- Możesz również monitorować za pośrednictwem portalu Stroomlijnen lub aplikacji do zarządzania flotą
- Większość samochodów elektrycznych ładuje się z 20% do 80% w ciągu 60–90 minut na naszych ładowarkach DC

### Krok 4: Odłączanie

1. Zatrzymaj sesję:
   - **RFID:** ponownie dotknij kartę
   - **Plug & Charge:** po prostu odłącz (sesja kończy się automatycznie)
   - **Aplikacja:** zatrzymaj w aplikacji, a następnie odłącz
2. Powiesić kabel z powrotem na miejsce
3. Zamknij luk ładowania
4. Możesz już jechać

## Co Zrobić, Gdy Coś Pójdzie Nie Tak?

| Problem | Co zrobić |
|-------|-----------|
| Karta nie została rozpoznana | Sprawdź, czy karta jest aktywna w portalu. Przytrzymaj kartę bliżej / dłużej przed czytnikiem. |
| Plug & Charge nie uruchamia się | Sprawdź status PnC Twojego samochodu w portalu OEM. Zobacz [Rozwiązywanie problemów](/docs/plug-and-charge/troubleshooting). |
| Ładowarka wyświetla komunikat o błędzie | Zanotuj kod błędu i skontaktuj się z nami. Zobacz [FAQ](/docs/faq). |
| Ładowanie jest wolniejsze niż oczekiwano | Temperatura akumulatora, poziom naładowania (SoC) i pojemność sieci wpływają na prędkość ładowania. Powyżej 80% SoC ładowanie znacznie zwalnia. |
| Kabel nie można odłączyć | Kabel zabezpiecza się podczas ładowania. Upewnij się, że sesja została całkowicie zatrzymana przed odłączeniem. |

## Oczekiwane Prędkości Ładowania

Samochody elektryczne mają różne pojemności ładowania:

| Poziom mocy | Typowe zastosowanie | Czas na 200 kWh |
|-------------|------------|-------------------|
| 50 kW DC | Nocne / ładowanie w magazynie | ~4 godziny |
| 150 kW DC | Okazjonalne ładowanie | ~1,5 godziny |
| 350 kW DC | Szybki obrót | ~40 minut |

:::note
Rzeczywista prędkość ładowania zależy od ładowarki pokładowej pojazdu, temperatury akumulatora, poziomu naładowania i dostępnej mocy ładowarki. Ładowarka dostarcza maksymalną moc, o którą proszą pojazdy, do nominalnej mocy ładowarki.
:::

## Następne Kroki

- [Skonfiguruj Plug & Charge](/docs/plug-and-charge/setup-guide) dla bezproblemowych przyszłych sesji
- [Zrozum swoje faktury](/docs/fleet-management/invoicing)
- [Dodaj więcej kierowców](/docs/fleet-management/driver-management)