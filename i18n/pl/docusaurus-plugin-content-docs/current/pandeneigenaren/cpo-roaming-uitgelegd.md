---
sidebar_position: 10
title: CPO, eMSP i roaming wyjaśnione
description: Co to są CPO i eMSP, jak działa roaming między sieciami ładowania, oraz jakie protokoły są używane?
keywords: [CPO, eMSP, roaming, OCPI, OCPP, sieć ładowania, interoperacyjność, karta ładowania]
---

# CPO, eMSP i roaming wyjaśnione

Świat ładowania elektrycznego ma swój własny jargon. Ta strona wyjaśnia najważniejsze pojęcia i role.

## Dwie role w systemie ładowania

### CPO — Operator Punktu Ładowania

**CPO** zarządza infrastrukturą fizyczną punktów ładowania. CPO jest odpowiedzialny za:

- Instalację i konserwację słupów ładowania
- Komunikację między słupem ładowania a biurem (za pomocą OCPP)
- Autoryzację sesji ładowania
- Pomiar i rozliczanie zużytej energii
- Usługi awaryjne i monitorowanie

CPO eksploatuje punkty ładowania w jednej lub kilku lokalizacjach. Jako właściciel nieruchomości masz umowę z CPO.

---

### eMSP — Dostawca Usług Ruchu Elektrycznego

**eMSP** świadczy usługi na rzecz użytkownika końcowego (kierowcy/menadżera floty):

- Wydawanie kart ładowania (RFID) lub aplikacji
- Dostęp do roamingu w punktach ładowania różnych CPO
- Miesięczne faktury za wszystkie sesje ładowania
- Usługi dla klienta

Menadżer floty ma umowę z eMSP. Jego kierowcy mogą ładować przy wszystkich punktach ładowania, które są połączone za pomocą roamingu.

:::note Firma może pełnić obie role
Niektórzy dostawcy są zarówno CPO, jak i eMSP. Oznacza to, że zarządzają punktami ładowania oraz wydają karty ładowania. Przykłady: Vattenfall, Shell Recharge, Allego, Eneco.
:::

---

## OCPP — protokół między słupem ładowania a biurem

**OCPP (Open Charge Point Protocol)** to międzynarodowy otwarty standard dla komunikacji między słupem ładowania a systemem zarządzającym (biurem) CPO.

| Wersja | Status | Cechy |
|---|---|---|
| OCPP 1.6 | Powszechnie stosowany, starsze instalacje | Podstawowa funkcjonalność |
| OCPP 2.0.1 | Aktualny standard | Inteligentne ładowanie, V2G, lepsza bezpieczeństwo |
| OCPP 2.1 | W rozwoju | MCS, rozszerzona V2G |

**Dlaczego OCPP jest ważny dla właścicieli nieruchomości:** Słup ładowania obsługujący OCPP nie jest związany z jednym CPO. Możesz zmienić CPO bez wymiany sprzętu.

---

## OCPI — protokół roamingu

**OCPI (Open Charge Point Interface)** to protokół, za pomocą którego CPO i eMSP komunikują się nawzajem. Umożliwia roaming: kierowca z kartą eMSP A może ładować przy punkcie ładowania CPO B, a obie strony rozliczają sesję automatycznie.

```
Kierowca (karta eMSP A)
        ↓
Słup ładowania (CPO B)
        ↓ Połączenie OCPI
Biuro CPO B → Biuro eMSP A
        ↓
Faktura do menadżera floty
```

Im więcej CPO i eMSP są połączone za pomocą OCPI, tym większa sieć, do której kierowca ma dostęp.

---

## Roaming w praktyce

W Holandii większość dużych CPO jest połączona za pomocą hubów roamingu. Największe huby to:

| Hub | Rola |
|---|---|
| **Gireve** | Europejski hub roamingu, wiele dużych sieci |
| **Hubject** | Roaming Plug & Charge (ISO 15118) |
| **e-Laad** | Holenderscy operatorzy sieci (Nuon, Stedin itp.) |

Karta ładowania holenderskiego eMSP działa zwykle na 300 000+ punktach ładowania w Europie za pomocą tych hubów.

---

## Co to oznacza dla Ciebie jako właściciela nieruchomości?

Jeśli zainstalujesz punkt ładowania od CPO, który jest połączony z sieciami roamingu, **wszyscy kierowcy z ważną kartą ładowania** mogą ładować przy Twoim słupie — nie tylko klienci tego samego CPO.

**Zapytaj podczas wyboru CPO:**
- "Poprzez jakie sieci roamingu są dostępne punkty ładowania?"
- "Czy karty ładowania Vattenfall, Shell Recharge i Allego działają przy Twoich słupach?"

---

## Istotne źródła

| Organizacja | Link |
|---|---|
| Open Charge Alliance (OCPP/OCPI) | [openchargealliance.org](https://openchargealliance.org) |
| ElaadNL (standardy techniczne NL) | [elaadnl.nl](https://elaadnl.nl) |
| Gireve (hub roamingu) | [gireve.com](https://gireve.com) |
| Hubject (Plug & Charge) | [hubject.com](https://hubject.com) |
| NAL (Narodowy Plan Rozwoju Infrastruktury Ładowania) | [agendalaadinfrastructuur.nl](https://agendalaadinfrastructuur.nl) |