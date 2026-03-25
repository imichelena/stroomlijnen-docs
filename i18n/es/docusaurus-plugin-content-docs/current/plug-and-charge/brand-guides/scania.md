---
sidebar_position: 4
title: Scania BEV — Configuración de Plug & Charge
description: Guía paso a paso para habilitar Plug & Charge en los camiones eléctricos Scania R-serie y P-serie a través de Scania Fleet Management.
keywords: [Scania, BEV, R-series, P-series, Scania Fleet Management, Plug and Charge, ISO 15118]
---

# Scania BEV — Configuración de Plug & Charge

Los camiones eléctricos de batería de Scania (R-serie y P-serie BEV) admiten ISO 15118-2 Plug & Charge con la versión de firmware 2025.3 o superior. PnC se administra a través del portal de Scania Fleet Management.

## Modelos Admitidos

| Modelo | Opciones de batería | Carga DC máxima | Listo para PnC |
|-------|-----------|---------------|:---------:|
| R-serie BEV | Hasta 624 kWh | 375 kW (CCS) | ✅ (fw 2025.3+) |
| P-serie BEV | Hasta 416 kWh | 250 kW (CCS) | ✅ (fw 2025.3+) |

## Requisitos

- Cuenta de Scania Fleet Management con acceso de administrador
- Versión de firmware del camión 2025.3 o superior
- Cuenta de flota de Stroomlijnen con PnC habilitado ([Guía de instalación](../setup-guide))

## Paso a Paso: Scania Fleet Management

### 1. Verificar Firmware

1. Inicie sesión en [My Scania](https://my.scania.com) (Scania Fleet Management)
2. Seleccione su vehículo → **Información del vehículo** → **Versión de software**
3. Confirme la versión 2025.3 o superior
4. Si es inferior, planifique una visita al concesionario o verifique las actualizaciones OTA disponibles en **Mantenimiento** → **Actualizaciones de software**

### 2. Habilitar Servicios de Electrificación

1. Vaya a Scania Fleet Management a **Servicios** → **Electrificación**
2. Si esta sección no es visible, es posible que su suscripción necesite la opción de electrificación — póngase en contacto con su concesionario Scania
3. Haga clic en **Administración de socios de carga**

### 3. Agregar Stroomlijnen

1. Haga clic en **Agregar socio**
2. Busque **"Stroomlijnen B.V."** o ingrese el ID eMSP `NL-STM`
3. Haga clic en **Conectar**
4. Revise y acepte el acuerdo de intercambio de datos (identificación del vehículo para vinculación de certificado)
5. Haga clic en **Confirmar**

### 4. Asignar Vehículos

1. Después de conectar Stroomlijnen, haga clic en **Administrar vehículos**
2. Seleccione los camiones para los que se debe habilitar PnC
3. Haga clic en **Aplicar**

### 5. Instalación del Certificado

- La puerta de enlace telemática de Scania envía el certificado de contrato al vehículo
- El camión debe estar en línea (contacto encendido o conectado a un cargador)
- **Tiempo de instalación típico: 4–12 horas**
- Siga el progreso en Scania Fleet Management → Electrificación → Estado del certificado

### 6. Verificar

1. Verifique el estado tanto en Scania Fleet Management como en Stroomlijnen Mi Flota
2. Conecte a un cargador de Stroomlijnen para probar
3. La autenticación automática debe completarse dentro de los 5–10 segundos

## Notas Importantes

### SIM Telemático
Los camiones Scania tienen un módulo telemático separado con su propia conexión móvil (independiente del sistema de infoentretenimiento). Asegúrese de que la suscripción al SIM telemático esté activa — la entrega del certificado depende de esta conexión, no de la WiFi del camión.

### Actualizaciones de Firmware
Scania implementa actualizaciones de firmware relacionadas con PnC de forma gradual por región. Si su camión tiene firmware 2025.2 o anterior, es posible que la actualización de PnC no esté disponible a través de OTA. Su concesionario puede instalarla manualmente.

### Varias Flotas
Si sus camiones están registrados en varias cuentas de Scania Fleet Management (por ejemplo, después de adquisiciones), cada cuenta debe autorizar a Stroomlijnen por separado.

## Solución de Problemas

| Problema | Solución |
|---------|----------|
| "Electrificación" no está en el menú | La suscripción puede necesitar una actualización — póngase en contacto con su concesionario Scania |
| Certificado atascado en "En proceso" | Verifique que el camión esté en línea, el SIM telemático esté activo, firmware ≥ 2025.3 |
| PnC falla en el cargador | Reinicie el camión (ciclo de contacto completo), intente nuevamente. Verifique el estado del certificado. |
| "Socio no encontrado" al buscar | Asegúrese de buscar con el nombre o código correcto (NL-STM) |

---

**Siguiente:** [Configuración de MAN →](./man)