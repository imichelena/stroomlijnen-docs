---
sidebar_position: 10
title: Resolución de Problemas Plug & Charge
description: Problemas comunes de Plug & Charge y soluciones — desde errores de certificado hasta fallos de comunicación en el cargador.
keywords: [Resolución de problemas de Plug and Charge, Errores de PnC, Problemas de ISO 15118, Carga fallida, Error de certificado]
---

# Resolución de Problemas Plug & Charge

Cuando Plug & Charge no funciona como se espera, el problema suele caer en una de las siguientes categorías: problemas de certificado, fallos de comunicación o deficiencias de configuración. Esta guía trata los problemas más comunes.

## Lista de Diagnóstico Rápido

Realice esta lista de verificación antes de profundizar:

- [ ] ¿El vehículo es [compatible con PnC](./compatible-vehicles)?
- [ ] ¿El firmware del vehículo está actualizado?
- [ ] ¿Está habilitado PnC en el portal Stroomlijnen Mijn Vloot?
- [ ] ¿Muestra el estado del certificado "Activo" en ambos portales (OEM + Stroomlijnen)?
- [ ] ¿Está encendido el contacto del vehículo o está activo el modo accesorio?
- [ ] ¿Está completamente insertado el cable CCS en la conexión del vehículo?

## Problemas Comunes

### 1. Cargador muestra "Autenticación fallida"

**Síntomas:** Cable conectado, cargador intenta PnC pero muestra un error de autenticación.

**Causas y Soluciones:**

| Causa | Solución |
|---------|----------|
| Certificado caducado | Verifique la fecha de caducidad en Mijn Vloot → Vehículo → Pestaña PnC. Renueve si ha caducado. |
| Certificado no instalado | El estado puede mostrar "En espera". Asegúrese de que el camión esté en línea. Espere hasta 24 horas. |
| Certificado revocado | Si se revocó intencionalmente, vuelva a habilitar PnC a través del portal. |
| EMAID no sincronizado | Comuníquese con el soporte de Stroomlijnen — nuestro backend puede necesitar sincronizarse con Hubject. |
| Certificado incorrecto presentado | Si hay varios certificados eMSP instalados, el camión puede presentar el incorrecto. Verifique el portal OEM. |

### 2. Cargador vuelve a RFID

**Síntomas:** En lugar de PnC, el cargador solicita "Toca tu tarjeta RFID".

**Causas y Soluciones:**

- **Vehículo no inicia ISO 15118-2:** El módulo de comunicación del camión puede no ofrecer PnC. Reinicie el vehículo y vuelva a intentarlo.
- **Comunicación PLC fallida:** La Comunicación de Línea de Potencia entre el cable y el vehículo no se establece. Intente con un cable o conector diferente (si está disponible). Limpie los contactos del conector CCS.
- **PnC del cargador deshabilitado temporalmente:** Rara vez, un cargador puede tener PnC deshabilitado para mantenimiento. Intente con otro cargador en la misma ubicación.

### 3. Estado de certificado permanece en "En espera"

**Síntomas:** Usted habilitó PnC hace días pero el certificado no se ha instalado.

**Soluciones:**
1. **Asegúrese de que el camión esté en línea** — El camión debe estar encendido (contacto o modo accesorio) con conexión móvil para que se entregue el certificado
2. **Verifique el portal OEM** — Puede haber una solicitud de autorización pendiente que deba aprobar
3. **Verifique los permisos del portal de flota** — Asegúrese de que su cuenta tenga acceso de administrador para la gestión de PnC
4. **Vuelva a disparar la instalación** — En Mijn Vloot → Vehículo → Pestaña PnC, haga clic en **Volver a enviar solicitud de certificado**
5. **Comuníquese con el soporte** — Si está atascado durante más de 48 horas, comuníquese tanto con Stroomlijnen como con su concesionario OEM

### 4. PnC Funciona Esporádicamente

**Síntomas:** PnC funciona en algunos cargadores o en momentos específicos, pero falla aleatoriamente.

**Posibles Causas:**

