---
sidebar_position: 4
title: API & Integracja
description: Przegląd API Stroomlijnen REST dla integracji z systemami zarządzania flotą — sesjami, pojazdami, webhookami.
keywords: [API ładowania, API floty, integracja, REST API, webhooks, OCPI, integracja systemu zarządzania flotą]
---

# API & Integracja

Dla flot, które chcą zintegrować dane o ładowaniu ze Stroomlijnen w swoich systemach zarządzania.

## Przegląd REST API

Nasze API oferuje programistyczny dostęp do wszystkich funkcji zarządzania flotą:

**Adres podstawowy:** `https://api.stroomlijnen.nl/v1`
**Autoryzacja:** Token Bearer (klucz API za pośrednictwem portalu → Ustawienia → API)
**Format:** JSON
**Limit szybkości:** 100 żądań/minutę

## Punkty końcowe

### Sesje

```
GET /sessions                    — Pobierz sesje (paginowane, filtrowalne)
GET /sessions/{id}               — Pobierz szczegóły sesji
GET /sessions/{id}/meter-values  — Pobierz szczegółowe odczyty liczników
```

**Filtry:**
- `?from=2026-03-01&to=2026-03-31` — zakres dat
- `?vehicle=XX-123-YY` — według numeru rejestracyjnego
- `?location=theater-carre` — według sluga lokalizacji
- `?status=completed` — według statusu (aktywny, zakończony, nieudany)
- `?auth_method=plug_and_charge` — według metody autoryzacji

**Odpowiedź:**
```json
{
  "id": "STM-2026-03-001234",
  "vehicle": {
    "vin": "YV2E4C1A1RB123456",
    "license_plate": "XX-123-YY",
    "nickname": "Truck 14"
  },
  "location": {
    "name": "Theater Carré, Amsterdam",
    "evse_id": "NL*STM*E001234*1"
  },
  "start_time": "2026-03-23T08:14:00+01:00",
  "end_time": "2026-03-23T10:47:00+01:00",
  "energy_kwh": 187.4,
  "max_power_kw": 148.2,
  "avg_power_kw": 73.8,
  "auth_method": "plug_and_charge",
  "cost": {
    "total": 18.74,
    "currency": "EUR",
    "tariff": "fleet-standard",
    "breakdown": {
      "energy": 18.74,
      "time": 0,
      "idle": 0
    }
  },
  "status": "completed"
}
```

### Pojazdy

```
GET    /vehicles         — Pobierz pojazdy floty
POST   /vehicles         — Dodaj pojazd
GET    /vehicles/{vin}   — Pobierz szczegóły pojazdu
PATCH  /vehicles/{vin}   — Zaktualizuj pojazd
DELETE /vehicles/{vin}   — Usuń pojazd
```

### Kierowcy

```
GET    /drivers          — Pobierz kierowców
POST   /drivers          — Dodaj kierowcę
GET    /drivers/{id}     — Pobierz szczegóły kierowcy
PATCH  /drivers/{id}     — Zaktualizuj kierowcę
DELETE /drivers/{id}     — Deaktywuj kierowcę
```

### Lokalizacje

```
GET /locations           — Pobierz wszystkie dostępne lokalizacje
GET /locations/{id}      — Pobierz szczegóły lokalizacji z stanem ładowarki
```

### Faktury

```
GET /invoices            — Pobierz faktury
GET /invoices/{id}       — Pobierz szczegóły faktury
GET /invoices/{id}/pdf   — Pobierz PDF
GET /invoices/{id}/csv   — Pobierz CSV (dane sesji)
```

## Webhooki

Otrzymuj powiadomienia w czasie rzeczywistym o zdarzeniach:

### Konfiguracja
1. Przejdź do **Portal → Ustawienia → Webhooki**
2. Dodaj adres URL punktu końcowego
3. Wybierz zdarzenia do otrzymania
4. Wysyłamy testowe zdarzenie w celu weryfikacji

### Dostępne Zdarzenia

| Zdarzenie | Wyzwalacz | Payload |
|-------|---------|---------|
| `session.started` | Nowa sesja ładowania rozpoczyna się | Obiekt sesji |
| `session.updated` | Dane sesji są aktualizowane (co 60s podczas ładowania) | Obiekt sesji |
| `session.completed` | Sesja kończy się normalnie | Obiekt sesji z danymi końcowymi |
| `session.failed` | Sesja nie powiedzie się (autoryzacja, moc, błąd) | Obiekt sesji z błędem |
| `vehicle.alert` | Certyfikat wygasa, problem z passem itp. | Obiekt alertu |
| `invoice.created` | Nowa faktura jest dostępna | Przegląd faktury |

### Format Webhooka
```json
{
  "event": "session.completed",
  "timestamp": "2026-03-23T10:47:00Z",
  "data": { /* payload specyficzny dla zdarzenia */ }
}
```

**Polityka ponawiania:** 3 próby z wykładniczym opóźnieniem (10s, 60s, 300s). Jeśli wszystkie nie powiodą się, zdarzenie jest rejestrowane i udostępniane za pośrednictwem API do ręcznego pobrania.

## Integracja OCPI

Do integracji eMSP/CPO-CPO obsługujemy **OCPI 2.2.1**:
- **Moduł lokalizacji** — dostępność ładowarki w czasie rzeczywistym
- **Moduł sesji** — dane sesji na żywo
- **Moduł CDR** — Charge Detail Records
- **Moduł taryf** — bieżące ceny
- **Moduł poleceń** — zdalne uruchamianie/zatrzymywanie

Skontaktuj się z nami w celu uzyskania informacji o punktach końcowych OCPI i testach integracyjnych.

## SDK'i & Przykłady

Dostarczamy przykłady w popularnych językach programowania:

```python
# Przykład Pythona
import requests

API_KEY = "twój_klucz_api_tutaj"
BASE = "https://api.stroomlijnen.nl/v1"
headers = {"Authorization": f"Bearer {API_KEY}"}

# Pobierz ostatnie 10 sesji
sessions = requests.get(f"{BASE}/sessions?limit=10", headers=headers)
for s in sessions.json()["data"]:
    print(f"{s['vehicle']['nickname']}: {s['energy_kwh']} kWh w {s['location']['name']}")
```

## Limity szybkości & Przydziały

| Plan | Limit szybkości | Zdarzenia webhook | Przechowywanie danych |
|------|-----------|----------------|----------------|
| Standard | 100 żądań/minutę | 1.000/dzień | 12 miesięcy |
| Profesjonalny | 500 żądań/minutę | 10.000/dzień | 24 miesiące |
| Enterprise | 2.000 żądań/minutę | Nieograniczone | 36 miesięcy |

## Wsparcie

- **Problemy z API:** [api-support@stroomlijnen.nl](mailto:api-support@stroomlijnen.nl)
- **Strona statusu:** [status.stroomlijnen.nl](https://status.stroomlijnen.nl)
- **Rejestr zmian:** Zmiany w API są ogłaszane 30 dni wcześniej za pośrednictwem e-maila