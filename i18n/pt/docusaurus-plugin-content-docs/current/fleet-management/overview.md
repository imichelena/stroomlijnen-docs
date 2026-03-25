---
sidebar_position: 1
title: Visão Geral do Gerenciamento de Frota
description: Gerencie o carregamento da sua frota elétrica com o portal Minha Frota da Stroomlijnen — veículos, sessões, faturamento e gerenciamento de motoristas.
keywords: [gerenciamento de frota, portal Minha Frota, frota elétrica, gerenciamento de carregamento, painel de frota]
---

# Visão Geral do Gerenciamento de Frota

O portal **Minha Frota** da Stroomlijnen fornece aos gerentes de frota uma visão completa e controle sobre as atividades de carregamento de veículos elétricos. Em um único painel, você pode gerenciar veículos, monitorar sessões de carregamento em tempo real, controlar custos e gerar relatórios.

## Acesso ao Minha Frota

Acesse **my.stroomlijnen.nl** e faça login com suas credenciais de gerente de frota. Novos usuários devem se registrar com o número do CNPJ da sua empresa e ser aprovados por um gerente de conta da Stroomlijnen.

## Painel

O painel principal exibe:

- **Status da Frota** — Quantos veículos estão carregando, parados ou em movimento no momento
- **Energia de Hoje** — Total de kWh fornecido à sua frota hoje
- **Sessões Ativas** — Visão geral em tempo real de todas as sessões de carregamento atuais com curvas de potência
- **Notificações** — Certificados vencidos, sessões falhas ou padrões de carregamento incomuns
- **Visão Geral do Mês** — Total de custos correntes e comparação com o mês anterior

## Principais Funcionalidades

### Gerenciamento de Veículos
Registre, configure e monitore todos os seus veículos elétricos em um único local. Ative o Plug & Charge, atribua passes RFID e defina políticas de carregamento por veículo ou grupo.

→ [Detalhes do Gerenciamento de Veículos](./vehicles)

### Monitoramento de Sessões
Acompanhe cada sessão de carregamento — passada e presente. Veja a energia fornecida, duração, custos, método de autenticação e localização da estação de carregamento. Exporte para CSV ou integre via API.

→ [Detalhes das Sessões](./sessions)

### Faturamento
Faturas mensais com detalhamentos por veículo, localização e data. Baixe faturas em PDF, receba análise de custos por quilômetro e defina faturamento automático.

→ [Detalhes do Faturamento](./invoicing)

### Gerenciamento de Motoristas
Atribua motoristas a veículos, forneça passes RFID pessoais e defina limites de carregamento por motorista. Os motoristas podem usar o aplicativo Stroomlijnen para encontrar estações de carregamento e iniciar sessões.

→ [Detalhes do Gerenciamento de Motoristas](./driver-management)

## Papéis dos Usuários

| Papel | Permissões |
|------|-------------|
| **Gerente de Frota** | Acesso completo: veículos, faturamento, PnC, usuários, chaves API |
| **Gerente de Frota** | Gerenciamento de veículos, monitoramento de sessões, relatórios |
| **Gerente de Faturas** | Acesso a faturas, métodos de pagamento, relatórios de custos |
| **Motorista** | Visualização de sessões próprias, busca de estações de carregamento, início/parada de sessões |

## Acesso à API

Para empresas que desejam integrar dados de carregamento em seus próprios sistemas de gerenciamento de frota ou ERP, oferecemos uma API REST:

- Webhooks de sessão em tempo real
- Dados históricos de sessão
- Gerenciamento de veículos e motoristas
- Consulta de faturas

A documentação da API está disponível no portal Minha Frota em **Configurações** → **API**.

## Começando

1. [Registre sua frota](https://stroomlijnen.nl/fleet-signup) ou entre em contato com seu gerente de conta
2. [Adicione seus veículos](./vehicles)
3. [Ative o Plug & Charge](../plug-and-charge/setup-guide) ou [fornecer passes RFID](../getting-started/rfid-cards)
4. Inicie o carregamento — todas as sessões serão automaticamente registradas e faturadas