- **Señal de PLC débil:** La señal de Comunicación de Línea de Potencia puede verse afectada por la condición del cable, el desgaste del conector o la interferencia electromagnética. Intente desconectar y volver a conectar completamente.
- **Error de software del vehículo:** Reinicie el camión (ciclo de contacto completo: apagado → 30 segundos de espera → encendido).
- **Tiempo de espera de backend:** Si nuestro backend responde lentamente, el cargador puede experimentar un tiempo de espera. Suele resolverse al volver a intentarlo.
- **Certificado a punto de caducar:** Algunos sistemas tienen una validación más estricta cuando los certificados están a punto de caducar. Verifique la validez restante.

### 5. Error "Certificado de contrato no válido"

**Síntomas:** El cargador informa específicamente que el certificado del contrato es no válido.

**Soluciones:**
1. **Verifique la cadena de certificados:** Verifique los detalles del certificado en Mijn Vloot. Si la cadena está rota (por ejemplo, una CA intermedia ha caducado), comuníquese con el soporte de Stroomlijnen.
2. **Sincronización de tiempo:** Si el reloj del vehículo difiere significativamente, la validación del certificado puede fallar. Esto es raro en camiones modernos pero posible después de períodos de almacenamiento prolongados.
3. **Actualización de CA raíz necesaria:** El cargador puede necesitar un certificado raíz actualizado. Stroomlijnen administra esto automáticamente, pero durante los períodos de implementación pueden ocurrir brechas temporales. Informe el ID del cargador específico al soporte.

### 6. Sesión Comienza Pero Se Detiene Inmediatamente

**Síntomas:** PnC autentica con éxito, la carga comienza, pero se detiene dentro de segundos.

**Esto generalmente no es un problema de PnC.** La autenticación funcionó — el problema está en la sesión de carga en sí:

- **Intervención del sistema de gestión de batería (BMS):** El BMS del camión puede limitar la admisión de carga (temperatura, SoC, equilibrado de celdas)
- **Negociación de potencia fallida:** El cargador y el vehículo no pudieron ponerse de acuerdo sobre los parámetros de carga. Vuelva a intentarlo — la asignación dinámica de potencia puede variar.
- **Detección de fugas de tierra:** El sistema de seguridad detectó un problema. Desconecte, inspeccione el cable y el conector en busca de humedad o suciedad, vuelva a intentarlo.

## Códigos de Error

Si el cargador muestra un código de error específico, anótelo y comuníquese con el soporte. Códigos comunes:

| Código | Significado | Acción |
|------|---------|--------|
| AUTH-001 | No se encontró certificado de contrato válido | Verifique la instalación del certificado |
| AUTH-002 | Validación de cadena de certificados fallida | Comuníquese con el soporte |
| AUTH-003 | EMAID no autorizado | Verifique el estado de PnC en Mijn Vloot |
| AUTH-004 | Tiempo de espera de comunicación de backend | Espere 2 minutos, vuelva a intentarlo |
| COMM-001 | Conexión PLC fallida | Vuelva a conectar el cable, limpie los contactos |
| COMM-002 | Incompatibilidad de versión del protocolo ISO 15118 | Actualice el firmware del vehículo |
| COMM-003 | Falla de handshake TLS | Comuníquese con el soporte |

## Recopilación de Información de Diagnóstico

Asegúrese de proporcionar lo siguiente cuando se comunique con el soporte:

1. **Detalles del vehículo:** Marca, modelo, VIN, versión de firmware
2. **Detalles del cargador:** Nombre de la ubicación, ID del cargador (impreso en el dispositivo, formato: `NL*STM*E...`)
3. **Fecha y hora** del intento fallido
4. **Mensaje de error** o código mostrado en el cargador
5. **Capturas de pantalla** del display del cargador y/o panel de instrumentos del vehículo (si es seguro hacerlo)

## Contactar Soporte

- **Correo electrónico:** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Teléfono:** Disponible para clientes de flota (consulte su contrato para el número de soporte)
- **Portal Mijn Vloot:** Presente una solicitud de soporte a través de la sección Ayuda

---

**¿Todavía atascado?** Consulte las [Preguntas Frecuentes](../faq) para más preguntas comunes, o comuníquese con su administrador de cuenta de Stroomlijnen.