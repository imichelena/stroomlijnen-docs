---
sidebar_position: 6
title: Gerenciamento de Energia e Conexão à Rede
description: Explicação sobre capacidade de conexão, potência contratada, redução de pico e carregamento inteligente para proprietários de prédios.
keywords: [capacidade de conexão, potência contratada, redução de pico, carregamento inteligente, conexão à rede, gerenciamento de carga]
---

# Gerenciamento de Energia e Conexão à Rede

Antes de instalar pontos de carregamento, é importante entender como funciona a sua conexão elétrica e como a infraestrutura de carregamento interage com ela.

## Dois Conceitos que Você Deve Conhecer

### Capacidade de Conexão

A **capacidade de conexão** é o máximo físico que a sua conexão à rede pode suportar — determinado pelos cabos e pela subestação da sua concessionária de energia. Isso é o limite absoluto.

**Typicamente para um teatro:** 400–2000 kVA (= 400–2000 kW por fase, dependendo do tamanho)

### Potência Contratada

A **potência contratada** é a potência máxima para a qual você tem um contrato com a sua concessionária de energia. Você paga uma tarifa fixa com base nessa potência. Se você consumir regularmente mais do que isso, pode ser multado ou precisar ajustar o seu contrato.

A potência contratada é geralmente **menor** do que a capacidade de conexão.

**Typicamente para um teatro:** 150–500 kW

---

:::dica Regra Geral
- **Capacidade de Conexão** = o que os cabos podem suportar (teto)
- **Potência Contratada** = o que você pagou por (contrato)
- **Consumo Atual** = o que você realmente usa (varia por hora)

Durante o dia, você geralmente tem muito espaço entre o seu consumo atual e a sua potência contratada. Esse espaço pode ser usado para carregar.
:::

---

## Como um Carregador DC se Relaciona com a Sua Conexão

Um carregador DC retira sua potência diretamente e rapidamente da sua conexão à rede. Um carregador DC de 60 kW retira 60 kW enquanto estiver ativo. Isso é:

| Tipo de Carregador | Potência | % de 270 kW contrato |
|---|---|---|
| Carregador AC (monofásico) | 3,7–7,4 kW | 1–3% |
| Carregador AC (trifásico) | 11–22 kW | 4–8% |
| Carregador DC | 50–150 kW | 18–55% |
| Carregador DC Rápido (caminhão) | 100–350 kW | 37–130% |

Um carregador DC único de 150 kW em um contrato de 270 kW ocupa mais da metade do espaço do seu contrato. Isso é perfeito durante o dia quando o teatro consome pouco — mas à noite, durante uma apresentação, pode causar problemas.

**A Solução: Redução de Pico / Gerenciamento de Carga**

---

## Redução de Pico e Carregamento Inteligente

A **redução de pico** (também conhecida como gerenciamento de carga ou carregamento inteligente) é um sistema que ajusta automaticamente a potência de carregamento com base na potência disponível no momento.

### Como Funciona

1. O sistema mede continuamente o consumo atual de energia do prédio
2. Calcula quanto espaço ainda há sob a sua potência contratada
3. A estação de carregamento recebe exatamente tanto poder quanto está disponível — não mais
4. Se a sala enche e o consumo aumenta, a potência de carregamento é automaticamente reduzida
5. Se o consumo diminui (por exemplo, após uma apresentação), a potência de carregamento volta a subir

### Resultado

- **Nunca** excede a sua potência contratada
- **Velocidade de Carregamento Máxima** quando possível
- **Nenhuma Ação Manual** necessária

```
Potência Contratada:     270 kW
Consumo do Teatro à Noite:       220 kW
Disponível para Carregar:       50 kW → estação de carregamento carrega a 50 kW

Consumo do Teatro Durante o Dia:      40 kW
Disponível para Carregar:      230 kW → estação de carregamento carrega a 150 kW (máximo da estação)
```

---

## Quando é Necessária uma Expansão da Rede?

Na maioria dos teatros, uma expansão da rede **não** é necessária para uma primeira estação de carregamento de 60–150 kW, desde que a redução de pico esteja instalada.

A expansão da rede se torna relevante quando você:
- Quer operar vários pontos de carregamento simultaneamente (>3 carregadores rápidos)
- Quer reservar capacidade de potência fixa para carregar (por exemplo, para garantias contratuais a transportadoras)
- Quer adicionar armazenamento de bateria (BSS) para capacidade de buffer adicional

:::nota Concessionária de Energia
Os tempos de espera para expansão da rede nos Países Baixos são atualmente de 5–10 anos em muitas regiões. O armazenamento de bateria (BSS) pode ser uma alternativa para superar o tempo de espera. Consulte a [ElaadNL Outlook Logistiek](https://elaadnl.nl) para obter números atuais sobre congestão da rede e infraestrutura de carregamento.
:::

---

## Armazenamento de Bateria como Buffer

Um Sistema de Armazenamento de Bateria (BSS) carrega quando o seu consumo de energia é baixo e fornece essa energia de volta às estações de carregamento nos momentos de pico. Isso permite potências de carregamento mais altas sem exceder a sua conexão à rede.

| Cenário | Sem BSS | Com BSS |
|---|---|---|
| Disponível Durante o Dia | 230 kW | 230 kW + buffer |
| Disponível à Noite | 50 kW | 50 kW + buffer do BSS |
| Potência de Carregamento Máxima à Noite | 50 kW | 150 kW (do BSS) |
```