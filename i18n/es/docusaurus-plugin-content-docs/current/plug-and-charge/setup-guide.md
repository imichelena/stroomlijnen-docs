---
sidebar_position: 4
title: Guía de instalación Plug & Charge
description: Cómo configurar Plug & Charge para su flota a través del portal Stroomlijnen — desde el registro hasta la primera sesión automatizada.
keywords: [Configuración de Plug and Charge, registro de flota, certificado de contrato, portal Mijn Vloot, activación de PnC]
---

# Guía de instalación Plug & Charge

Configurar Plug & Charge para su flota tarda aproximadamente 15 minutos de trabajo en el portal. Una vez configurado, cada vehículo registrado se autenticará automáticamente y cargará en cualquier ubicación de Stroomlijnen — sin tarjetas, sin aplicaciones.

## Requisitos

Antes de comenzar:

- [ ] Una **cuenta de flota Stroomlijnen** (regístrese a través de [stroomlijnen.nl](https://stroomlijnen.nl) o póngase en contacto con su gestor de cuentas)
- [ ] Los **números de identificación del vehículo (VIN)** de sus camiones
- [ ] Acceso al portal de flota OEM (Volvo Connect, DAF Connect, Fleetboard, etc.)
- [ ] Un **vehículo compatible** (consulte [Vehículos compatibles](./compatible-vehicles))

## Paso 1: Iniciar sesión en Mijn Vloot

Navegue hasta **my.stroomlijnen.nl** e inicie sesión con sus credenciales de gestor de flota.

Si aún no tiene una cuenta:
1. Haga clic en **Registrarse** e ingrese sus datos de empresa (número de registro mercantil, dirección de facturación)
2. Recibirá un correo electrónico de verificación — haga clic en el enlace
3. Su cuenta será revisada y activada dentro de un día hábil

## Paso 2: Agregar vehículos

En el panel de control de Mijn Vloot:

1. Vaya a **Vehículos** → **Agregar vehículo**
2. Ingrese los datos del vehículo:
   - **VIN** — Número de identificación del vehículo de 17 caracteres (en el marco de la puerta del conductor o en el certificado de registro)
   - **Matrícula** — Para identificación y generación de informes
   - **Marca/Modelo** — Seleccione desde el menú desplegable (por ejemplo, Volvo FH Electric)
   - **Alias** — Opcional, para reconocimiento sencillo (por ejemplo, "Camión 014 — Ruta Ámsterdam")
3. Haga clic en **Guardar y continuar**

Repita esto para cada camión de su flota. También puede **importar en bulk** a través de la carga de CSV.

### Formato CSV

```csv
vin,matrícula,marca,modelo,alias
YV2RT60A1PB123456,AB-123-C,Volvo,FH Electric,Camión 014
XLRAE75PC0H987654,DE-456-F,DAF,XF Electric,Camión 022
```

## Paso 3: Activar Plug & Charge

Para cada vehículo:

1. Vaya a **Vehículos** → seleccione un vehículo → pestaña **Plug & Charge**
2. Establezca **Activar Plug & Charge** en ACTIVADO
3. El sistema generará:
   - Un **certificado de contrato** para este vehículo
   - Una solicitud de instalación a través del servicio de provisión de certificados de la OEM
   - Estado que muestra: `En espera → Instalando → Activo`

:::nota Tiempo de instalación del certificado
La instalación del certificado tarda generalmente **1–24 horas**, dependiendo de la OEM:
- **Volvo**: Normalmente dentro de 2 horas a través de Volvo Connect
- **DAF**: 4–8 horas a través de DAF Connect
- **Mercedes-Benz**: 2–6 horas a través de Fleetboard
- **Scania**: 4–12 horas a través de Scania Fleet Management
- **MAN**: 6–24 horas a través de la plataforma RIO

El camión debe estar **en línea** (contacto encendido o conectado a la carga) para que se entregue el certificado.
:::

## Paso 4: Autorizar a través del portal OEM

Algunas OEM requieren que autorice los servicios de terceros para PnC en su portal de flota:

### Volvo Connect
1. Inicie sesión en Volvo Connect → **Servicios** → **Servicios de carga**
2. Busque "Stroomlijnen B.V." en la lista de socios y haga clic en **Autorizar**
3. Confirme los vehículos que se van a agregar
4. Consulte la [guía de marca Volvo](./brand-guides/volvo-trucks) para obtener pasos detallados

### DAF Connect
1. Inicie sesión en DAF Connect → **Configuración** → **Socios de carga**
2. Active Stroomlijnen y seleccione vehículos
3. Consulte la [guía de marca DAF](./brand-guides/daf) para obtener pasos detallados

### Mercedes-Benz Fleetboard
1. Inicie sesión en Fleetboard → **eMovilidad** → **Gestión de carga**
2. Agregue Stroomlijnen como proveedor de carga
3. Consulte la [guía de marca Mercedes](./brand-guides/mercedes-trucks) para obtener pasos detallados

## Paso 5: Verificar la activación

Una vez instalado el certificado:

1. En Mijn Vloot → **Vehículos** → seleccione vehículo → pestaña **Plug & Charge**
2. El estado debe mostrar: **✅ Activo**
3. Se muestran los detalles del certificado:
   - EMAID (identificador de cuenta de movilidad eléctrica)
   - Fecha de vencimiento del certificado
   - Última sesión PnC exitosa (si está disponible)

## Paso 6: Probar

Conduzca hasta una ubicación de Stroomlijnen y conecte el cable. La sesión de carga debe comenzar dentro de 5–10 segundos sin acción manual.

**Qué buscar:**
- La pantalla del cargador muestra "Plug & Charge — Verificado" (o similar)
- La sesión aparece en Mijn Vloot → **Sesiones** dentro de 1 minuto
- No se requirió tarjeta RFID ni acción de aplicación

## Resolución de problemas de configuración

| Problema | Solución |
|---------|----------|
| El estado del certificado permanece en "En espera" | Asegúrese de que el camión esté en línea (contacto encendido). Verifique el portal OEM para autorizaciones pendientes. |
| El portal OEM no muestra Stroomlijnen | Póngase en contacto con nosotros — es posible que debamos establecer la conexión de backend para su cuenta OEM específica. |
| El certificado está instalado pero PnC falla | Consulte la [guía de resolución de problemas](./troubleshooting) para obtener diagnósticos detallados. |
| Error "EMAID no encontrado" en el cargador | Es posible que el certificado aún no se haya entregado a nuestra backend. Espere 1 hora y vuelva a intentarlo. |
| Errores de importación masiva | Verifique el formato VIN (17 caracteres, sin O/I/Q), verifique si la codificación CSV es UTF-8. |

## Administrar certificados

### Renovación
Los certificados de contrato expiran después de **2 años**. El portal Mijn Vloot enviará notificaciones por correo electrónico 60, 30 y 7 días antes de la expiración. La renovación es automática si su suscripción de flota está activa.

### Revocación
Si un camión se vende, se roba o se retira del servicio:
1. Vaya a **Vehículos** → seleccione vehículo → pestaña **Plug & Charge**
2. Haga clic en **Revocar certificado**
3. El certificado se invalidará inmediatamente en todas las redes de carga conectadas

### Transferencia
Cuando un camión se transfiere a una entidad de facturación diferente dentro de su organización:
1. Revoque el certificado actual
2. Registre el vehículo nuevamente bajo la nueva entidad de facturación
3. Se emitirá un nuevo certificado

---

**Siguiente:** [Guías de marca →](./brand-guides/volvo-trucks)