---
sidebar_position: 1
title: Co to jest Plug & Charge?
description: "Gdy kompatybilny z Plug & Charge samochód ciężarowy podłączy się do naszego ładowarki, rozpocznie się automatyczne rozliczanie — bez potrzeby karty, aplikacji czy interwencji kierowcy."
keywords: [Plug and Charge, ISO 15118, automatyczne ładowanie, elektryczny samochód ciężarowy, ładowanie floty, PnC]
---

# Co to jest Plug & Charge?

**Gdy kompatybilny z Plug & Charge samochód ciężarowy podłączy się do naszej ładowarki, rozpocznie się automatyczne rozliczanie — bez potrzeby karty, aplikacji czy interwencji kierowcy.**

To wszystko. Włóż, odłóż, wróć do naładowanego samochodu ciężarowego. Ładowarka i samochód ciężarowy załatwiają między sobą uwierzytelnianie, autoryzację i rozliczanie.

## Problem, który rozwiązuje Plug & Charge

Obecnie większość sesji ładowania wymaga od kierowcy:
1. Posiadania odpowiedniej karty lub aplikacji
2. Wiedzy, jaka sieć zarządza tą ładowarką
3. Przesunięcia karty, zeskanowania kodu QR lub uruchomienia sesji w aplikacji
4. Oczekiwania na autoryzację
5. Dopiero wtedy włóż przewód

Dla właściciela samochodu osobowego, który ładował raz w tygodniu, jest to niewielkie utrudnienie. Dla floty 20 samochodów ciężarowych z wieloma kierowcami na zmiany jest to operacyjne obciążenie:

- Kierowcy zapominają karty
- Karty giną lub ulegają uszkodzeniu
- Nowi kierowcy muszą być wprowadzani do systemu
- Różne sieci ładowania wymagają różnych aplikacji
- Współdzielone pojazdy wymagają współdzielonych kart (ryzyko bezpieczeństwa)
- Każda nieudana autoryzacja to stracony czas ładowania

### Rzeczywiste koszty utrudnień

Dla floty 20 elektrycznych samochodów ciężarowych:
- Średnio **3 minuty** na sesję ładowania poświęcone na procedury autoryzacji
- Średnio **2 sesje ładowania** na samochód dziennie
- To jest **120 minut dziennie** — dwie godziny czasu kierowców zmarnowane na przesunięcia kart
- Przy kosztach kierowcy w wysokości 35 €/godz. zupełnie obciążone: **1225 €/miesiąc** straty produktywności
- Plus nieudane sesje, połączenia serwisowe i sfrustrowani kierowcy

## Jak Plug & Charge rozwiązuje ten problem

Z Plug & Charge:
1. Kierowca włożył przewód
2. **Gotowe.**

Certyfikat pokładowy samochodu ciężarowego załatwia wszystko. Ładowarka wie, kim jesteś, do której floty należysz i gdzie ma być wysłana faktura — wszystko wymienione kryptograficznie w mniej niż 5 sekund.

Nie ma kart, które można zgubić. Nie ma aplikacji do instalowania. Nie potrzeba szkolenia. Nie ma różnicy między kierowcą pierwszego dnia a weteranem z 10-letnim stażem.

## Kto może z niego korzystać?

Plug & Charge wymaga:

1. **Kompatybilnego pojazdu** — samochód ciężarowy lub dostawczy musi obsługiwać ISO 15118-2 lub nowsze. Zobacz naszą listę [kompatybilnych pojazdów](/docs/plug-and-charge/compatible-vehicles).
2. **Kompatybilnej ładowarki** — musi obsługiwać ISO 15118 i być połączone z ekosystemem Plug & Charge. Wszystkie ładowarki Stroomlijnen obsługują to.
3. **Dostarczenia certyfikatów** — Twój pojazd potrzebuje certyfikatu kontraktowego. My załatwiamy to przez nasze portal.

## Czy jest bezpieczny?

Tak. Plug & Charge używa tego samego rodzaju kryptografii, który zabezpiecza internetowe bankowość:

- **Certyfikaty X.509** — każdy pojazd ma unikalny cyfrowy certyfikat
- **PKI (Public Key Infrastructure)** — łańcuch zaufania od pojazdu do eMSP
- **Szyfrowanie TLS** — wszystkie komunikacje między pojazdem a ładowarką są szyfrowane
- **Brak narażenia wrażliwych danych** — kabel przenosi zaszyfrowane dane certyfikatu, nie numery kont

Skradziony pojazd może być zdalnie wyłączony przez odwołanie certyfikatu. Karta RFID działa dopóki ktoś nie zauważy, że zaginęła.

:::info
Plug & Charge jest **bezpieczniejszy** niż karty RFID. Karty mogą być sklonowane (choć nowoczesne karty utrudniają to). Certyfikaty nie — używają asymetrycznej kryptografii z kluczami 256-bitowymi.
:::

## Biznesowy przypadek

Dla zarządców flot Plug & Charge nie jest tylko wygodny — to oszczędność kosztów:

| Czynnik | RFID | Plug & Charge |
|--------|------|---------------|
| Czas kierowcy na sesję | 2–5 minut | 0 minut |
| Nakład administracyjny dla kart | Wysoki | Brak |
| Ryzyko utraty/kradzieży | Rzeczywiste | Nie dotyczy |
| Proces szkolenia nowych kierowców | Wydanie karty, wyjaśnienie procedury | "Po prostu włóż przewód" |
| Pojazdy z wieloma zmianami | Karty są współdzielone (ryzyko) | Automatycznie na pojazd |
| Miesięczny czas administracyjny | Godziny | Minuty |

## Wdrożenie

Gotowy wdrożyć Plug & Charge dla swojej floty?

1. **[Sprawdź kompatybilność pojazdu](/docs/plug-and-charge/compatible-vehicles)** — czy Twój samochód ciężarowy go obsługuje?
2. **[Zrozum, jak to działa](/docs/plug-and-charge/how-it-works)** — technologia za tym
3. **[Skonfiguruj](/docs/plug-and-charge/setup-guide)** — krok po kroku w naszym portalu
4. **[Specyficzne dla marki instrukcje](/docs/plug-and-charge/brand-guides/volvo-trucks)** — szczegółowe instrukcje dla każdego producenta