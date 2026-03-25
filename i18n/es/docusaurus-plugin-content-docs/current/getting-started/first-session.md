---
sidebar_position: 2
title: Su Primera Sesión de Carga
description: Guía paso a paso para su primera sesión de carga para camiones eléctricos en un lugar de Stroomlijnen.
keywords: [primera sesión de carga, cómo cargar, camión eléctrico, RFID, Plug and Charge]
---

# Su Primera Sesión de Carga

Ya sea que sea un administrador de flota que configura todo o un conductor que se encuentra por primera vez en el cargador — aquí encontrará exactamente lo que sucede.

## Antes de Llegar

### Como Administrador de Flota

1. **Regístrese** en el portal de Stroomlijnen en [portal.stroomlijnen.nl](https://portal.stroomlijnen.nl)
2. **Agregue sus vehículos** — números de identificación del vehículo (VIN) y matrículas
3. **Elija su método de autenticación:**
   - **Tarjetas RFID** — se las enviaremos (consulte [Tarjetas RFID](/docs/getting-started/rfid-cards))
   - **Plug & Charge** — configure en el portal (consulte [Guía de instalación](/docs/plug-and-charge/setup-guide))
4. **Informar a sus conductores** — comparta la dirección del lugar y cualquier código de acceso

### Como Conductor

- Asegúrese de tener su **tarjeta RFID** consigo (o que su camión tenga soporte para Plug & Charge)
- Conozca la **dirección del lugar** y cualquier código de acceso para las barreras
- Verifique el **nivel actual de la batería** de su camión — planifique el tiempo de carga necesario

## En el Punto de Carga

### Paso 1: Estacionar y Conectar

1. Conduzca hasta un punto de carga disponible
2. Apague el vehículo (algunos camiones lo requieren; otros no — consulte el manual del fabricante)
3. Abra la puerta de carga
4. Conecte el cable de carga:
   - **CCS2** (Sistema de Carga Combinada) — el estándar europeo para la carga rápida en corriente continua
   - El enchufe solo se ajusta de una manera. No fuerce.

### Paso 2: Autenticar

**Con tarjeta RFID:**
1. Mantenga su tarjeta frente al lector de tarjetas del punto de carga
2. Espere a que la luz LED verde se encienda y/o la confirmación en la pantalla
3. La carga comenzará automáticamente

**Con Plug & Charge:**
1. Conecte el cable. Eso es todo.
2. El camión y el punto de carga intercambian certificados a través de ISO 15118
3. La carga comenzará dentro de 5-10 segundos

**Con aplicación de carga (roaming):**
1. Abra la aplicación de su eMSP
2. Escanee el código QR en el punto de carga o ingrese el ID del punto de carga
3. Inicie la sesión en la aplicación

### Paso 3: Monitorear

- La pantalla del punto de carga muestra la potencia (kW) y la energía entregada (kWh) en tiempo real
- También puede monitorear a través del portal de Stroomlijnen o su aplicación de administración de flota
- La mayoría de los camiones eléctricos se cargan desde el 20% hasta el 80% en 60-90 minutos en nuestros puntos de carga en corriente continua

### Paso 4: Desconectar

1. Detenga la sesión:
   - **RFID:** toque la tarjeta nuevamente
   - **Plug & Charge:** simplemente desconecte (la sesión terminará automáticamente)
   - **Aplicación:** detenga en la aplicación, luego desconecte
2. Coloque el cable de nuevo en su soporte
3. Cierre la puerta de carga
4. ¡Listo para conducir!

## ¿Qué Hacer si Algo Sale Mal?

| Problema | Qué hacer |
|-------|-----------|
| Tarjeta no reconocida | Verifique si la tarjeta está activada en el portal. Intente mantener la tarjeta más cerca / durante más tiempo frente al lector. |
| Plug & Charge no comienza | Verifique el estado de PnC de su camión en el portal del fabricante. Consulte [Solución de problemas](/docs/plug-and-charge/troubleshooting). |
| Punto de carga muestra mensaje de error | Anote el código de error y contáctenos. Consulte [Preguntas frecuentes](/docs/faq). |
| Carga más lenta de lo esperado | La temperatura de la batería, el nivel de carga (SoC) y la capacidad de la red afectan todas la velocidad de carga. Por encima del 80% SoC, la carga se ralentiza significativamente. |
| Cable no se puede desconectar | El cable se bloquea durante la carga. Asegúrese de que la sesión esté completamente detenida antes de tirar. |

## Velocidades de Carga Esperadas

Los camiones eléctricos tienen diferentes capacidades de carga:

| Nivel de potencia | Uso típico | Tiempo para 200 kWh |
|-------------|------------|-------------------|
| 50 kW DC | Carga nocturna / en el depósito | ~4 horas |
| 150 kW DC | Carga ocasional | ~1,5 horas |
| 350 kW DC | Tiempo de ciclo rápido | ~40 minutos |

:::note
La velocidad de carga real depende del cargador de a bordo del vehículo, la temperatura de la batería, el nivel de carga y la potencia disponible del punto de carga. El punto de carga proporciona la potencia máxima que solicita el vehículo, hasta la potencia nominal del punto de carga.
:::

## Pasos Siguientes

- [Configure Plug & Charge](/docs/plug-and-charge/setup-guide) para futuras sesiones sin problemas
- [Entienda sus facturas](/docs/fleet-management/invoicing)
- [Agregue más conductores](/docs/fleet-management/driver-management)