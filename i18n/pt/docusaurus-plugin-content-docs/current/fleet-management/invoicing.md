---
sidebar_position: 4
title: Faturamento
description: Como funciona o faturamento da carga de frota da Stroomlijnen — faturas mensais, especificações de custos, métodos de pagamento e documentação fiscal.
keywords: [faturamento, cobrança, custos de carga de frota, fatura mensal, IVA, preços por kWh, conta de frota]
---

# Faturamento

A Stroomlijnen oferece faturamento transparente e detalhado para todas as atividades de carga da sua frota. As faturas são emitidas mensalmente e contêm desmembramentos por sessão.

## Modelo de Tarifa

Os clientes de frota são faturados com base no consumo de energia:

- **Custos de Energia** — tarifa de €/kWh de acordo com o contrato da sua frota
- **Sem custos de sessão** — Ao contrário do carregamento público, não cobramos taxas de início por sessão
- **Sem custos baseados no tempo** — Você paga pela energia, não pelo tempo de estacionamento
- **Descontos de volume** — Disponíveis para frotas que ultrapassam os limites mensais de energia (verifique o contrato)

A tarifa do seu contrato é visível em **Minha Frota** → **Configurações** → **Faturamento** → **Cartão de Tarifa**.

## Fatura Mensal

As faturas são geradas na **1ª de cada mês** para as atividades de carga do mês anterior.

### Conteúdo da Fatura

Cada fatura contém:

- **Resumo** — Total de energia (kWh), total de custos (€), número de sessões, número de veículos
- **Desmembramento por veículo** — Energia e custos por veículo
- **Detalhe por sessão** — Data, hora, localização, ID do EVSE, kWh, custos, método de autenticação
- **Detalhes fiscais** — IVA (21%) calculado e exibido separadamente
- **Condições de pagamento** — 14 dias líquidos

### Formatos de Fatura

- **PDF** — Documento de fatura formatado para sua administração
- **CSV** — Detalhe legível por máquina para importação em sistemas de contabilidade/ERP
- **UBL** — Linguagem de Negócios Universal XML para processamento automatizado de faturas (padrão holandês)

Todos os formatos estão disponíveis via **Minha Frota** → **Faturamento** → **Download**.

## Métodos de Pagamento

### Débito Automático (SEPA)
O método de pagamento preferido para clientes de frota:
1. Acesse **Configurações** → **Faturamento** → **Método de Pagamento**
2. Clique em **Configurar débito automático**
3. Insira seu IBAN e autorize o mandato SEPA
4. As faturas serão debitadas automaticamente 14 dias após a emissão

### Transferência Bancária
Para clientes que pagam manualmente:
- Os dados de pagamento estão em cada fatura
- Referência: Número da fatura (formato: `STM-2026-XXXXX`)
- Banco: ING Bank, NL
- Data de vencimento: 14 dias após a data da fatura

## Atribuição de Custos

### Por Local de Custo
Se os seus veículos forem atribuídos a locais de custo na seção Veículos, as faturas podem conter desmembramentos por local de custo. Isso está diretamente relacionado à sua contabilidade interna.

### Por Departamento/Grupo
Os grupos de veículos são refletidos no detalhe da fatura, tornando fácil distribuir os custos entre departamentos.

### Atribuição Personalizada
Você tem uma lógica de atribuição específica? Podemos configurar agrupamentos de faturas personalizados para sua organização. Entre em contato com o seu gerente de conta.

## Impostos e Conformidade

### IVA
- Todos os preços são indicados **sem IVA**
- O IVA de 21% é adicionado a todas as faturas
- O número do IVA está em cada fatura (Stroomlijnen B.V., KVK 93264526)

### Imposto sobre Energia
- O imposto sobre energia está incluído na tarifa por kWh, quando aplicável
- A tarifa depende da categoria de conexão à rede da localização
- Isso é transparente — verifique o seu contrato para a especificação

### Relatório CSRD/ESG
Para empresas com obrigações de relatórios de sustentabilidade:
- Fornecemos **certificados de energia anuais** que mostram o consumo total de energia renovável
- Os cálculos de CO₂ evitado estão incluídos no relatório anual da frota
- O formato de dados é compatível com os principais frameworks de relatórios ESG

## Disputas e Correções

Se você acredita que uma fatura contém um erro:

1. Acesse **Faturamento** → selecione a fatura → **Disputar**
2. Selecione a(s) sessão(ões) relevante(s)
3. Descreva o problema
4. Nossa equipe de faturamento investigará e responderá dentro de 5 dias úteis
5. As correções serão processadas como crédito na próxima fatura

## Faturas Históricas

Todas as faturas são **armazenadas por 7 anos** (obrigação legal holandesa) e estão disponíveis no portal Minha Frota. Você também pode configurar o envio automático de faturas para endereços de e-mail adicionais via **Configurações** → **Faturamento** → **Destinatários de Fatura**.