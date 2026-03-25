---
sidebar_position: 2
title: Gestión de vehículos
description: Cómo registrar, configurar y gestionar vehículos eléctricos en el portal Mijn Vloot.
keywords: [gestión de vehículos, registro de flota, camión eléctrico, VIN, asignación de RFID, política de carga]
---

# Gestión de vehículos

La sección Vehículos de Mijn Vloot es el lugar donde registra camiones y furgonetas, configura sus ajustes de carga y monitorea su estado.

## Agregar vehículos

### Un solo vehículo

1. Vaya a **Vehículos** → **Agregar vehículo**
2. Rellene los campos obligatorios:
   - **VIN** — Número de identificación del vehículo de 17 caracteres
   - **Matrícula** — Formato neerlandés o de la UE
   - **Marca y modelo** — Seleccione desde el menú desplegable
   - **Año de fabricación** — Año del modelo
   - **Capacidad de la batería** — En kilovatio-horas (rellenado automáticamente para modelos conocidos)
3. Campos opcionales:
   - **Alias** — Para una fácil identificación (por ejemplo, "Amsterdam 014")
   - **Departamento/Grupo** — Para filtrar organizativamente
   - **Centro de costos** — Para la asignación de facturas
4. Haga clic en **Guardar**

### Importación masiva

Para flotas con muchos vehículos:

1. Vaya a **Vehículos** → **Importar**
2. Descargue la plantilla CSV
3. Rellene los datos del vehículo
4. Suba el archivo CSV rellenado
5. Verifique el resumen de importación — corrija cualquier error de validación
6. Haga clic en **Confirmar importación**

## Detalles del vehículo

La página de detalles de cada vehículo muestra:

### Estado
- **Estado actual** — Cargando / Inactivo / Desconectado
- **Última vez visto** — Cuando el vehículo se comunicó por última vez con un cargador
- **Nivel de la batería** — Si lo informa el vehículo durante la última sesión

### Configuración de carga
- **Método de autenticación** — PnC, RFID o ambos
- **Estado de Plug & Charge** — Activado/Desactivado, estado del certificado
- **Pases RFID asignados** — Qué pases están vinculados a este vehículo
- **Política de carga** — Velocidad de carga máxima, objetivo de SoC deseado, ventanas de carga programadas

### Historial de sesiones
- Lista de todas las sesiones de carga pasadas para este vehículo
- Filtre por rango de fechas, ubicación o método de autenticación
- Energía total, costos totales y duración promedio de la sesión

### Documentos
- Documento de matrícula (opcional subir)
- Certificado de seguro (opcional subir)
- Datos de mantenimiento

## Política de carga

Puede establecer una política de carga por vehículo o por grupo:

### Límite de potencia
Establezca un límite de potencia máximo. Útil para:
- Durabilidad de la batería (limitar a 80% de la potencia máxima)
- Control de costos (potencia más baja = menores costos de capacidad en algunas ubicaciones)

### Objetivo de SoC
Establezca un objetivo de nivel de carga deseado. Cuando se alcanza, el cargador reduce la potencia o detiene. Esto prolonga la vida útil de la batería y libera cargadores para otros vehículos.

### Carga programada
Defina ventanas de tiempo cuando se puede cargar. Útil para:
- Precios de electricidad en horas valle
- Gestión de la carga de la red
- Optimización del momento de partida (cargar hasta 90% antes de las 06:00)

### Prioridad
Cuando varios vehículos de la flota están en la misma ubicación y la potencia está limitada, los ajustes de prioridad determinan qué vehículos reciben primero toda la potencia.

## Grupos de vehículos

Organice los vehículos en grupos para una gestión más sencilla:

- **Por ruta** — Rutas de Amsterdam, rutas de Rotterdam
- **Por tipo** — Larga distancia, entrega regional, última milla
- **Por departamento** — Operaciones, entrega al cliente

Los grupos pueden tener políticas de carga y ajustes de facturación compartidos.

## Retirar un vehículo

Cuando un vehículo abandona su flota:

1. Vaya a **Vehículos** → seleccione el vehículo → **Configuración**
2. Haga clic en **Retirar vehículo**
3. Esto:
   - Revocará todos los certificados PnC activos
   - Desvinculará todos los pases RFID
   - Archivará el historial de sesiones del vehículo (todavía accesible para informes)
   - Detendrá la facturación para este vehículo

El vehículo se puede reactivar si regresa a la flota.

## Exportación de datos

Exporte los datos del vehículo para integrarlos con sus propios sistemas:

- **Lista de vehículos** — CSV con todos los detalles del vehículo
- **Historial de sesiones** — CSV por vehículo o para todos los vehículos
- **API** — Acceso programático a los datos del vehículo (consulte Visión general de la gestión de flotas → API)