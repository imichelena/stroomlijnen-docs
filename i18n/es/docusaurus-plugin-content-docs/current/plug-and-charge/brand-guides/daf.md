---
sidebar_position: 2
title: Camiones DAF — Configuración de Plug & Charge
description: Guía paso a paso para habilitar Plug & Charge en los camiones eléctricos DAF XF, XD y XB mediante DAF Connect.
keywords: [DAF, XF Electric, XD Electric, XB Electric, DAF Connect, Plug and Charge, ISO 15118]
---

# Camiones DAF — Configuración de Plug & Charge

La gama de camiones eléctricos de DAF, parte del grupo PACCAR, admite la norma ISO 15118-2 Plug & Charge en todos los modelos BEV actuales. La configuración se gestiona a través de DAF Connect, la plataforma de gestión de flotas.

## Modelos Admitidos

| Modelo | Opciones de batería | Carga DC máxima | Listo para PnC |
|-------|-----------|---------------|:---------:|
| XF Electric | Hasta 525 kWh | 350 kW (CCS) | ✅ |
| XD Electric | Hasta 350 kWh | 250 kW (CCS) | ✅ |
| XB Electric | Hasta 210 kWh | 175 kW (CCS) | ✅ |

## Requisitos

- Cuenta de gestión de flotas DAF Connect con acceso de administrador
- Software del vehículo más reciente (compruebe en DAF Connect → Vehículo → Diagnóstico)
- Cuenta de flota Stroomlijnen con PnC habilitado ([Guía de instalación](../setup-guide))

## Paso a Paso: DAF Connect

### 1. Acceso a la Configuración de Carga

1. Inicie sesión en [DAF Connect](https://dafconnect.paccar.com)
2. Navegue hasta **Gestión de flotas** → **Movilidad eléctrica**
3. Si no ve la sección de Movilidad eléctrica, póngase en contacto con el soporte de DAF Connect para habilitarla en su cuenta

### 2. Configuración de Socios de Carga

1. Vaya a **Movilidad eléctrica** → **Socios de carga**
2. Haga clic en **Agregar socio de carga**
3. Busque "Stroomlijnen" o ingrese el ID de socio `NL-STM`
4. Haga clic en **Agregar y autorizar**

### 3. Asignación de Vehículos

1. Después de agregar Stroomlijnen, vaya a **Socios de carga** → **Stroomlijnen B.V.**
2. Haga clic en **Administrar vehículos**
3. Seleccione los camiones que deben utilizar PnC
4. Haga clic en **Guardar**

### 4. Aprobación de la Instalación del Certificado

1. DAF Connect mostrará una notificación para aprobar la instalación del certificado
2. Revise los detalles de la solicitud (vehículos, permisos)
3. Haga clic en **Aprobar**
4. Los certificados de contrato se enviarán a los camiones seleccionados

### 5. Espere a la Instalación

- La entrega del certificado suele tardar **4–8 horas**
- El camión debe estar en línea (contacto encendido o conectado a la corriente)
- Siga el estado en DAF Connect → **Movilidad eléctrica** → **Estado del certificado**

### 6. Verifique y Pruebe

1. Compruebe el estado tanto en DAF Connect como en Stroomlijnen Mi Flota
2. Conecte el camión a un cargador Stroomlijnen para verificar la autenticación automática
3. La primera sesión de PnC confirma que todo funciona correctamente

## Nota sobre Activación por el Administrador de la Flota

DAF requiere que el **administrador de la flota** (no los conductores individuales) active PnC para cada vehículo. Esta es una función de seguridad: solo los administradores de la flota autorizados pueden habilitar la facturación automática en los vehículos de la empresa.

Si su organización tiene varios administradores de flotas:
- Cada uno puede activar PnC para los vehículos bajo su gestión
- Un superadministrador puede delegar derechos de Movilidad eléctrica

## Solución de Problemas

### Sección "Movilidad Eléctrica" no Visible
Esta función requiere una suscripción Premium de DAF Connect. Póngase en contacto con su concesionario DAF para verificar su nivel de suscripción.

### La Instalación del Certificado Tarda Más de 24 Horas
1. Verifique que el camión haya estado en línea al menos 1 hora después de la aprobación
2. Compruebe DAF Connect en busca de mensajes de error bajo Movilidad eléctrica → Notificaciones
3. Póngase en contacto con el soporte de Stroomlijnen para verificar si se ha recibido la solicitud en nuestro lado

### La Autenticación Falla en el Cargador
1. Verifique en DAF Connect que el estado del certificado sea "Activo"
2. Compruebe si el software del vehículo está actualizado
3. Reinicie el vehículo (ciclo de contacto completo)
4. Consulte la guía general de [Solución de Problemas](../troubleshooting)

---

**Siguiente:** [Configuración de Mercedes-Benz →](./mercedes-trucks)