---
sidebar_position: 1
title: Turismo Elétrico — o que você precisa saber
description: Guia prático para motoristas que viajam com veículos elétricos. Desde alcance até gerenciamento de carga na estrada.
keywords: [turismo elétrico, motorista, alcance, OBC, estratégia de carga, carregador rápido, caminhão, van]
---

# Turismo Elétrico — o que você precisa saber

Um guia prático para motoristas que viajam com veículos elétricos. A regra básica é simples: **carregue quando estiver parado, não quando estiver dirigindo**.

---

## O Veículo

### Alcance determina tudo

O alcance do seu veículo determina se você pode ir de A para B sem parar no meio. Algumas regras gerais para a Holanda:

- **Carro com pacote de bateria grande** (por exemplo, 77+ kWh): saindo de Utrecht, você chega a quase todos os teatros e volta em uma carga
- **Van**: isso é quase impossível com a maioria dos modelos em uma carga — carregar na estrada é inevitável
- **Caminhão**: dependendo da rota e da carga, mas carregar no teatro é crucial

### Alcance WLTP vs. realidade

O alcance WLTP oficial é baseado em uso misto e não é uma boa medida para dirigir constantemente na rodovia.

| Velocidade | Consumo em relação ao WLTP | Alcance efetivo |
|---|---|---|
| 90 km/h | ~100% | Alcance WLTP alcançável |
| 100 km/h | ~110% | ~10% menos alcance |
| 120 km/h | ~150% | ~30% menos alcance |

**Exemplo prático (Kia e-Soul, WLTP 452 km):**
- A 90 km/h: ~450 km alcançáveis
- A 120 km/h: ~300 km na prática
- Regra geral a 100 km/h médio: conte com ~330 km

Temperatura e vento reduzem ainda mais o alcance. Sempre contabilize uma margem.

### O Carregador On-Board (OBC)

O **OBC (On Board Charger)** é o carregador integrado do veículo. Ele determina quão rápido você pode carregar em uma tomada de corrente alternada (AC) comum. É a parte mais lenta da cadeia.

| Potência OBC | Tempo para carregar 60 kWh |
|---|---|
| 3 kW | ~20 horas |
| 7 kW | ~8,5 horas |
| 11 kW | ~5,5 horas |
| 22 kW | ~2,75 horas |

:::warning
Um OBC de 11 kW carrega no máximo 11 kW, mesmo que a tomada possa fornecer mais. O OBC é o fator limitante ao carregar em AC.
:::

Quase todos os veículos com habilitação B (carros, vans) têm um OBC limitado — isso já era assim com diesel (corrente para construção), mas com elétrico é ainda mais relevante.

---

## Carregadores

### Carregadores de CA (tomadas públicas, carregador caseiro)

Os carregadores de CA fornecem corrente alternada ao veículo — o OBC converte isso em corrente contínua (DC) para a bateria.

- **Potência:** 3,7–22 kW (dependendo da tomada e do OBC)
- **Locais:** tomadas públicas na rua, em empresas, em teatros
- **Preço:** relativamente baixo (€0,25–€0,45/kWh)
- **Desvantagem:** lento, e cada vez mais tomadas limitam a potência de carregamento durante a congestão noturna (16:00–22:00) ou não fornecem nada

:::warning Congestão Noturna
Muitas tomadas públicas limitam a potência de carregamento ou param completamente entre 16:00 e 22:00 devido à congestão da rede. Se você contar com uma bateria cheia cedo pela manhã, mas a tomada carregou muito pouco durante 6 horas — então você terá uma surpresa.
:::

:::note Carregadores Públicos
Em muitas tomadas públicas, agora há multas se você permanecer estacionado após a bateria estar cheia. Defina um lembrete no seu aplicativo.
:::

### Carregadores de CC (carregadores rápidos)

Os carregadores de CC convertem a corrente em DC e carregam diretamente na bateria — sem OBC. Muito mais rápido.

