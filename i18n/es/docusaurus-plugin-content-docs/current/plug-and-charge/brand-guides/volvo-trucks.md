---
sidebar_position: 1
title: Volvo Trucks — Configuración de Plug & Charge
description: Guía paso a paso para habilitar Plug & Charge en los camiones eléctricos Volvo FH, FM, FE y FL mediante Volvo Connect.
keywords: [Volvo, FH Eléctrico, FM Eléctrico, Volvo Connect, Plug and Charge, ISO 15118, carga de flota]
---

# Volvo Trucks — Configuración de Plug & Charge

Volvo fue uno de los primeros fabricantes de camiones que respaldó completamente el estándar ISO 15118-2 Plug & Charge. Todos los modelos eléctricos actuales de Volvo (FH, FM, FE, FL) admiten PnC con firmware v3.2 o superior.

## Modelos compatibles

| Modelo | Opciones de batería | Carga DC máxima | Listo para PnC |
|-------|-----------|---------------|:---------:|
| FH Eléctrico | 540 kWh | 250 kW (CCS) | ✅ |
| FM Eléctrico | 540 kWh | 250 kW (CCS) | ✅ |
| FE Eléctrico | 265 kWh | 150 kW (CCS) | ✅ |
| FL Eléctrico | 265 kWh | 150 kW (CCS) | ✅ |

## Requisitos

- Cuenta de administración de flota Volvo Connect con acceso de administrador
- Firmware del camión v3.2 o superior (verifique en Volvo Connect → Vehículo → Software)
- Cuenta de flota Stroomlijnen con PnC habilitado ([Guía de instalación](../setup-guide))

## Paso a paso: Volvo Connect

### 1. Verificar la versión del firmware

1. Inicie sesión en [Volvo Connect](https://connect.volvotrucks.com)
2. Seleccione su vehículo de la lista de flota
3. Vaya a **Detalles del vehículo** → **Software**
4. Verifique que la versión del firmware sea **3.2 o superior**
5. Si no es así, comuníquese con su concesionario Volvo para obtener una actualización

### 2. Habilitar servicios de carga

1. En Volvo Connect, vaya a **Servicios** → **Servicios de carga**
2. Si esta sección no es visible, solicite a su administrador de Volvo Connect que active el **módulo eMobility** para su cuenta
3. Haga clic en **Administrar socios de carga**

### 3. Autorizar Stroomlijnen

1. Busque en la lista de socios de carga **"Stroomlijnen B.V."**
   - Si no está enumerado, haga clic en **Agregar socio** y busque "Stroomlijnen" o utilice el código de socio `NL-STM`
2. Haga clic en **Autorizar**
3. Revise las autorizaciones:
   - ✅ Instalación de certificado — Requerido para PnC
   - ✅ Identificación del vehículo — Requerido para la vinculación del certificado
   - ❌ Datos de ubicación — No requeridos, puede denegarlos
4. Haga clic en **Confirmar autorización**

### 4. Seleccionar vehículos

1. Después de la autorización, verá una pantalla para seleccionar vehículos
2. Marque las casillas para todos los camiones que deben utilizar Stroomlijnen PnC
3. Haga clic en **Aplicar**

### 5. Instalación del certificado

Después de la autorización, el backend de Stroomlijnen enviará una solicitud de instalación de certificado:

1. La solicitud aparecerá en Volvo Connect → **Notificaciones** (generalmente dentro de los 30 minutos)
2. El sistema de Volvo push el certificado de contrato al camión
3. El camión debe estar **en línea** para recibirlo (contacto encendido o conectado a un cargador CA)
4. La instalación generalmente se completa dentro de **1-2 horas**

Puede seguir el progreso en:
- **Volvo Connect** → Vehículo → Servicios de carga → Estado del certificado
- **Stroomlijnen Mi flota** → Vehículo → pestaña Plug & Charge

### 6. Verificar la instalación

Una vez que el estado muestre "Activo" en ambos portales:

1. Conduzca hasta un cargador Stroomlijnen
2. Conecte el cable CCS
3. El cargador debería mostrar "Plug & Charge — Autenticado" dentro de los 5-10 segundos
4. La carga comenzará automáticamente

## Procedimiento de actualización de firmware

Si su camión tiene un firmware inferior a v3.2:

1. **Comuníquese con su concesionario Volvo** para obtener una actualización de firmware
2. Las actualizaciones se pueden realizar en el concesionario (~2 horas)
3. Algunas actualizaciones están disponibles como **OTA (Over-The-Air)** — verifique Volvo Connect → Vehículo → Actualizaciones de software
4. Regrese al paso 2 después de la actualización

:::caution
No intente actualizar el firmware del camión por su cuenta. Las actualizaciones de firmware deben realizarse mediante un concesionario Volvo autorizado o a través del canal oficial OTA.
:::

## Solución de problemas

### "Servicios de carga" no visible en Volvo Connect
Es posible que su suscripción a Volvo Connect no incluya el módulo eMobility. Comuníquese con su concesionario Volvo o soporte de Volvo Connect para activarlo.

### Certificado muestra más de 24 horas "En proceso"
1. Verifique que el camión haya estado en línea (contacto encendido) durante al menos 30 minutos después de la solicitud
2. Revise Volvo Connect para cualquier solicitud de autorización pendiente
3. Comuníquese con soporte de Stroomlijnen — podemos volver a activar la solicitud del certificado

### PnC falla pero el certificado muestra "Activo"
1. Verifique la pantalla del cargador en busca de códigos de error específicos
2. Intente usar un cable CCS diferente (si hay varios disponibles)
3. Apague y encienda el contacto del camión, espere 30 segundos y vuelva a conectar
4. Consulte la [Guía general de solución de problemas](../troubleshooting)

### Varios cuentas de Volvo
Si su flota se administra a través de varias cuentas de Volvo Connect (por ejemplo, diferentes filiales), cada cuenta debe autorizar Stroomlijnen por separado. Comuníquese con su administrador de cuenta de Stroomlijnen para la configuración de varias cuentas.

---

**Siguiente:** [Configuración de DAF →](./daf)