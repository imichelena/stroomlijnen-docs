---
sidebar_position: 3
title: Vehículos Compatibles
description: ¿Qué camiones eléctricos, furgonetas y coches compatibles con Plug & Charge funcionan en las estaciones de carga de Stroomlijnen.
keywords: [vehículos compatibles, Plug and Charge, camiones eléctricos, ISO 15118, Volvo, DAF, Mercedes, Scania, MAN]
---

# Vehículos Compatibles

La compatibilidad con Plug & Charge depende del soporte del vehículo para **ISO 15118-2** con procesamiento de certificados de contrato. A continuación, se muestra el estado actual de los vehículos más comunes en las ubicaciones de Stroomlijnen.

:::info Actualizado marzo 2026
La compatibilidad evoluciona rápidamente. Estamos actualizando esta página a medida que los fabricantes de equipos originales (OEM) lanzan nuevos firmware y modelos. Si su vehículo no está incluido, [contáctenos](mailto:info@stroomlijnen.nl).
:::

## Camiones Eléctricos

| Fabricante | Modelo | Soporte PnC | Notas |
|-------------|-------|:-----------:|-------|
| **Volvo** | FH Electric | ✅ | A través de Volvo Connect. Soporte completo PnC desde firmware v3.2+ |
| **Volvo** | FM Electric | ✅ | A través de Volvo Connect. Misma plataforma que FH Electric |
| **Volvo** | FE Electric | ✅ | A través de Volvo Connect |
| **Volvo** | FL Electric | ✅ | A través de Volvo Connect |
| **DAF** | XF Electric | ✅ | A través de DAF Connect. Requiere activación por parte del administrador de la flota |
| **DAF** | XD Electric | ✅ | A través de DAF Connect |
| **DAF** | XB Electric | ✅ | A través de DAF Connect |
| **Mercedes-Benz** | eActros 600 | ✅ | A través de Fleetboard. PnC disponible desde Q4 2025 |
| **Mercedes-Benz** | eActros 300 | ✅ | A través de Fleetboard |
| **Mercedes-Benz** | eEconic | ⚠️ | PnC a través de actualización OTA esperada para Q2 2026 |
| **Scania** | BEV R-serie | ✅ | A través de Scania Fleet Management. Firmware 2025.3+ |
| **Scania** | BEV P-serie | ✅ | A través de Scania Fleet Management |
| **MAN** | eTGX | ✅ | A través de la plataforma RIO. Soporte completo PnC desde finales de 2025 |
| **MAN** | eTGS | ✅ | A través de la plataforma RIO |
| **MAN** | eTGL/eTGM | ⚠️ | Implementación de PnC en curso, consulte al concesionario |
| **Renault Trucks** | E-Tech T | ⚠️ | Hardware ISO 15118-2 presente, activación PnC a través de OTA esperada para H1 2026 |
| **Renault Trucks** | E-Tech D | ⚠️ | Misma situación que E-Tech T |
| **Ford Trucks** | F-MAX Electric | ❌ | No soporta ISO 15118. Solo RFID/aplicación |
| **IVECO** | S-eWay | ⚠️ | PnC anunciado para modelos de 2026 |

### Leyenda

- ✅ **Soportado** — PnC funciona hoy en día en los cargadores de Stroomlijnen
- ⚠️ **Próximamente** — Hardware adecuado, actualización de software en espera
- ❌ **No soportado** — Utilice una tarjeta RFID o la aplicación

## Furgonetas Eléctricas

| Fabricante | Modelo | Soporte PnC | Notas |
|-------------|-------|:-----------:|-------|
| **Mercedes-Benz** | eSprinter | ✅ | ISO 15118-2 desde el año del modelo 2025 |
| **Mercedes-Benz** | eVito | ✅ | ISO 15118-2 desde el año del modelo 2025 |
| **Volvo** | EM90 | ✅ | A través de Volvo Connect |
| **Ford** | E-Transit | ⚠️ | Hardware adecuado, activación PnC varía según el mercado |
| **MAN** | eTGE | ⚠️ | Soporte limitado para PnC, consulte al concesionario |
| **Renault** | Master E-Tech | ❌ | Solo RFID/aplicación |
| **VW** | ID. Buzz Cargo | ⚠️ | PnC a través de la plataforma de VW, requiere contrato Volkswagen We Charge |
| **Fiat** | E-Ducato | ❌ | No soporta ISO 15118 |
| **Maxus** | eDeliver 7 | ❌ | No soporta ISO 15118 |

## Coches (CCS DC)

Aunque los cargadores de Stroomlijnen están diseñados para vehículos comerciales, los coches con enchufes CCS también pueden cargar en nuestras estaciones. Soporte PnC:

| Fabricante | Soporte PnC | Notas |
|-------------|:-----------:|-------|
| **BMW** | ✅ | i4, iX, i5, i7 — a través de BMW Charging |
| **Mercedes-Benz** | ✅ | EQS, EQE, EQA, EQB — a través de Mercedes me Charge |
| **Porsche** | ✅ | Taycan, Macan Electric — a través de Porsche Charging Service |
| **Audi** | ✅ | e-tron GT, Q6 e-tron, Q8 e-tron — a través de myAudi |
| **VW** | ⚠️ | ID.-serie — a través de Volkswagen We Charge, implementación en curso |
| **Hyundai/Kia** | ⚠️ | Ioniq 5/6, EV6/9 — PnC varía según el mercado y firmware |
| **Tesla** | ❌ | Utiliza su propio sistema Supercharger PnC, no soporta CCS PnC |
| **Marcas Stellantis** | ❌ | No soportan ISO 15118 PnC en los modelos actuales |

:::tip
Incluso sin PnC, todos los vehículos con un enchufe **CCS Combo 2** pueden cargar en las ubicaciones de Stroomlijnen a través de una tarjeta RFID o la aplicación de Stroomlijnen. PnC elimina simplemente la necesidad de autenticación manual.
:::

## Verificar su Vehículo

1. **Verifique el portal del fabricante** — Volvo Connect, DAF Connect, Fleetboard, RIO o Scania Fleet Management muestra "Plug & Charge" o configuraciones de "ISO 15118"
2. **Verifique la versión del firmware** — Asegúrese de que su vehículo tenga el firmware más reciente (consulte las [guías específicas de la marca](./brand-guides/volvo-trucks))
3. **Contáctese con su concesionario** — Pueden confirmar la posibilidad de ISO 15118 e instalar certificados si es necesario
4. **Contáctenos en Stroomlijnen** — Podemos verificar la compatibilidad cuando se registre en nuestro portal

## ¿No se menciona su Vehículo?

Si su camión o furgoneta no está incluido, aún puede funcionar. Se lanzan nuevos modelos y actualizaciones de firmware regularmente. Contáctenos a través de [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl) con la marca, modelo y número de identificación del vehículo (VIN), y lo investigaremos.

---

**Siguiente:** [Guía de instalación →](./setup-guide)