- **Potência:** 20–350+ kW
- **Preço:** até 4× o preço de uma tomada de CA (€0,60–€0,90/kWh em carregadores rápidos públicos)
- **Locais para carros e vans:** Fastned, Shell Recharge, Allego, etc.
- **Locais para caminhões:** ~100 estações de carregamento abertas na Holanda (encontradas via [Chargemap](https://chargemap.com) ou [Truckcharging da Volvo](https://truckscharging.com))

:::warning Caminhões não são permitidos em carregadores rápidos regulares
Caminhões não são bem-vindos em Fastned, Shell Recharge e carregadores rápidos semelhantes para consumidores. Eles precisam usar estações de carregamento específicas para caminhões.
:::

### Levar seu próprio carregador

Levar seu próprio carregador (cabo de carregamento móvel ou wallbox) é uma opção inteligente — você sabe que pode carregar se houver uma tomada de corrente disponível.

**Atenção ao usar tomadas de corrente:**
- Um cabo de 32A pode fornecer essa potência apenas no pico, mas somente **25A contínuo** (carregamento líquido ~15 kW contínuo)
- Um cabo de 63A fornece o dobro da capacidade (~30 kW contínuo)
- O comprimento e a espessura do cabo determinam se você pode obter a potência total — cabos pesados sobre longas distâncias perdem potência

Não todas as áreas de carregamento e descarregamento em teatros têm corrente disponível nas proximidades. Verifique isso antes.

---

## Comportamento ao Dirigir

### Freio Regenerativo

A maioria dos veículos elétricos pode recuperar energia ao frear (freio regenerativo). O motor funciona como um dínamo e carrega a bateria ao reduzir a velocidade.

- Você **não pode mais rolar** — o veículo freia assim que você solta o acelerador
- Isso é um pouco para se acostumar, mas fornece alcance significativo em cada saída ou redução de velocidade
- Seus freios desgastam-se muito menos

**Dica:** Aprenda a dirigir com um pedal. Em cada saída ou engarrafamento, você ganha alcance gratuito.

---

## Estratégia de Carregamento na Estrada

A estratégia ideal para um motorista em turnê:

```
Base       → Partida com bateria cheia
        ↓
Local/Teatro  → Carregar durante montagem/apresentação/desmontagem
        ↓
Base       → Carregar em casa, se necessário
```

Se o alcance para a viagem de ida não for suficiente:

- Escolha um veículo com **alta velocidade de carregamento DC (>100 kW)** — isso torna possível uma parada de carregamento rápido de 15 minutos em vez de 45 minutos
- Encontre carregadores rápidos na rota via [Chargemap](https://chargemap.com), [ABRP](https://abetterrouteplanner.com) ou [PlugShare](https://www.plugshare.com)

---

## Caminhões: Pontos Especiais de Atenção

Para caminhões, há restrições adicionais:

- **Lei de Dirigir:** combinar carregamento com trabalho técnico é problemático do ponto de vista legal se o motorista tiver que esperar perto do carregador. Em teatros que não podem carregar, um **motorista dedicado** é necessário.
- **Sem acesso a carregadores rápidos para consumidores** — procure estações de carregamento específicas para caminhões
- **Carregamento no teatro**: nem sempre possível e nem todos os locais têm uma tomada nas proximidades do local de carregamento

---

## Conclusões em Resumo

- **Carregue quando estiver parado** — em casa e no teatro. Carregar na estrada conta como parte do seu dia de trabalho.
- **Alcance > velocidade de carregamento** se você puder carregar em todos os locais
- **Velocidade de carregamento > alcance** se você não puder evitar paradas na estrada — então você quer >100 kW DC
- **Congestão noturna** (16:00–22:00): tomadas públicas podem fornecer surpreendentemente pouca energia
- **Levar seu próprio carregador** é inteligente — independente da infraestrutura disponível
- **Carregadores rápidos são caros** — use-os apenas quando realmente necessário
- **Caminhões**: procure estações de carregamento, não carregadores rápidos regulares
- **Caminhão + sem carregador no teatro** = motorista dedicado necessário (lei de dirigir)