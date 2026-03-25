---
sidebar_position: 1
title: ¿Qué es Plug & Charge?
description: "Cuando un camión compatible con Plug & Charge se conecta a nuestro cargador, la facturación comienza automáticamente — sin tarjeta, sin aplicación, sin acción del conductor necesaria."
keywords: [Plug and Charge, ISO 15118, carga automática, camión eléctrico, carga de flota, PnC]
---

# ¿Qué es Plug & Charge?

**Cuando un camión compatible con Plug & Charge se conecta a nuestro cargador, la facturación comienza automáticamente — sin tarjeta, sin aplicación, sin acción del conductor necesaria.**

Eso es todo. Conectar, irse, regresar con un camión cargado. El cargador y el camión gestionan la autenticación, autorización y facturación entre sí.

## El Problema que Resuelve Plug & Charge

Actualmente, la mayoría de las sesiones de carga requieren que el conductor:
1. Tenga la tarjeta o aplicación correcta
2. Sepa qué red gestiona este cargador
3. Pase una tarjeta, escanee un código QR o inicie una sesión en una aplicación
4. Espere a ser autorizado
5. Luego conecte

Para el propietario de un automóvil que carga una vez a la semana, esto es un ligero inconveniente. Para una flota con 20 camiones y varios conductores que trabajan en turnos, es una carga operativa:

- Los conductores olvidan las tarjetas
- Las tarjetas se pierden o dañan
- Los nuevos conductores deben ser capacitados
- Diferentes redes de carga requieren diferentes aplicaciones
- Los vehículos compartidos requieren tarjetas compartidas (riesgo de seguridad)
- Cada autenticación fallida es tiempo de carga perdido

### El Costo Real de la Fricción

Para una flota de 20 camiones eléctricos:
- Un promedio de **3 minutos** por sesión en problemas de autenticación
- Un promedio de **2 sesiones de carga** por camión al día
- Eso es **120 minutos al día** — dos horas de tiempo del conductor desperdiciadas en pasar tarjetas
- Con un costo de conductor completamente cargado de €35/hora: **€1.225/mes** en productividad perdida
- Además de sesiones fallidas, llamadas de soporte y conductores frustrados

## Cómo Resuelve Plug & Charge Esto

Con Plug & Charge:
1. El conductor conecta el cable
2. **Listo.**

El certificado a bordo del camión gestiona todo. El cargador sabe quién es usted, a qué flota pertenece y dónde enviar la factura — todo intercambiado criptográficamente en menos de 5 segundos.

No hay tarjetas que perder. No hay aplicaciones que instalar. No se requiere capacitación. No hay diferencia entre un conductor de primer día y uno con 10 años de experiencia.

## ¿Quién Puede Usarlo?

Plug & Charge requiere:

1. **Un vehículo compatible** — el camión o furgoneta debe soportar ISO 15118-2 o superior. Consulte nuestra lista de [Vehículos compatibles](/docs/plug-and-charge/compatible-vehicles).
2. **Un cargador compatible** — debe soportar ISO 15118 y estar conectado a un ecosistema Plug & Charge. Todos los cargadores Stroomlijnen lo soportan.
3. **Provisión de certificado** — su vehículo necesita un certificado de contrato. Nosotros nos encargamos de esto a través de nuestro portal.

## ¿Es Seguro?

Sí. Plug & Charge utiliza el mismo tipo de criptografía que protege el banca en línea:

- **Certificados X.509** — cada vehículo tiene un certificado digital único
- **PKI (Infraestructura de Clave Pública)** — una cadena de confianza del vehículo al eMSP
- **Cifrado TLS** — toda la comunicación entre el vehículo y el cargador está cifrada
- **No se exponen datos sensibles** — el cable transporta datos de certificado cifrados, no números de cuenta

Un vehículo robado puede ser desactivado a distancia revocando el certificado. Una tarjeta RFID, por otro lado, funciona hasta que alguien nota que ha desaparecido.

:::info
Plug & Charge es **más seguro** que las tarjetas RFID. Las tarjetas pueden ser clonadas (aunque las tarjetas modernas hacen que esto sea más difícil). Los certificados no — utilizan criptografía asimétrica con claves de 256 bits.
:::

## El Caso de Negocio

Para los administradores de flotas, Plug & Charge no es solo conveniente — es una economía de costos:

| Factor | RFID | Plug & Charge |
|--------|------|---------------|
| Tiempo del conductor por sesión | 2–5 minutos | 0 minutos |
| Carga de gestión para tarjetas | Alta | Ninguna |
| Riesgo de pérdida/robo | Real | N/A |
| Proceso de capacitación para nuevos conductores | Entregar tarjeta, explicar proceso | "Simplemente conectar" |
| Vehículos con múltiples turnos | Tarjetas compartidas (riesgoso) | Automático por vehículo |
| Tiempo de gestión mensual | Horas | Minutos |

## Empezar

¿Listo para configurar Plug & Charge para su flota?

1. **[Verificar compatibilidad del vehículo](/docs/plug-and-charge/compatible-vehicles)** — ¿soporta su camión esto?
2. **[Entender cómo funciona](/docs/plug-and-charge/how-it-works)** — la tecnología detrás
3. **[Configurarlo](/docs/plug-and-charge/setup-guide)** — paso a paso en nuestro portal
4. **[Guías específicas de marca](/docs/plug-and-charge/brand-guides/volvo-trucks)** — instrucciones detalladas por fabricante