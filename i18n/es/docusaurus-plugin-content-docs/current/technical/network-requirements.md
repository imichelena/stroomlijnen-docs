---
sidebar_position: 3
title: Requisitos de red
description: Requisitos de red y conexión para estaciones de carga Stroomlijnen — ancho de banda, reglas de firewall y conmutación por error.
keywords: [requisitos de red, conectividad del cargador, firewall, ancho de banda, conmutación por error 4G, red de local]
---

# Requisitos de red

Cada estación de carga Stroomlijnen requiere una conexión a Internet confiable para comunicarse con nuestro CSMS. En esta página se presentan los requisitos para operadores de locales y equipos de TI.

## Conectividad

### Primaria: Ethernet con cable
- **Ancho de banda mínimo:** 1 Mbps por cargador (simétrico)
- **Recomendado:** 10 Mbps compartido para hasta 10 cargadores
- **Latencia:** < 200 ms a nuestros puntos finales de CSMS
- **Protocolo:** WebSocket a través de TLS (wss://)

### De respaldo: 4G/LTE
- Todos los cargadores Stroomlijnen tienen un módem 4G integrado
- Se activa automáticamente si la conexión con cable falla
- Es suficiente para la comunicación OCPP (bajo ancho de banda)
- No es adecuado para actualizaciones de firmware (use una conexión con cable para eso)

## Reglas de firewall

Si la red del local tiene un firewall, debe permitir lo siguiente **saliente** desde el VLAN/subred del cargador:

| Destino | Puerto | Protocolo | Propósito |
|-------------|------|----------|---------|
| csms.stroomlijnen.nl | 443 | TCP (WSS) | Comunicación OCPP |
| firmware.stroomlijnen.nl | 443 | TCP (HTTPS) | Actualizaciones de firmware |
| ntp.stroomlijnen.nl | 123 | UDP (NTP) | Sincronización de tiempo |
| hubject.com | 443 | TCP (HTTPS) | Validación de certificado PnC |
| *.sentry.io | 443 | TCP (HTTPS) | Informes de errores (opcional) |

**No es necesario abrir puertos entrantes**. Los cargadores inician todas las conexiones salientes.

## Aislamiento de red

Recomendamos colocar los cargadores en su propio **VLAN**, aislado de la red general del local:

- Evita que el tráfico del cargador se mezcle con el tráfico empresarial
- Simplifica las reglas de firewall
- Reduce la superficie de ataque
- Permite la priorización de QoS (Calidad de Servicio) si es necesario

## Dirección IP

- **DHCP es preferido** — Los cargadores solicitan una dirección IP a través de DHCP
- **Dirección IP estática** — Puede configurarse durante la instalación si es necesario
- **IPv4** — Obligatorio (cargador a CSMS)
- **IPv6** — No es obligatorio para la comunicación con CSMS (se utiliza internamente en el cable de carga para ISO 15118)

## DNS

Los cargadores necesitan resolución de DNS para nuestros nombres de host de CSMS. O bien:
- Proporcionar un servidor DNS a través de DHCP, o
- Configurar DNS estático (recomendamos 1.1.1.1 / 8.8.8.8 como respaldo)

## Sincronización de tiempo

La hora exacta es esencial para:
- Validación de certificados (controles de fecha de vencimiento)
- Medición de sesión (precisión de facturación)
- Correlación de registros

Los cargadores sincronizan la hora a través de:
1. NTP (primario) — desde nuestro servidor NTP o una piscina pública de NTP
2. OCPP-heartbeat — CSMS contiene una marca de tiempo en las respuestas de heartbeat (de respaldo)

## Estimación de ancho de banda

| Actividad | Ancho de banda | Frecuencia |
|----------|-----------|-----------|
| OCPP-heartbeat | ~1 KB | Cada 60 segundos |
| Solicitud de autorización | ~2 KB | Por inicio de sesión |
| Valores del medidor | ~1 KB | Cada 15 segundos durante la carga |
| Inicio/parada de sesión | ~3 KB | Por evento |
| Actualización de firmware | 50–200 MB | Cada trimestre |

**Carga típica por cargador:** ~50 KB/hora durante la carga activa, ~1 KB/hora en reposo.

## Evaluación del local

Antes de la instalación, Stroomlijnen realiza una evaluación de red:
1. **Prueba de conectividad** — Verificar que el internet con cable llegue al lugar del cargador
2. **Cobertura 4G** — Probar la fuerza de la señal móvil en el punto de instalación
3. **Evaluación de firewall** — Confirmar que los puertos necesarios estén abiertos
4. **Prueba de ancho de banda** — Verificar la capacidad suficiente para el número planificado de cargadores

## Resolución de problemas

### El cargador muestra "Desconectado" en el portal
1. Verificar la conexión Ethernet física (LED de enlace en el cargador y conmutador)
2. Verificar que DHCP asigne una dirección IP (consultar los registros del servidor DHCP)
3. Probar la resolución de DNS desde la subred del cargador
4. Verificar que el firewall permita el tráfico saliente al puerto 443 en csms.stroomlijnen.nl
5. Si la conexión con cable falla, verificar la señal 4G y el estado del SIM

### Conexiones intermitentes
- Verificar congestión de red o problemas de QoS
- Verificar que el puerto del conmutador no entre en modo de suspensión (desactivar la economía de energía en el puerto)
- Verificar conflictos de IP (otro dispositivo con la misma dirección IP)
- Revisar los ajustes de tiempo de espera de la sesión de firewall (las conexiones WebSocket son de larga duración)