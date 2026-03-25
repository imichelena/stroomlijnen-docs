---
sidebar_position: 3
title: Sesiones de carga
description: Monitoree y analice las sesiones de carga para su flota eléctrica en el portal Mijn Vloot de Stroomlijnen.
keywords: [sesiones de carga, monitoreo de sesión, consumo de energía, historial de carga, análisis de flota]
---

# Sesiones de carga

Cada vez que uno de sus vehículos se conecta a un punto de carga de Stroomlijnen, se crea un registro de sesión con datos completos — energía, costos, duración, curva de potencia y método de autenticación.

## Sesiones activas

La vista **Sesiones activas** muestra todos los vehículos que están cargando actualmente:

- **Vehículo** — Identificado por matrícula, apodo o VIN
- **Ubicación** — Nombre del punto de carga y EVSE-ID específico
- **Inicio** — Fecha y hora de inicio de la sesión
- **Duración** — Temporizador en curso
- **Energía** — kWh entregados hasta ahora (actualizados cada 60 segundos)
- **Potencia** — Potencia de carga actual en kW
- **SoC** — Nivel de carga de la batería (si lo informa el vehículo)
- **Método de autenticación** — Conectar y cargar, RFID o aplicación

Puede hacer clic en cualquier sesión activa para ver una **curva de potencia en vivo** que muestra el perfil de carga en tiempo real.

## Historial de sesiones

La vista de historial muestra todas las sesiones completadas con opciones de filtrado:

### Filtros
- **Rango de fechas** — Fechas personalizadas o preestablecidas (hoy, esta semana, este mes, últimos 30 días)
- **Vehículo** — Un vehículo o grupo de vehículos
- **Ubicación** — Ubicación específica o todas las ubicaciones
- **Método de autenticación** — Conectar y cargar, RFID, aplicación o todo
- **Energía mínima** — Filtrar sesiones muy cortas

### Detalles de la sesión

Haga clic en una sesión para ver:

- **Curva de potencia completa** — Gráfico de kW en el tiempo, con inicio, meseta y disminución
- **Desglose de energía** — kWh total, potencia pico, potencia media
- **Desglose de costos** — Costos de energía (€/kWh), posibles recargos, costos totales
- **Datos del vehículo** — SoC al inicio y fin (si lo informa el vehículo), VIN, matrícula
- **Datos del punto de carga** — EVSE-ID, tipo de conector, versión de firmware
- **CDR** — Registro detallado de carga conforme a OCPI (descargable)

## Análisis

El panel de análisis ofrece información general de la flota:

### Consumo de energía
- kWh totales por día/semana/mes
- Desglose por vehículo o grupo de vehículos
- Comparación entre períodos de tiempo
- Tendencias en costos por kWh

### Indicadores de eficiencia
- Energía media por sesión
- Costos medios por kWh
- Ocupación (tiempo de carga versus tiempo de inactividad por vehículo)
- Patrones de demanda pico

### Análisis de ubicaciones
- Ubicaciones más utilizadas por su flota
- Tiempo medio de espera para un punto de carga libre
- Precios de energía por ubicación

## Notificaciones

Configure notificaciones para:

- **Sesiones fallidas** — Una sesión que se inició pero terminó de manera anormal
- **Sesiones largas** — Un vehículo que carga durante más tiempo del establecido
- **Altos costos** — Una sesión que supera un umbral de costo
- **Límite de SoC** — El nivel de carga de un vehículo está por debajo de un mínimo antes de llegar a un punto de carga

Las notificaciones se envían por correo electrónico y/o se muestran en el panel de Mijn Vloot.

## Exportación e integración

### Exportación CSV
Descargue cualquier vista filtrada como archivo CSV. Las columnas contienen todos los detalles de la sesión, así como campos calculados como costos por kWh y duración.

### API
Obtenga datos de sesión de forma programática:

```
GET /api/v1/sessions?start_date=2026-03-01&end_date=2026-03-31
GET /api/v1/sessions/{session_id}
GET /api/v1/sessions/active
```

### Webhooks
Reciba notificaciones en tiempo real cuando las sesiones comienzan, se actualizan o terminan:

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

Configure webhooks a través de **Configuración** → **API** → **Webhooks**.

## Comprender la curva de potencia

Una sesión de carga típica de DC para un camión eléctrico muestra el siguiente patrón:

1. **Inicio** (0–3 min) — La potencia aumenta mientras el punto de carga y el vehículo negocian y se precalienta la batería
2. **Meseta** (3 min – 60%+ SoC) — Potencia máxima, a menudo 150–350 kW dependiendo del modelo del camión
3. **Disminución** (60%+ SoC – SoC objetivo) — La potencia disminuye gradualmente a medida que la batería se llena, para proteger la salud de las células
4. **Finalización** — La sesión termina en el SoC objetivo o cuando se detiene manualmente

Comprender esta curva ayuda con la planificación: si solo necesita cargar del 20% al 80% de SoC, recibirá la mayor parte de la energía durante la fase rápida de la meseta. Cargar del 80–100% lleva mucho más tiempo.