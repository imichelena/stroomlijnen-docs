---
sidebar_position: 3
title: Tarjetas RFID
description: Cómo ordenar, activar y gestionar tarjetas RFID para su flota de vehículos eléctricos en Stroomlijnen.
keywords: [tarjeta RFID, tarjeta de carga, NL*STM, carga de flota, activar tarjeta]
---

# Tarjetas RFID

Las tarjetas RFID (Identificación por Radiofrecuencia) son la forma tradicional de autenticarse en una estación de carga. Coloque su tarjeta, comience a cargar — fácil y confiable.

## Cómo funcionan las tarjetas RFID

Cada tarjeta contiene un código de identificación único (un **token** o **UID**) que está vinculado a su cuenta de flota. Cuando coloca la tarjeta en el lector de un cargador:

1. El cargador lee el UID de la tarjeta
2. Lo envía a través de OCPP al backend de Stroomlijnen
3. Nuestro sistema verifica: ¿es esta tarjeta válida? ¿A qué flota pertenece?
4. Si es válido → comienza la carga. La sesión se factura a la cuenta de la flota.

Esto funciona en todas las ubicaciones de Stroomlijnen y en los cargadores de **socios de roaming** en toda Europa — la tarjeta lleva su identidad NL\*STM eMSP.

## Pedir tarjetas

### Nueva registrazione de flota
Cuando registra su flota, puede pedir tarjetas directamente a través del portal:

1. Vaya a **Mi flota → Tarjetas RFID**
2. Haga clic en **Pedir tarjetas**
3. Indique la cantidad de tarjetas necesarias
4. Introduzca la dirección de envío
5. Las tarjetas llegan dentro de 3-5 días laborables

### Tarjetas adicionales
¿Necesita más? Sigue el mismo procedimiento. Puede pedir tarjetas adicionales en cualquier momento.

### Precio
- Las tarjetas se proporcionan de forma gratuita con su suscripción de flota
- Reemplazo en caso de pérdida: gratuito (los primeros dos al año), €5 por tarjeta después

## Activar una tarjeta

Las tarjetas se entregan **preactivadas** y ya están vinculadas a su flota. Sin embargo, debe:

1. Ir a **Mi flota → Tarjetas RFID** en el portal
2. Verificar si las nuevas tarjetas aparecen en su lista
3. **Asignar cada tarjeta a un conductor** (opcional pero recomendado — ayuda a realizar un seguimiento de las sesiones)
4. Probar la tarjeta en un cargador

:::tip
Asigne tarjetas a conductores específicos. De esta manera, sus informes de carga mostrarán qué conductor ha utilizado qué tarjeta, lo que facilita la asignación de costos por flota.
:::

## Gestionar tarjetas

### Desactivar una tarjeta
Si una tarjeta se ha perdido o un conductor abandona la empresa:
1. Vaya a **Mi flota → Tarjetas RFID**
2. Busque la tarjeta (por número o nombre del conductor)
3. Haga clic en **Desactivar**
4. La tarjeta dejará de funcionar inmediatamente en todos los cargadores

### Reactivar una tarjeta
¿Ha encontrado esa tarjeta "perdida" después de todo? Puede reactivala de la misma manera.

### Grupos de tarjetas
Para flotas más grandes, puede organizar las tarjetas en grupos:
- **Por vehículo** — una tarjeta por camión
- **Por conductor** — tarjetas personales que funcionan en cualquier vehículo
- **Por departamento** — facturación separada por unidad de negocio

## Tarjetas perdidas o robadas

1. **Desactive inmediatamente** en el portal (o llame a nuestro servicio de atención al cliente)
2. La tarjeta se invalidará en todos los cargadores conectados dentro de 60 segundos
3. Pida un reemplazo
4. Cualquier costo antes de la desactivación aparecerá en su factura habitual

:::caution
Desactive las tarjetas perdidas lo antes posible. Hasta entonces, cualquier persona puede cargar con la tarjeta en su cuenta. Procesamos la desactivación dentro de 60 segundos — pero usted debe tomar la iniciativa.
:::

## RFID versus Carga y Conectar

| Función | Tarjeta RFID | Carga y Conectar |
|---------|-----------|---------------|
| Tiempo de configuración | Pedir tarjetas, asignar a conductores | Registrar VIN, instalar certificado |
| Acción del conductor | Colocar la tarjeta antes/después de cargar | Simplemente conectar |
| Funciona con varias flotas | La tarjeta sigue al conductor | El certificado sigue al vehículo |
| Riesgo de pérdida | La tarjeta puede perderse o ser robada | No hay nada físico que perder |
| Roaming | Funciona en todas partes | Creciente, pero aún no universal |
| Opción de respaldo | Siempre funciona | Se requiere RFID como opción de respaldo |

**Nuestra recomendación:** Configure Carga y Conectar para mayor comodidad, mantenga las tarjetas RFID como opción de respaldo. Cinturón y correa.

## Detalles técnicos

- **Tecnología de la tarjeta:** MIFARE DESFire EV2 (cifrada, segura)
- **Frecuencia:** 13,56 MHz (NFC)
- **Estándar:** ISO 14443
- **Formato UID:** 14 caracteres hexadecimales
- **Marca:** Logotipo de Stroomlijnen con identificación NL\*STM

## Próximos pasos

- [Configure Carga y Conectar](/docs/plug-and-charge/setup-guide) junto con sus tarjetas RFID
- [Gestione a sus conductores](/docs/fleet-management/driver-management)
- [Entienda sus facturas](/docs/fleet-management/invoicing)