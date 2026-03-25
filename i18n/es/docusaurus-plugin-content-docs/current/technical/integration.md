---
sidebar_position: 4
title: API y Integración
description: Visión general de la API REST de Stroomlijnen para la integración con sistemas de gestión de flotas — sesiones, vehículos, webhooks.
keywords: [API de carga, API de flota, integración, API REST, webhooks, OCPI, integración de sistema de gestión de flota]
---

# API y Integración

Para flotas que desean integrar los datos de carga de Stroomlijnen en sus propios sistemas de gestión.

## Visión general de la API REST

Nuestra API ofrece acceso programático a todas las funciones de gestión de flotas:

**URL base:** `https://api.stroomlijnen.nl/v1`
**Autenticación:** Token Bearer (clave API a través del portal → Configuración → API)
**Formato:** JSON
**Límite de velocidad:** 100 solicitudes/minuto

## Puntos finales

### Sesiones

```
GET /sessions                    — Obtener sesiones (paginadas, filtrables)
GET /sessions/{id}               — Obtener detalles de la sesión
GET /sessions/{id}/meter-values  — Obtener lecturas detalladas del medidor
```

**Filtros:**
- `?from=2026-03-01&to=2026-03-31` — rango de fechas
- `?vehicle=XX-123-YY` — por matrícula
- `?location=theater-carre` — por slug de ubicación
- `?status=completed` — por estado (activo, completado, fallido)
- `?auth_method=plug_and_charge` — por método de autenticación

**Respuesta:**
```json
{
  "id": "STM-2026-03-001234",
  "vehicle": {
    "vin": "YV2E4C1A1RB123456",
    "license_plate": "XX-123-YY",
    "nickname": "Camión 14"
  },
  "location": {
    "name": "Teatro Carré, Ámsterdam",
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

### Vehículos

```
GET    /vehicles         — Obtener vehículos de la flota
POST   /vehicles         — Agregar vehículo
GET    /vehicles/{vin}   — Obtener detalles del vehículo
PATCH  /vehicles/{vin}   — Actualizar vehículo
DELETE /vehicles/{vin}   — Eliminar vehículo
```

### Conductores

```
GET    /drivers          — Obtener conductores
POST   /drivers          — Agregar conductor
GET    /drivers/{id}     — Obtener detalles del conductor
PATCH  /drivers/{id}     — Actualizar conductor
DELETE /drivers/{id}     — Desactivar conductor
```

### Ubicaciones

```
GET /locations           — Obtener todas las ubicaciones disponibles
GET /locations/{id}      — Obtener detalles de la ubicación con estado del cargador
```

### Facturas

```
GET /invoices            — Obtener facturas
GET /invoices/{id}       — Obtener detalles de la factura
GET /invoices/{id}/pdf   — Descargar PDF
GET /invoices/{id}/csv   — Descargar CSV (datos de sesión)
```

## Webhooks

Reciba notificaciones en tiempo real para eventos:

### Configuración
1. Vaya a **Portal → Configuración → Webhooks**
2. Agregue su URL de punto final
3. Seleccione los eventos que desea recibir
4. Enviaremos un evento de prueba para verificar

### Eventos disponibles

| Evento | Disparador | Payload |
|-------|---------|---------|
| `session.started` | Nueva sesión de carga comienza | Objeto de sesión |
| `session.updated` | Datos de la sesión actualizados (cada 60s durante la carga) | Objeto de sesión |
| `session.completed` | Sesión finaliza normalmente | Objeto de sesión con datos finales |
| `session.failed` | Sesión fallida (autenticación, potencia, error) | Objeto de sesión con error |
| `vehicle.alert` | Certificado casi vencido, problema de pase, etc. | Objeto de notificación |
| `invoice.created` | Nueva factura disponible | Resumen de la factura |

### Formato del webhook
```json
{
  "event": "session.completed",
  "timestamp": "2026-03-23T10:47:00Z",
  "data": { /* payload específico del evento */ }
}
```

**Política de reintentos:** 3 intentos con retraso exponencial (10s, 60s, 300s). Si todos fallan, el evento se registra y se hace disponible a través de la API para su recuperación manual.

## Integración OCPI

Para la integración eMSP/CPO-a-CPO, soportamos **OCPI 2.2.1**:
- **Módulo de ubicaciones** — disponibilidad del cargador en tiempo real
- **Módulo de sesiones** — datos de sesión en vivo
- **Módulo CDR** — Registros detallados de carga
- **Módulo de tarifas** — precios actuales
- **Módulo de comandos** — inicio/detención remota

Póngase en contacto con nosotros para obtener información sobre el punto final OCPI y pruebas de integración.

## SDK y ejemplos

Proporcionamos ejemplos en lenguajes de programación comunes:

```python
# Ejemplo de Python
import requests

API_KEY = "su clave API aquí"
BASE = "https://api.stroomlijnen.nl/v1"
headers = {"Authorization": f"Bearer {API_KEY}"}

# Obtener las 10 últimas sesiones
sessions = requests.get(f"{BASE}/sessions?limit=10", headers=headers)
for s in sessions.json()["data"]:
    print(f"{s['vehicle']['nickname']}: {s['energy_kwh']} kWh en {s['location']['name']}")
```

## Límites de velocidad y cuotas

| Plan | Límite de velocidad | Eventos de webhook | Retención de datos |
|------|-----------|----------------|----------------|
| Estándar | 100 solic./min | 1.000/día | 12 meses |
| Profesional | 500 solic./min | 10.000/día | 24 meses |
| Empresarial | 2.000 solic./min | Ilimitado | 36 meses |

## Soporte

- **Problemas de API:** [api-support@stroomlijnen.nl](mailto:api-support@stroomlijnen.nl)
- **Página de estado:** [status.stroomlijnen.nl](https://status.stroomlijnen.nl)
- **Registro de cambios:** Los cambios en la API se anuncian 30 días antes por correo electrónico