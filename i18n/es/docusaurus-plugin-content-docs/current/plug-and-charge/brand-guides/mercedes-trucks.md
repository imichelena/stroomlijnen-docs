---
sidebar_position: 3
title: Mercedes-Benz Trucks — Configuración de Plug & Charge
description: Guía paso a paso para habilitar Plug & Charge en los camiones Mercedes-Benz eActros y eEconic mediante Fleetboard.
keywords: [Mercedes-Benz, eActros, eEconic, Fleetboard, Plug and Charge, ISO 15118, Daimler Truck]
---

# Mercedes-Benz Trucks — Configuración de Plug & Charge

Mercedes-Benz (Daimler Truck) admite ISO 15118-2 Plug & Charge en los camiones eActros 600 y eActros 300. Se espera que el eEconic reciba soporte para PnC a través de una actualización OTA en el segundo trimestre de 2026. La configuración se gestiona a través de la plataforma Fleetboard.

## Modelos Admitidos

| Modelo | Opciones de batería | Carga DC máxima | Listo para PnC |
|-------|-----------|---------------|:---------:|
| eActros 600 | Hasta 621 kWh | 400 kW (MCS/CCS) | ✅ |
| eActros 300 | Hasta 336 kWh | 160 kW (CCS) | ✅ |
| eEconic | Hasta 336 kWh | 160 kW (CCS) | ⚠️ Q2 2026 |

## Requisitos

- Cuenta de Fleetboard con acceso de administrador para la gestión de flotas
- Firmware de eActros con módulo de movilidad eléctrica (incluido de serie desde el cuarto trimestre de 2025)
- Cuenta de flota de Stroomlijnen con PnC habilitado ([Guía de instalación](../setup-guide))

## Paso a Paso: Fleetboard

### 1. Acceso a la configuración de movilidad eléctrica

1. Inicie sesión en [Fleetboard](https://fleetboard.com)
2. Vaya a **Movilidad Eléctrica** → **Gestión de Carga**
3. Si utiliza el nuevo portal **Daimler Truck Digital**, vaya a **Servicios** → **Gestión de Carga**

### 2. Agregar Stroomlijnen como Proveedor

1. Haga clic en **Proveedores de Carga** en la gestión de carga
2. Haga clic en **Agregar proveedor**
3. Busque **"Stroomlijnen B.V."** (o utilice el ID de eMSP `NL-STM`)
4. Haga clic en **Conectar**
5. Acepte los términos y condiciones de intercambio de datos (ID del vehículo y certificado)

### 3. Registrar Vehículos para PnC

1. Vaya a **Gestión de Carga** → **Configuración de PnC del Vehículo**
2. Realice los siguientes pasos para cada eActros que desee habilitar:
   - Haga clic en la fila del vehículo
   - Establezca **Plug & Charge** en ACTIVADO
   - Seleccione **Stroomlijnen** como proveedor de carga preferido (o uno de varios)
3. Haga clic en **Guardar cambios**

### 4. Implementación del Certificado

Después de guardar:
1. Fleetboard inicia la solicitud de certificado a Stroomlijnen
2. Se genera el certificado de contrato por nuestra parte trasera
3. Se envía al camión a través de la unidad de telemática de Daimler Truck
4. **Tiempo de implementación típico: 2-6 horas**
5. El camión debe estar en línea (conectado o con contacto)

### 5. Verificar en Ambos Portales

- **Fleetboard** → Movilidad Eléctrica → Vehículo → Estado de PnC: debe mostrar "Certificado Activo"
- **Stroomlijnen Mi Flota** → Vehículo → Plug & Charge: debe mostrar "✅ Activo"

### 6. Primera Sesión

Conecte el eActros a un cargador Stroomlijnen. El panel del eActros muestra el estado de autenticación "Plug & Charge". La carga debería comenzar automáticamente dentro de 5-10 segundos.

## Varios Proveedores de Carga

Mercedes-Benz admite varios proveedores de PnC al mismo tiempo. Puede tener certificados de Stroomlijnen junto con certificados de otros proveedores en el mismo vehículo. El camión utiliza el certificado correcto según la red del cargador.

## Fleetboard versus Daimler Truck Digital

Daimler Truck está migrando de Fleetboard a la nueva plataforma **Daimler Truck Digital**. Ambos portales admiten actualmente la administración de PnC:

- **Fleetboard (heredado):** Admite completamente PnC, bien documentado
- **Daimler Truck Digital (nuevo):** PnC disponible en Servicios → Gestión de Carga

Si migra entre plataformas, las configuraciones de PnC se transfieren automáticamente.

## Resolución de Problemas

### Sección "Movilidad Eléctrica" no Disponible en Fleetboard
- Asegúrese de que su suscripción de Fleetboard incluya el módulo de movilidad eléctrica
- El módulo de movilidad eléctrica está incluido en Fleetboard Premium para vehículos eléctricos
- Póngase en contacto con su concesionario Mercedes-Benz para verificar

### Certificado Muestra "En Proceso" Durante un Período Largo
1. Asegúrese de que el camión haya estado en línea al menos 2 horas
2. Verifique las notificaciones de Fleetboard en busca de aprobaciones pendientes
3. Verifique que la unidad de telemática de Daimler Truck tenga conexión de red móvil (verifique la antena en el camión)
4. Póngase en contacto con el soporte de Stroomlijnen para verificar nuestra parte trasera

### eActros 600 con Conector MCS
El eActros 600 admite tanto CCS como MCS (Sistema de Carga Megawatt). PnC funciona en ambos tipos de conectores en ubicaciones de Stroomlijnen. Los cargadores MCS se implementarán en ubicaciones seleccionadas en 2026.

---

**Siguiente:** [Otros Camiones →](./other-trucks)