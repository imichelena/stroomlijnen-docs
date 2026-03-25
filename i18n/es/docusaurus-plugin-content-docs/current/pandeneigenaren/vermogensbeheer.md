---
sidebar_position: 6
title: Gestión de potencia y conexión a la red
description: Explicación sobre la potencia de conexión, la potencia contratada, el peakshaving y la carga inteligente para propietarios de locales.
keywords: [potencia de conexión, potencia contratada, peakshaving, carga inteligente, conexión a la red, gestión de carga]
---

# Gestión de potencia y conexión a la red

Antes de instalar puntos de carga, es importante entender cómo funciona su conexión eléctrica y cómo interactúa con la infraestructura de carga.

## Dos conceptos que debe conocer

### Potencia de conexión

La **potencia de conexión** es el límite físico máximo que puede manejar su conexión a la red — determinado por los cables y la subestación de transformación de su gestor de red. Este es el límite absoluto.

**Típico para un teatro:** 400–2000 kVA (= 400–2000 kW por fase, dependiendo del tamaño)

### Potencia contratada

La **potencia contratada** es la potencia máxima para la que tiene un contrato con su gestor de red. Paga una tarifa fija en función de esta potencia. Si consume más de lo estipulado, puede recibir multas o tener que ajustar su contrato.

La potencia contratada suele ser **inferior** a la potencia de conexión.

**Típico para un teatro:** 150–500 kW

---

:::tip Regla general
- **Potencia de conexión** = lo que pueden manejar los cables (límite)
- **Potencia contratada** = lo que ha pagado por (contrato)
- **Consumo actual** = lo que realmente utiliza (varía por hora)

Durante el día, suele haber mucho espacio entre su consumo actual y su potencia contratada. Ese espacio se puede utilizar para cargar.
:::

---

## Cómo se relaciona un cargador DC con su conexión

Un cargador DC extrae su potencia directamente y de manera rápida de su conexión. Un cargador DC de 60 kW extrae 60 kW mientras esté activo. Eso es:

| Tipo de cargador | Potencia | % de 270 kW contrato |
|---|---|---|
| Cargador AC (monofásico) | 3,7–7,4 kW | 1–3% |
| Cargador AC (trifásico) | 11–22 kW | 4–8% |
| Cargador DC | 50–150 kW | 18–55% |
| Cargador DC rápido (camión) | 100–350 kW | 37–130% |

Un solo cargador DC de 150 kW en un contrato de 270 kW ocupa más de la mitad del espacio del contrato. Eso está bien durante el día cuando el teatro consume poco — pero por la noche, durante una función, puede causar problemas.

**La solución: peakshaving / gestión de carga**

---

## Peakshaving y carga inteligente

El **peakshaving** (también conocido como gestión de carga o carga inteligente) es un sistema que ajusta automáticamente la potencia de carga en función de la potencia disponible en ese momento.

### Cómo funciona

1. El sistema mide continuamente el consumo actual de energía del edificio
2. Calcula cuánto espacio hay disponible bajo su potencia contratada
3. La columna de carga recibe exactamente tanta potencia como esté disponible — no más
4. Si la sala se llena y el consumo aumenta, la potencia de carga se reduce automáticamente
5. Si el consumo disminuye (por ejemplo, después de una función), la potencia de carga vuelve a aumentar

### Resultado

- **Nunca** supera su potencia contratada
- **Velocidad de carga máxima** cuando es posible
- **No se requiere acción manual**

```
Potencia contratada:     270 kW
Consumo del teatro por la noche:       220 kW
Disponible para cargar:       50 kW → columna de carga carga a 50 kW

Consumo del teatro durante el día:      40 kW
Disponible para cargar:      230 kW → columna de carga carga a 150 kW (máximo)
```

---

## ¿Cuándo es necesaria la ampliación de la red?

En la mayoría de los teatros, no se requiere una ampliación de la red para un primer punto de carga de 60–150 kW, siempre y cuando esté instalado el peakshaving.

La ampliación de la red solo es relevante si:
- Desea operar varios puntos de carga al mismo tiempo (>3 cargadores rápidos)
- Quiere reservar capacidad de potencia fija para cargar (por ejemplo, para garantías contractuales a transportistas)
- Desea agregar almacenamiento de baterías (BSS) para una mayor capacidad de buffer

:::note Gestor de red
Los tiempos de espera para la ampliación de la red en los Países Bajos son actualmente de 5–10 años en muchas regiones. El almacenamiento de baterías (BSS) puede ser una alternativa para cubrir el tiempo de espera. Consulte la [ElaadNL Outlook Logistiek](https://elaadnl.nl) para obtener cifras actualizadas sobre la congestión de la red y la infraestructura de carga.
:::

---

## Almacenamiento de baterías como buffer

Un sistema de almacenamiento de baterías (BSS) se carga cuando su consumo de energía es bajo, y devuelve esa energía a las columnas de carga en momentos pico. Esto permite velocidades de carga más altas sin superar su conexión a la red.

| Escenario | Sin BSS | Con BSS |
|---|---|---|
| Disponible durante el día | 230 kW | 230 kW + buffer |
| Disponible por la noche | 50 kW | 50 kW + buffer del BSS |
| Velocidad de carga máxima por la noche | 50 kW | 150 kW (del BSS) |