---
sidebar_position: 5
title: MAN Eléctrico — Configuración de Plug & Charge
description: Guía paso a paso para habilitar Plug & Charge en los camiones eléctricos MAN eTGX y eTGS a través de la plataforma RIO.
keywords: [MAN, eTGX, eTGS, RIO, Plug and Charge, ISO 15118, TRATON]
---

# MAN Eléctrico — Configuración de Plug & Charge

La gama de camiones eléctricos de MAN (parte del grupo TRATON junto con Scania) admite ISO 15118-2 Plug & Charge en los modelos eTGX y eTGS. Los modelos eTGL y eTGM recibirán soporte para PnC a través de una actualización de firmware faseada durante 2026. La configuración se gestiona a través de la plataforma RIO.

## Modelos Admitidos

| Modelo | Opciones de batería | Carga DC máxima | Listo para PnC |
|-------|-----------|---------------|:---------:|
| eTGX | Hasta 480 kWh | 375 kW (CCS) | ✅ |
| eTGS | Hasta 400 kWh | 250 kW (CCS) | ✅ |
| eTGL | Hasta 265 kWh | 150 kW (CCS) | ⚠️ En implementación |
| eTGM | Hasta 265 kWh | 150 kW (CCS) | ⚠️ En implementación |

## Requisitos

- Cuenta de plataforma RIO con acceso de administrador de flota
- eTGX/eTGS con firmware más reciente (finales de 2025+)
- Cuenta de flota Stroomlijnen con PnC habilitado ([Guía de instalación](../setup-guide))

## Paso a Paso: Plataforma RIO

### 1. Acceso a Gestión de Carga

1. Inicie sesión en [RIO](https://rio.cloud)
2. Navegue a **Servicios** → **Gestión de Carga**
3. Si no ve la gestión de carga, es posible que deba activarla — vaya a **Marketplace** → busque "Gestión de Carga" → **Activar**

### 2. Conectar Stroomlijnen

1. En la gestión de carga, vaya a **Socios de Carga**
2. Haga clic en **Conectar nuevo socio**
3. Busque "**Stroomlijnen B.V.**" (o use el ID eMSP `NL-STM`)
4. Haga clic en **Conectar y Autorizar**
5. Acepte los términos

### 3. Seleccionar Vehículos

1. Después de conectar, la página del socio mostrará sus vehículos elegibles
2. Marque las casillas para los camiones que requieren PnC habilitado
3. Haga clic en **Guardar selección**

### 4. Esperar Instalación de Certificado

- RIO activa la provisión de certificados a través del sistema telemático de MAN
- El camión debe estar en línea con el contacto encendido
- **Importante:** MAN utiliza un módulo de seguridad de hardware (HSM) para el almacenamiento de certificados. El HSM entra en "modo de provisión" durante los primeros 30 minutos después de encender el contacto. Si el camión está estacionado con el contacto encendido durante más de 30 minutos sin recibir el certificado, apague y vuelva a encender el contacto para reactivar el modo de provisión.
- **Tiempo de instalación típico: 6–24 horas**

### 5. Verificar

Verifique el estado del certificado en RIO y Stroomlijnen Mi Flota. Pruebe en un cargador Stroomlijnen.

## Modo de Provisión HSM — Importante

La arquitectura de seguridad de MAN utiliza un módulo de seguridad de hardware con una ventana de provisión específica:

1. Cuando se enciende el contacto del camión, el HSM entra en modo de provisión durante 30 minutos
2. Durante esta ventana, se pueden instalar nuevos certificados
3. Después de 30 minutos, el HSM se bloquea para evitar cambios no autorizados de certificado
4. Para volver a abrir la ventana: apague el contacto, espere 10 segundos y vuelva a encender

**Qué significa esto en la práctica:** Si habilita PnC en el portal RIO mientras el camión está en una carrera, el certificado se coloca en cola y se instala la próxima vez que el camión arranque (dentro de la primera ventana de 30 minutos).

## Integración del Grupo TRATON

MAN y Scania son parte del grupo TRATON y comparten alguna infraestructura de backend. Sin embargo:

- Cada marca tiene su propio portal de flota (RIO para MAN, My Scania para Scania)
- PnC debe configurarse por separado en cada portal
- Los certificados son específicos de la marca y no se pueden transferir

## Solución de Problemas

| Problema | Solución |
|---------|----------|
| "Gestión de Carga" no visible en RIO | Activearlo desde el Marketplace de RIO |
| Certificado en proceso > 24 horas | Realice un ciclo de contacto para reactivar el modo de provisión HSM |
| eTGL/eTGM muestra "PnC no disponible" | Es posible que se esté realizando una actualización de firmware — verifique con el concesionario MAN |
| PnC funciona una vez y luego falla | El HSM puede tener un problema de conexión — se requiere diagnóstico del concesionario |

---

**Siguiente:** [Otros Camiones →](./other-trucks)