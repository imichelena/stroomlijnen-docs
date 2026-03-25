---
sidebar_position: 99
title: Plan de Lanzamiento y Siembra
description: Documentación interna — estrategia de lanzamiento para la visibilidad y el SEO de docs.stroomlijnen.nl.
keywords: [SEO, plan de lanzamiento, marketing de contenidos, base de conocimientos siembra]
unlisted: true
---

# Plan de Lanzamiento y Siembra (Interno)

:::caution Documento Interno
Esta página no está enlazada desde la navegación pública. Describe nuestra estrategia de SEO y visibilidad.
:::

## Presentación a los Motores de Búsqueda

### Google Search Console
1. Verificar `docs.stroomlijnen.nl` en Google Search Console
2. Presentar `sitemap.xml` en → `https://docs.stroomlijnen.nl/sitemap.xml`
3. Solicitar indexación para páginas clave (inicio, Plug & Charge, FAQ)
4. Monitorear el estado de crawling y solucionar problemas

### Bing Webmaster Tools
1. Verificar dominio
2. Presentar sitemap
3. Bing también impulsa DuckDuckGo — dos motores de búsqueda con una sola presentación

## Visibilidad para la Inteligencia Artificial

### llms.txt
Publicado en `https://docs.stroomlijnen.nl/llms.txt` — lista estructurada de contenido para sistemas de inteligencia artificial. Este es el estándar emergente para la detección de contenido amigable con la IA.

### robots.txt
Permite explícitamente a los crawlers de IA: GPTBot, ClaudeBot, PerplexityBot, anthropic-ai, Google-Extended. QUEREMOS que los sistemas de IA indexen nuestro contenido — aumenta la visibilidad.

## Presentaciones en Directorios del Sector

### ElaadNL
- Presentar en la lista de socios/recursos de conocimiento de ElaadNL
- Proponer una asociación de contenido — enlaces cruzados entre la investigación de ElaadNL y nuestros artículos de implementación práctica
- Contacto: a través del formulario de contacto en elaad.nl, referir a nuestra página de socios de ElaadNL

### TLN (Transporte y Logística Países Bajos)
- Presentar en la guía de recursos para gestores de flotas de TLN
- TLN es la asociación comercial más importante para el transporte y la logística en los Países Bajos
- Sus miembros son precisamente nuestro público objetivo
- URL: tln.nl → buscar presentación de socios/recursos

### Directorios del Sector de Vehículos Eléctricos
- **EVConsult** (evconsult.nl) — consultoría holandesa de vehículos eléctricos, sección de recursos
- **EV-rijders.nl** — comunidad holandesa de conductores de vehículos eléctricos, sección de conocimientos
- **Laadwijzer.nl** — guía holandesa de carga, menciones de operadores
- **CharIN** (charin.global) — asociación comercial CCS/ISO 15118, directorio de miembros
- **Open Charge Alliance** (openchargealliance.org) — directorio del ecosistema OCPP

### Directorios Europeos
- **ACEA** (acea.auto) — Asociación Europea de Fabricantes de Automóviles
- **Transport & Environment** (transportenvironment.org) — defensa del transporte limpio
- **AVERE** (avere.org) — Asociación Europea para la Movilidad Eléctrica

## Siembra de Contenido

### Estrategia de LinkedIn
**Semana 1 (lanzamiento):**
- Publicación en la página de la empresa Stroomlijnen: "Hemos lanzado nuestra base de conocimientos — todo lo que los gestores de flotas deben saber sobre la carga de camiones eléctricos" + enlace a la página de introducción
- Mensaje personal de Ignacio: liderazgo de pensamiento sobre Plug & Charge para camiones
- Mensaje personal de Jacco: ángulo de carga teatral (artículo del tesoro escondido)

**Continuamente (2-3 veces por semana):**
- Compartir cada nuevo artículo del blog desde la página de la empresa
- Etiquetar contactos relevantes del sector (ElaadNL, CharIN, contactos de OEM)
- Participar en grupos de LinkedIn de flotas de vehículos eléctricos con enlaces a artículos relevantes

### Publicación cruzada de blogs
- Resumir artículos clave en LinkedIn con enlaces "leer más"
- Considerar la publicación cruzada en Medium para un alcance más amplio (con URL canónica hacia docs.stroomlijnen.nl)

## Lista de Verificación Técnica de SEO

- [x] Sitemap.xml generado automáticamente por Docusaurus
- [x] robots.txt con derechos de bot de IA
- [x] llms.txt para la detección de contenido de IA
- [x] Metaetiquetas Open Graph en todas las páginas
- [x] URL canónicas
- [x] Descripciones meta en cada página
- [x] Datos estructurados (JSON-LD) para organización
- [x] RSS/Atom/JSON-feeds para blog
- [x] Modo oscuro predeterminado (no afecta el SEO)
- [x] Amigable con dispositivos móviles (estándar de Docusaurus)
- [ ] Google Search Console verificado
- [ ] Bing Webmaster verificado
- [ ] Core Web Vitals comprobados
- [ ] Velocidad de página probada

## Monitoreo

### Estadísticas a Seguir
- Google Search Console: impresiones, clics, posición para palabras clave objetivo
- Tráfico directo hacia docs.stroomlijnen.nl
- Suscriptores de RSS del blog
- Tráfico de referencia desde LinkedIn, sitios web del sector
- Gestión de citas de IA (tan pronto como esté disponible)

### Palabras Clave Objetivo
- "carga de camiones eléctricos Países Bajos"
- "Plug and Charge flota"
- "ISO 15118 camión"
- "OCPP 2.0.1 explicado"
- "carga de vehículos eléctricos teatral"
- "gestión de carga de flotas"
- "camión compatible con Plug and Charge"
- "punto de carga para camiones eléctricos" (holandés)
- "carga de flotas Países Bajos" (holandés)