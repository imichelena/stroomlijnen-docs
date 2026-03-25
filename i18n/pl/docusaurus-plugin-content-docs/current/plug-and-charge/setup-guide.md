---
sidebar_position: 4
title: Podręcznik instalacji Plug & Charge
description: Jak skonfigurować Plug & Charge dla Twojej floty za pomocą portalu Stroomlijnen — od rejestracji do pierwszej zautomatyzowanej sesji.
keywords: [Konfiguracja Plug and Charge, rejestracja floty, certyfikat kontraktowy, Portal Mój Fleet, aktywacja PnC]
---

# Podręcznik instalacji Plug & Charge

Konfiguracja Plug & Charge dla Twojej floty zajmuje około 15 minut pracy w portalu. Po skonfigurowaniu każdy zarejestrowany pojazd zostanie automatycznie uwierzytelniony i będzie mógł ładować się na każdej stacji Stroomlijnen — bez potrzeby używania kart lub aplikacji.

## Wymagania

Przed rozpoczęciem:

- [ ] **Konto floty Stroomlijnen** (zarejestruj się za pomocą [stroomlijnen.nl](https://stroomlijnen.nl) lub skontaktuj się z menedżerem konta)
- [ ] **Numery VIN** Twoich pojazdów (Vehicle Identification Numbers)
- [ ] Dostęp do portalu floty OEM (Volvo Connect, DAF Connect, Fleetboard itp.)
- [ ] **Kompatybilny pojazd** (zobacz [Kompatybilne Pojazdy](./compatible-vehicles))

## Krok 1: Logowanie do Mój Flota

Przejdź do **my.stroomlijnen.nl** i zaloguj się za pomocą danych logowania do konta floty.

Jeśli nie masz jeszcze konta:
1. Kliknij na **Zarejestruj się** i wypełnij dane firmy (numer KVK, adres faktury)
2. Otrzymasz e-mail z linkiem weryfikacyjnym — kliknij na link
3. Twoje konto zostanie sprawdzone i aktywowane w ciągu jednego dnia roboczego

## Krok 2: Dodawanie Pojazdów

W dashboardzie Mój Flota:

1. Przejdź do **Pojazdy** → **Dodaj pojazd**
2. Wprowadź dane pojazdu:
   - **VIN** — 17-znakowy numer identyfikacyjny pojazdu (na słupku drzwi kierowcy lub na dowodzie rejestracyjnym)
   - **Numer rejestracyjny** — do identyfikacji i raportowania
   - **Marka/Model** — wybierz z listy rozwijanej (np. Volvo FH Electric)
   - **Pseudonim** — opcjonalnie, dla łatwiejszego rozpoznania (np. "Ciężarówka 014 — Trasa Amsterdam")
3. Kliknij na **Zapisz i Kontynuuj**

Powtórz ten krok dla każdego pojazdu w Twojej flocie. Możesz również **importować wsadowo** za pomocą przesyłania plików CSV.

### Format CSV

```csv
vin,numer_rejestracyjny,marka,model,pseudonim
YV2RT60A1PB123456,AB-123-C,Volvo,FH Electric,Ciężarówka 014
XLRAE75PC0H987654,DE-456-F,DAF,XF Electric,Ciężarówka 022
```

## Krok 3: Włączanie Plug & Charge

Dla każdego pojazdu:

1. Przejdź do **Pojazdy** → wybierz pojazd → zakładka **Plug & Charge**
2. Ustaw **Włącz Plug & Charge** na WŁĄCZONE
3. System:
   - Wygeneruje **certyfikat kontraktowy** dla tego pojazdu
   - Zażąda instalacji za pomocą usługi Certificate Provisioning Service OEM
   - Wyświetli status: `W oczekiwaniu → Instalowanie → Aktywny`

:::note Czas instalacji certyfikatu
Instalacja certyfikatu trwa zwykle **1–24 godziny**, w zależności od OEM:
- **Volvo**: Zwykle w ciągu 2 godzin za pomocą Volvo Connect
- **DAF**: 4–8 godzin za pomocą DAF Connect
- **Mercedes-Benz**: 2–6 godzin za pomocą Fleetboard
- **Scania**: 4–12 godzin za pomocą Scania Fleet Management
- **MAN**: 6–24 godziny za pomocą platformy RIO

Pojazd musi być **online** (kontakt włączony lub podłączony do ładowania), aby certyfikat mógł zostać dostarczony.
:::

## Krok 4: Autoryzacja za pomocą portalu OEM

Niektórzy producenci OEM wymagają, aby usługi Plug & Charge były autoryzowane w ich portalu floty:

### Volvo Connect
1. Zaloguj się do Volvo Connect → **Usługi** → **Usługi ładowania**
2. Wyszukaj "Stroomlijnen B.V." na liście partnerów i kliknij na **Autoryzuj**
3. Potwierdź pojazdy, które mają być uwzględnione
4. Zobacz [Podręcznik marki Volvo](./brand-guides/volvo-trucks) dla szczegółowych kroków

### DAF Connect
1. Zaloguj się do DAF Connect → **Ustawienia** → **Partnerzy ładowania**
2. Włącz Stroomlijnen i wybierz pojazdy
3. Zobacz [Podręcznik marki DAF](./brand-guides/daf) dla szczegółowych kroków

### Mercedes-Benz Fleetboard
1. Zaloguj się do Fleetboard → **eMobility** → **Zarządzanie ładowaniem**
2. Dodaj Stroomlijnen jako dostawcę usług ładowania
3. Zobacz [Podręcznik marki Mercedes](./brand-guides/mercedes-trucks) dla szczegółowych kroków

## Krok 5: Weryfikacja aktywacji

Gdy certyfikat zostanie zainstalowany:

1. W Mój Flota → **Pojazdy** → wybierz pojazd → zakładka **Plug & Charge**
2. Status powinien wyświetlać: **✅ Aktywny**
3. Szczegóły certyfikatu zostaną wyświetlone:
   - EMAID (e-Mobility Account Identifier)
   - Data ważności certyfikatu
   - Ostatnia udana sesja Plug & Charge (jeśli dostępna)

## Krok 6: Testowanie

Jedź do stacji Stroomlijnen i podłącz kabel. Sesja ładowania powinna rozpocząć się w ciągu 5–10 sekund bez ręcznej interwencji.

**Co zwrócić uwagę:**
- Wyświetlacz ładowarki wyświetla "Plug & Charge — Zweryfikowany" (lub podobnie)
- Sesja pojawia się w Mój Flota → **Sesje** w ciągu 1 minuty
- Nie było potrzeby używania kart RFID ani aplikacji

## Rozwiązywanie problemów z instalacją

| Problem | Rozwiązanie |
|---------|----------|
| Status certyfikatu pozostaje "W oczekiwaniu" | Upewnij się, że pojazd jest online (kontakt włączony). Sprawdź portal OEM pod kątem otwartych autoryzacji. |
| Portal OEM nie wyświetla Stroomlijnen | Skontaktuj się z nami — możliwe, że musimy utworzyć połączenie backendowe dla Twojego konkretnego konta OEM. |
| Certyfikat zainstalowany, ale Plug & Charge nie powiedzie się | Zobacz [Podręcznik rozwiązywania problemów](./troubleshooting) dla szczegółowej diagnostyki. |
| Błąd "EMAID nie znaleziony" na ładowarce | Certyfikat może jeszcze nie zostać dostarczony do naszego backendu. Poczekaj 1 godzinę i spróbuj ponownie. |
| Błędy importu wsadowego | Sprawdź format VIN (17 znaków, bez O/I/Q), sprawdź, czy kodowanie CSV jest UTF-8. |

## Zarządzanie certyfikatami

### Przedłużenie
Certyfikaty kontraktowe wygasają po **2 latach**. Portal Mój Flota wysyła powiadomienia e-mail 60, 30 i 7 dni przed wygaśnięciem. Przedłużenie jest automatyczne, jeśli Twoje konto floty jest aktywne.

### Unieważnienie
Jeśli pojazd zostanie sprzedany, skradziony lub wycofany z użytku:
1. Przejdź do **Pojazdy** → wybierz pojazd → zakładka **Plug & Charge**
2. Kliknij na **Unieważnij certyfikat**
3. Certyfikat zostanie natychmiast unieważniony we wszystkich połączonych sieciach ładowania

### Przeniesienie
Gdy pojazd zostanie przeniesiony do innej jednostki rozliczeniowej w ramach Twojej organizacji:
1. Unieważnij bieżący certyfikat
2. Zarejestruj pojazd ponownie pod nową jednostką rozliczeniową
3. Nowy certyfikat zostanie wydany

---

**Następny:** [Podręczniki marki →](./brand-guides/volvo-trucks)