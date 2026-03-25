---
sidebar_position: 6
title: Otras marcas de camiones — Carga y Conectar
description: Estado de Plug & Charge e información de instalación para Scania, MAN, Renault Trucks, Ford Trucks, IVECO y VW Vehículos Comerciales.
keywords: [Scania, MAN, Renault Trucks, IVECO, Carga y Conectar, ISO 15118, camión eléctrico]
---

# Otras marcas de camiones — Carga y Conectar

Esta página trata la instalación de PnC para marcas de camiones que aún no tienen su propia guía detallada. A medida que crece la adopción, dividiremos esta información en guías separadas.

## Scania BEV

**Modelos:** R-serie BEV, P-serie BEV
**Estado de PnC:** ✅ Soportado (firmware 2025.3+)
**Portal de flota:** Scania Fleet Management

### Pasos de instalación

1. Inicie sesión en [Scania Fleet Management](https://my.scania.com)
2. Vaya a **Electrificación** → **Servicios de carga**
3. Haga clic en **Agregar partner de carga** → busque "Stroomlijnen"
4. Autorice y seleccione vehículos
5. Scania envía certificados a través de su puerta de enlace telemática
6. **Tiempo de instalación típico: 4–12 horas**

### Notas
- Scania requiere la versión de firmware 2025.3 o superior para el soporte completo de PnC
- Las versiones de firmware anteriores admiten la comunicación ISO 15118, pero no el procesamiento de certificados de contrato
- Comuníquese con su concesionario Scania para obtener actualizaciones de firmware — las actualizaciones OTA para PnC se implementan gradualmente
- El sistema telemático de Scania utiliza una conexión móvil separada del sistema de infoentretenimiento del vehículo — asegúrese de que la SIM telemática esté activa

## MAN Eléctrico

**Modelos:** eTGX, eTGS, eTGL, eTGM
**Estado de PnC:** ✅ Soportado en eTGX/eTGS | ⚠️ En implementación en eTGL/eTGM
**Portal de flota:** Plataforma RIO

### Pasos de instalación

1. Inicie sesión en [RIO](https://rio.cloud)
2. Navegue a **Servicios** → **Administración de carga**
3. Haga clic en **Conectar partner** bajo **Partners de carga externos**
4. Busque **"Stroomlijnen B.V."** y haga clic en **Autorizar**
5. Seleccione vehículos y confirme
6. **Tiempo de instalación típico: 6–24 horas**

### Notas
- La plataforma RIO es compartida por MAN y otras marcas TRATON
- eTGX y eTGS tienen soporte completo de PnC desde finales de 2025
- eTGL y eTGM recibirán soporte de PnC a través de actualizaciones de firmware faseadas durante 2026
- Los certificados de MAN utilizan un módulo de seguridad de hardware (HSM) en el vehículo — esto proporciona una excelente seguridad, pero significa que los certificados solo se pueden instalar cuando el módulo de seguridad del camión está en "modo de aprovisionamiento" (primeras 30 minutos después de conectar)

## Renault Trucks E-Tech

**Modelos:** E-Tech T, E-Tech D, E-Tech Master (furgoneta)
**Estado de PnC:** ⚠️ Llegará en el primer semestre de 2026
**Portal de flota:** Administración de flota de Renault Trucks

### Estado actual
- El hardware ISO 15118-2 está presente en E-Tech T y E-Tech D
- La activación del software PnC se espera a través de una actualización OTA en el primer semestre de 2026
- Renault Trucks lleva a cabo pruebas de interoperabilidad de PnC con Hubject desde el tercer trimestre de 2025
- La furgoneta E-Tech Master no tiene soporte para ISO 15118

### Qué hacer ahora
1. Asegúrese de que su cuenta del portal de flota esté configurada con acceso de administrador
2. Registre sus vehículos en el portal Mijn Vloot de Stroomlijnen
3. Utilice tarjetas RFID para cargar mientras tanto
4. Le informaremos cuando PnC esté disponible para Renault Trucks

## Ford Trucks

**Modelos:** F-MAX Eléctrico
**Estado de PnC:** ❌ No soportado

### Estado actual
- La Ford F-MAX Eléctrica (producida por Ford Otosan en Turquía) no admite actualmente ISO 15118
- Ford Otosan ha anunciado el soporte para ISO 15118 en su hoja de ruta para el año modelo 2027
- Utilice tarjetas RFID o la aplicación Stroomlijnen para cargar

## IVECO

**Modelos:** S-eWay
**Estado de PnC:** ⚠️ Anunciado para modelos 2026

### Estado actual
- IVECO ha anunciado el soporte para ISO 15118-2 PnC en camiones S-eWay del año modelo 2026
- Los modelos anteriores a 2026 no tienen el hardware ISO 15118 necesario
- No hay disponible una actualización — PnC requiere módulos de comunicación instalados en fábrica
- Utilice tarjetas RFID para los camiones S-eWay actuales

## VW Vehículos Comerciales

**Modelos:** ID. Buzz Cargo
**Estado de PnC:** ⚠️ Soporte limitado

### Estado actual
- La ID. Buzz Cargo admite ISO 15118-2, pero PnC se gestiona a través del ecosistema VW We Charge
- El PnC entre proveedores (usar certificados Stroomlijnen con vehículos VW) es técnicamente posible, pero requiere configuración adicional
- Comuníquese con el soporte de Stroomlijnen para obtener configuración específica de VW

---

:::info ¿No encuentra su marca?
Comuníquese con nosotros a través de [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl). Estamos expandiendo activamente el soporte de PnC a medida que más fabricantes de equipo original (OEM) habilitan ISO 15118.
:::

**Siguiente:** [Solución de problemas →](../troubleshooting)