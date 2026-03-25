---
sidebar_position: 2
title: Gerenciamento de Veículos
description: Como registrar, configurar e gerenciar veículos elétricos no portal Mijn Vloot.
keywords: [gerenciamento de veículos, registro de frota, caminhão elétrico, VIN, atribuição de RFID, política de carregamento]
---

# Gerenciamento de Veículos

A seção Veículos do Mijn Vloot é o local onde você registra caminhões e vans, configura suas definições de carregamento e monitora seu status.

## Adicionar Veículos

### Veículo Único

1. Acesse **Veículos** → **Adicionar veículo**
2. Preencha os campos obrigatórios:
   - **VIN** — Número de Identificação do Veículo de 17 caracteres
   - **Placa** — Formato holandês ou da UE
   - **Marca & Modelo** — Selecione no menu de opções
   - **Ano de Fabricação** — Ano do modelo
   - **Capacidade da Bateria** — Em kWh (preenchido automaticamente para modelos conhecidos)
3. Campos opcionais:
   - **Apelido** — Para fácil identificação (por exemplo, "Amsterdam 014")
   - **Departamento/Grupo** — Para filtragem organizacional
   - **Centro de Custo** — Para alocação de faturas
4. Clique em **Salvar**

### Importação em Massa

Para frotas com muitos veículos:

1. Acesse **Veículos** → **Importar**
2. Baixe o modelo de CSV
3. Preencha as informações do veículo
4. Faça upload do arquivo CSV preenchido
5. Verifique a visão geral da importação — corrija quaisquer erros de validação
6. Clique em **Confirmar Importação**

## Detalhes do Veículo

A página de detalhes de cada veículo exibe:

### Status
- **Estado Atual** — Carregando / Inativo / Offline
- **Última Visualização** — Quando o veículo se comunicou com um carregador pela última vez
- **Nível da Bateria** — Se relatado pelo veículo durante a última sessão

### Configuração de Carregamento
- **Método de Autenticação** — PnC, RFID ou ambos
- **Status do Plug & Charge** — Ativado/Desativado, status do certificado
- **Passes RFID Atribuídos** — Quais passes estão vinculados a este veículo
- **Política de Carregamento** — Velocidade máxima de carregamento, objetivo de SoC desejado, janelas de carregamento agendadas

### Histórico de Sessões
- Lista de todas as sessões de carregamento passadas para este veículo
- Filtre por intervalo de datas, localização ou método de autenticação
- Energia total, custos totais e duração média da sessão

### Documentos
- Certificado de registro (upload opcional)
- Certificado de seguro (upload opcional)
- Dados de manutenção

## Política de Carregamento

Você pode definir a política de carregamento por veículo ou por grupo:

### Limite de Potência
Defina um limite máximo de potência. Útil para:
- Durabilidade da bateria (limitar a 80% do máximo)
- Controle de custos (potência mais baixa = menores custos de capacidade em alguns locais)

### Objetivo de SoC
Defina um nível de carregamento desejado (State of Charge). Quando atingido, o carregador reduz a potência ou para. Isso prolonga a vida útil da bateria e libera carregadores para outros veículos.

### Carregamento Agendado
Defina janelas de tempo em que o carregamento pode ocorrer. Útil para:
- Preços de eletricidade durante a noite
- Gerenciamento de carga na rede
- Otimização do horário de partida (carregar até 90% às 06:00)

### Prioridade
Quando vários veículos da frota estão no mesmo local e a potência é limitada, as configurações de prioridade determinam quais veículos recebem prioridade.

## Grupos de Veículos

Organize os veículos em grupos para um gerenciamento mais fácil:

- **Por Rota** — Rotas de Amsterdã, rotas de Rotterdam
- **Por Tipo** — Longa distância, entrega regional, última milha
- **Por Departamento** — Operações, entrega ao cliente

Os grupos podem ter políticas de carregamento e configurações de faturamento compartilhadas.

## Remover um Veículo

Quando um veículo deixa a frota:

1. Acesse **Veículos** → selecione o veículo → **Configurações**
2. Clique em **Remover Veículo**
3. Isso fará:
   - Revogar todos os certificados PnC ativos
   - Desvincular todos os passes RFID
   - Arquivar o histórico de sessões do veículo (ainda acessível para relatórios)
   - Parar a faturamento para este veículo

O veículo pode ser reativado se retornar à frota.

## Exportação de Dados

Exporte os dados dos veículos para integração com seus próprios sistemas:

- **Lista de Veículos** — CSV com todos os detalhes do veículo
- **Histórico de Sessões** — CSV por veículo ou para todos os veículos
- **API** — Acesso programático aos dados do veículo (consulte Visão Geral do Gerenciamento da Frota → API)