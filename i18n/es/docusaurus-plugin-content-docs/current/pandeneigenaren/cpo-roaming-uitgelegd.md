---
sidebar_position: 10
title: CPO, eMSP y roaming explicados
description: ¿Qué son CPO y eMSP, cómo funciona el roaming entre redes de carga, y qué protocolos se utilizan?
keywords: [CPO, eMSP, roaming, OCPI, OCPP, red de carga, interoperabilidad, tarjeta de carga]
---

# CPO, eMSP y roaming explicados

El mundo de la carga eléctrica tiene su propio lenguaje. Esta página explica los conceptos y roles más importantes.

## Los dos roles en el ecosistema de carga

### CPO — Operador de Punto de Carga

Un **CPO** gestiona la infraestructura de carga física. El CPO es responsable de:

- Instalación y mantenimiento de puntos de carga
- Comunicación entre punto de carga y backoffice (via OCPP)
- Autorización de sesiones de carga
- Medición y facturación de energía suministrada
- Servicio de atención de averías y monitoreo

Un CPO opera puntos de carga en una o más ubicaciones. Como propietario de un local, usted tiene un contrato con un CPO.

---

### eMSP — Proveedor de Servicios de Movilidad Eléctrica

Un **eMSP** ofrece servicios al usuario final (conductor/administrador de flota):

- Emisión de tarjetas de carga (RFID) o aplicaciones
- Acceso a puntos de carga de diferentes CPO a través de roaming
- Facturación mensual por todas las sesiones de carga
- Servicio de atención al cliente

Un administrador de flota tiene un contrato con un eMSP. Sus conductores pueden cargar en todos los puntos de carga conectados a través de roaming.

:::nota Una empresa puede tener ambos roles
Algunos proveedores son tanto CPO como eMSP. Esto significa que gestionan puntos de carga y emiten tarjetas de carga. Ejemplos: Vattenfall, Shell Recharge, Allego, Eneco.
:::

---

## OCPP — el protocolo entre punto de carga y backoffice

**OCPP (Open Charge Point Protocol)** es el estándar abierto internacional para la comunicación entre un punto de carga y el sistema de gestión (backoffice) del CPO.

| Versión | Estado | Características |
|---|---|---|
| OCPP 1.6 | Ampliamente utilizado, instalaciones más antiguas | Funcionalidad básica |
| OCPP 2.0.1 | Estándar actual | Carga inteligente, V2G, mayor seguridad |
| OCPP 2.1 | En desarrollo | MCS, V2G extendido |

**Por qué OCPP es importante para los propietarios de locales:** Un punto de carga que admite OCPP no está vinculado a un solo CPO. Usted puede cambiar de CPO sin reemplazar el hardware.

---

## OCPI — el protocolo para roaming

**OCPI (Open Charge Point Interface)** es el protocolo mediante el cual los CPO y eMSP se comunican entre sí. Permite el roaming: un conductor con una tarjeta de eMSP A puede cargar en un punto de carga de CPO B, y ambas partes liquidan la sesión automáticamente.

```
Conductor (tarjeta de eMSP A)
        ↓
Punto de carga (CPO B)
        ↓ Conexión OCPI
Backoffice CPO B → Backoffice eMSP A
        ↓
Factura al administrador de flota
```

Cuanto más CPO y eMSP estén conectados a través de OCPI, mayor será la red a la que un conductor tenga acceso.

---

## Roaming en la práctica

En los Países Bajos, la mayoría de los grandes CPO están conectados a través de centros de roaming. Los centros más grandes son:

| Centro | Rol |
|---|---|
| **Gireve** | Centro de roaming europeo, muchas redes importantes |
| **Hubject** | Roaming Plug & Charge (ISO 15118) |
| **e-Laad** | Operadores de red holandeses (Nuon, Stedin, etc.) |

Una tarjeta de carga de un eMSP holandés funciona generalmente en más de 300.000 puntos de carga en Europa a través de estos centros.

---

## ¿Qué significa esto para usted como propietario de un local?

Si usted hace que un CPO instale un punto de carga conectado a redes de roaming, **todos los conductores con una tarjeta de carga válida** pueden cargar en su punto — no solo clientes de ese CPO.

**Pregunte al seleccionar un CPO:**
- "¿A través de qué redes de roaming están disponibles sus puntos de carga?"
- "¿Funcionan las tarjetas de carga de Vattenfall, Shell Recharge y Allego en sus puntos?"

---

## Recursos relevantes

| Organización | Enlace |
|---|---|
| Open Charge Alliance (OCPP/OCPI) | [openchargealliance.org](https://openchargealliance.org) |
| ElaadNL (estándares técnicos NL) | [elaadnl.nl](https://elaadnl.nl) |
| Gireve (centro de roaming) | [gireve.com](https://gireve.com) |
| Hubject (Plug & Charge) | [hubject.com](https://hubject.com) |
| NAL (Agenda Nacional de Infraestructura de Carga) | [agendalaadinfrastructuur.nl](https://agendalaadinfrastructuur.nl) |