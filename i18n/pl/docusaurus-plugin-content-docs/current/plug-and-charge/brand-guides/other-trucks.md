---
sidebar_position: 6
title: Inne marki samochodów ciężarowych — Plug & Charge
description: Status i informacje o instalacji Plug & Charge dla Scania, MAN, Renault Trucks, Ford Trucks, IVECO oraz VW Pojazdy Użytkowe.
keywords: [Scania, MAN, Renault Trucks, IVECO, Plug and Charge, ISO 15118, elektryczne ciężarówki]
---

# Inne marki samochodów ciężarowych — Plug & Charge

Ta strona dotyczy instalacji PnC dla marek samochodów ciężarowych, które jeszcze nie mają własnej szczegółowej instrukcji. W miarę wzrostu przyjęcia, będziemy dzielić je na oddzielne instrukcje.

## Scania BEV

**Modele:** R-seria BEV, P-seria BEV
**Status PnC:** ✅ Obsługiwany (od oprogramowania 2025.3+)
**Portal floty:** Zarządzanie flotą Scania

### Kroki instalacji

1. Zaloguj się na [Zarządzanie flotą Scania](https://my.scania.com)
2. Przejdź do **Elektryfikacja** → **Usługi ładowania**
3. Kliknij **Dodaj partnera ładowania** → wyszukaj "Stroomlijnen"
4. Autoryzuj i wybierz pojazdy
5. Scania przesyła certyfikaty za pośrednictwem ich bramki telematycznej
6. **Typowy czas instalacji: 4–12 godzin**

### Uwagi
- Scania wymaga wersji oprogramowania 2025.3 lub nowszej dla pełnego obsługiwania PnC
- Starsze wersje oprogramowania obsługują komunikację ISO 15118, ale nie przetwarzają certyfikatów umownych
- Skontaktuj się z dealerm Scania w celu uzyskania aktualizacji oprogramowania — OTA aktualizacje dla PnC są stopniowo wdrażane
- System telematyczny Scania używa oddzielnego połączenia komórkowego od infotainment pojazdu — upewnij się, że karta SIM telematyczna jest aktywna

## MAN Electric

**Modele:** eTGX, eTGS, eTGL, eTGM
**Status PnC:** ✅ Obsługiwany na eTGX/eTGS | ⚠️ Wdrażany na eTGL/eTGM
**Portal floty:** Platforma RIO

### Kroki instalacji

1. Zaloguj się na [RIO](https://rio.cloud)
2. Przejdź do **Usługi** → **Zarządzanie ładowaniem**
3. Kliknij pod **Zewnętrznymi partnerami ładowania** na **Połącz partnera**
4. Wyszukaj **"Stroomlijnen B.V."** i kliknij **Autoryzuj**
5. Wybierz pojazdy i potwierdź
6. **Typowy czas instalacji: 6–24 godziny**

### Uwagi
- Platforma RIO jest współdzielona przez MAN i niektóre inne marki TRATON
- eTGX i eTGS mają pełne obsługiwania PnC od końca 2025 roku
- eTGL i eTGM otrzymają obsługę PnC za pośrednictwem stopniowych aktualizacji oprogramowania w 2026 roku
- Certyfikaty MAN używają modułu zabezpieczeń sprzętowych (HSM) w pojeździe — zapewnia to doskonałe zabezpieczenia, ale oznacza, że certyfikaty mogą być instalowane tylko wtedy, gdy moduł zabezpieczeń pojazdu jest w trybie "provisioning" (pierwsze 30 minut po podłączeniu)

## Renault Trucks E-Tech

**Modele:** E-Tech T, E-Tech D, E-Tech Master (samochód dostawczy)
**Status PnC:** ⚠️ Przewidziany na H1 2026
**Portal floty:** Zarządzanie flotą Renault Trucks

### Bieżący status
- Sprzęt ISO 15118-2 jest obecny w E-Tech T i E-Tech D
- Aktywacja oprogramowania PnC jest przewidziana za pośrednictwem aktualizacji OTA w pierwszej połowie 2026 roku
- Renault Trucks prowadzi testy interoperacyjności PnC z Hubject od Q3 2025
- E-Tech Master samochód dostawczy nie ma obsługiwania ISO 15118

### Co robić teraz
1. Upewnij się, że Twoje konto portalu floty jest ustawione z dostępem administratora
2. Zarejestruj swoje pojazdy w portalu Stroomlijnen Mijn Vloot
3. Używaj kart RFID do ładowania w międzyczasie
4. Poinformujemy Cię, gdy PnC będzie dostępny dla Renault Trucks

## Ford Trucks

**Modele:** F-MAX Electric
**Status PnC:** ❌ Nieobsługiwany

### Bieżący status
- Ford F-MAX Electric (wyprodukowany przez Ford Otosan w Turcji) nie obsługuje obecnie ISO 15118
- Ford Otosan ogłosił obsługę ISO 15118 w swojej mapie drogowej na rok modelowy 2027
- Używaj kart RFID lub aplikacji Stroomlijnen do ładowania

## IVECO

**Modele:** S-eWay
**Status PnC:** ⚠️ Ogłoszony dla modeli 2026

### Bieżący status
- IVECO ogłosił obsługę ISO 15118-2 PnC dla samochodów ciężarowych S-eWay od roku modelowego 2026
- Modele z przed 2026 roku nie mają wymaganego sprzętu ISO 15118
- Modernizacja nie jest dostępna — PnC wymaga fabrycznie zainstalowanych modułów komunikacyjnych
- Używaj kart RFID do bieżących samochodów ciężarowych S-eWay

## VW Pojazdy Użytkowe

**Modele:** ID. Buzz Cargo
**Status PnC:** ⚠️ Ograniczona obsługa

### Bieżący status
- ID. Buzz Cargo obsługuje ISO 15118-2, ale PnC jest zarządzany za pośrednictwem ekosystemu VW We Charge
- Cross-provider PnC (używanie certyfikatów Stroomlijnen z pojazdami VW) jest technicznie możliwy, ale wymaga dodatkowej konfiguracji
- Skontaktuj się z supportem Stroomlijnen w celu uzyskania specyficznej konfiguracji PnC dla VW

---

:::info Nie znaleziono Twojej marki?
Skontaktuj się z nami za pośrednictwem [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl). Aktywnie rozszerzamy obsługę PnC w miarę jak więcej producentów uruchamia ISO 15118.
:::

**Następny:** [Rozwiązywanie problemów →](../troubleshooting)