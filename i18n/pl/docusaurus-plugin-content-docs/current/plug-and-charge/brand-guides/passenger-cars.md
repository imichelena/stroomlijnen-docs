---
sidebar_position: 7
title: Samochody osobowe — Plug & Charge
description: Jak działa Plug & Charge dla samochodów osobowych na stacjach ładowania Stroomlijnen — BMW, Mercedes, Porsche, Audi, VW i więcej.
keywords: [samochody osobowe, Plug and Charge, BMW, Mercedes, Porsche, Audi, VW, CCS, elektryczne auto]
---

# Samochody osobowe — Plug & Charge

Chociaż stacje ładowania Stroomlijnen są zaprojektowane z myślą o pojazdach użytkowych, samochody osobowe z gniazdami CCS również mogą korzystać z naszych stacji. Wiele nowoczesnych samochodów elektrycznych obsługuje już Plug & Charge.

## Jak to działa dla samochodów osobowych

Plug & Charge dla samochodów osobowych działa w ten sam sposób, co dla ciężarówek — pojazd przedstawia cyfrowy certyfikat kontraktowy za pomocą ISO 15118, a ładowarka automatycznie go uwierzytelnia.

Różnica polega na **sposobie, w jaki certyfikat trafia do samochodu**:
- Samochody otrzymują certyfikaty PnC zwykle za pośrednictwem własnej usługi ładowania producenta (BMW Charging, Mercedes me Charge itd.)
- Certyfikat PnC samochodu może być powiązany z eMSP producenta, a nie bezpośrednio ze Stroomlijnen
- Roaming za pośrednictwem Hubject umożliwia cross-sieciowy PnC — certyfikat samochodu działa w Stroomlijnen za pośrednictwem roamingu

## Obsługiwane marki

| Marka | Metoda PnC | Działa w Stroomlijnen |
|------|-------------|:----------------------:|
| **BMW** | BMW Charging / Hubject | ✅ Za pośrednictwem roamingu |
| **Mercedes-Benz** | Mercedes me Charge / Hubject | ✅ Za pośrednictwem roamingu |
| **Porsche** | Porsche Charging Service / Hubject | ✅ Za pośrednictwem roamingu |
| **Audi** | myAudi / Hubject | ✅ Za pośrednictwem roamingu |
| **VW** | Volkswagen We Charge | ⚠️ Wdrożenie w toku |
| **Hyundai** | Hyundai Bluelink | ⚠️ Zależy od rynku |
| **Kia** | Kia Connect | ⚠️ Zależy od rynku |
| **Tesla** | Własne Supercharger PnC | ❌ Nie za pośrednictwem ISO 15118 |
| **Stellantis** | — | ❌ Jeszcze nieobsługiwane |

### Jak działa roaming PnC

1. Aktywujesz PnC w aplikacji producenta samochodu (np. BMW Charging w aplikacji My BMW)
2. Producent instaluje certyfikat kontraktowy w Twoim samochodzie
3. Gdy podłączysz się do ładowarki Stroomlijnen, samochód przedstawia swój certyfikat
4. Nasza ładowarka waliduje go za pośrednictwem puli certyfikatów Hubject
5. Sesja jest autoryzowana i rozliczana za pośrednictwem usługi ładowania producenta
6. Widzisz sesję w aplikacji producenta (i my ją widzimy w naszym backendzie)

**Zwróć uwagę na stawki:** Podczas ładowania za pośrednictwem roamingu PnC obowiązuje cena Twojego eMSP (np. stawki BMW Charging), a nie stawki vloot Stroomlijnen. Aby uzyskać najlepsze ceny na miejscach Stroomlijnen, możesz rozważyć złożenie wniosku o bezpośrednie konto floty.

## Bezpośredni PnC dla samochodów osobowych

Jeśli zarządzasz flotą samochodów osobowych (np. firmowymi), możesz ustawić bezpośredni PnC Stroomlijnen:

1. Zarejestruj pojazdy w Mój Flota (ta sama procedura, co dla ciężarówek)
2. Włącz PnC dla każdego pojazdu
3. Dla obsługiwanych marek (BMW, Mercedes, Audi) nasz CPS pushuje certyfikaty za pośrednictwem backendu OEM
4. Otrzymujesz bezpośrednie stawki floty Stroomlijnen zamiast stawek roamingowych

Jest to szczególnie wartościowe dla firmowych flot, w których zarządzanie kosztami jest istotne.

## Praktyczne uwagi

### Kompatybilność fizyczna
Stacje Stroomlijnen są zaprojektowane z myślą o ciężarówkach. Podczas ładowania samochodu osobowego:
- Parkuj w wyznaczonym miejscu parkingowym, jeśli jest dostępne
- Kabel CCS może być cięższy niż w standardowych stacjach ładowania (zaprojektowany z myślą o połączeniach ciężarówek)
- Zasięg kabla jest wystarczający — nasze kable mają długość 5 m lub więcej

### Prędkość ładowania
Nasze ładowarki dostarczają do 400 kW, ale Twój samochód pobiera tylko tyle, ile może. Średni samochód osobowy ładowany jest z prędkością 50–250 kW w zależności od modelu i stanu baterii.

### Znajdowanie miejsc przyjaznych dla samochodów
Wyszukuj w aplikacji Stroomlijnen lub na mapie miejsca, które są oznaczone zarówno symbolem ciężarówki, jak i samochodu. Niektóre miejsca mają specjalne miejsca parkingowe z niższymi trzonami kabla.