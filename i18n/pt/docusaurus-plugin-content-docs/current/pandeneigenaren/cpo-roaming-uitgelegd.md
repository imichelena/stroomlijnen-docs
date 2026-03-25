---
sidebar_position: 10
title: CPO, eMSP e roaming explicados
description: O que são CPOs e eMSPs, como funciona o roaming entre redes de carregamento e quais protocolos são utilizados?
keywords: [CPO, eMSP, roaming, OCPI, OCPP, rede de carregamento, interoperabilidade, cartão de carregamento]
---

# CPO, eMSP e roaming explicados

O mundo do carregamento elétrico tem seu próprio jargão. Esta página explica os conceitos e papéis mais importantes.

## Os dois papéis no ecossistema de carregamento

### CPO — Operador de Pontos de Carregamento

Um **CPO** gerencia a infraestrutura física de carregamento. O CPO é responsável por:

- Instalação e manutenção de pontos de carregamento
- Comunicação entre o ponto de carregamento e o backoffice (via OCPP)
- Autorização de sessões de carregamento
- Medição e faturamento da energia fornecida
- Serviço de manutenção e monitoramento

Um CPO opera pontos de carregamento em uma ou mais localizações. Como proprietário do prédio, você tem um contrato com um CPO.

---

### eMSP — Fornecedor de Serviços de Mobilidade Elétrica

Um **eMSP** fornece serviços ao usuário final (motorista/gerente de frota):

- Emissão de cartões de carregamento (RFID) ou aplicativos
- Acesso roaming a pontos de carregamento de diferentes CPOs
- Fatura mensal para todas as sessões de carregamento
- Serviço de atendimento ao cliente

Um gerente de frota tem um contrato com um eMSP. Seus motoristas podem carregar em todos os pontos de carregamento que estão conectados via roaming.

:::nota Uma empresa pode ter ambos os papéis
Alguns fornecedores são tanto CPO quanto eMSP. Isso significa que eles gerenciam pontos de carregamento e emitem cartões de carregamento. Exemplos: Vattenfall, Shell Recharge, Allego, Eneco.
:::

---

## OCPP — o protocolo entre o ponto de carregamento e o backoffice

**OCPP (Open Charge Point Protocol)** é o padrão internacional aberto para comunicação entre um ponto de carregamento e o sistema de gerenciamento (backoffice) do CPO.

| Versão | Status | Características |
|---|---|---|
| OCPP 1.6 | Amplamente utilizado, instalações mais antigas | Funcionalidade básica |
| OCPP 2.0.1 | Padrão atual | Carregamento inteligente, V2G, segurança melhorada |
| OCPP 2.1 | Em desenvolvimento | MCS, V2G expandido |

**Por que o OCPP é importante para os proprietários de prédios:** Um ponto de carregamento que suporta OCPP não está vinculado a um único CPO. Você pode mudar de CPO sem substituir o hardware.

---

## OCPI — o protocolo para roaming

**OCPI (Open Charge Point Interface)** é o protocolo pelo qual os CPOs e eMSPs se comunicam entre si. Ele permite o roaming: um motorista com um cartão de um eMSP A pode carregar em um ponto de carregamento de um CPO B, e ambas as partes acertam a sessão automaticamente.

```
Motorista (cartão do eMSP A)
        ↓
Ponto de carregamento (CPO B)
        ↓ Conexão OCPI
Backoffice do CPO B → Backoffice do eMSP A
        ↓
Fatura para o gerente de frota
```

Quanto mais CPOs e eMSPs estiverem conectados via OCPI, maior será a rede à qual um motorista terá acesso.

---

## Roaming na prática

Na Holanda, a maioria dos grandes CPOs está conectada por meio de hubs de roaming. Os maiores hubs são:

| Hub | Papel |
|---|---|
| **Gireve** | Hub de roaming europeu, muitas redes grandes |
| **Hubject** | Roaming Plug & Charge (ISO 15118) |
| **e-Laad** | Operadores de rede holandeses (Nuon, Stedin etc.) |

Um cartão de carregamento de um eMSP holandês geralmente funciona em mais de 300.000 pontos de carregamento na Europa por meio desses hubs.

---

## O que isso significa para você como proprietário do prédio?

Se você instalar um ponto de carregamento com um CPO conectado a redes de roaming, **todos os motoristas com um cartão de carregamento válido** poderão carregar em seu ponto — não apenas clientes daquele CPO.

**Pergunte ao selecionar um CPO:**
- "Quais redes de roaming seus pontos de carregamento estão acessíveis?"
- "Os cartões de carregamento da Vattenfall, Shell Recharge e Allego funcionam em seus pontos?"

---

## Recursos relevantes

| Organização | Link |
|---|---|
| Open Charge Alliance (OCPP/OCPI) | [openchargealliance.org](https://openchargealliance.org) |
| ElaadNL (padrões técnicos NL) | [elaadnl.nl](https://elaadnl.nl) |
| Gireve (hub de roaming) | [gireve.com](https://gireve.com) |
| Hubject (Plug & Charge) | [hubject.com](https://hubject.com) |
| NAL (Agenda Nacional de Infraestrutura de Carregamento) | [agendalaadinfrastructuur.nl](https://agendalaadinfrastructuur.nl) |