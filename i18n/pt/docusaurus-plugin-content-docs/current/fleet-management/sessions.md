---
sidebar_position: 3
title: Sessões de Carregamento
description: Monitore e analise as sessões de carregamento da sua frota elétrica no portal Stroomlijnen Mijn Vloot.
keywords: [sessões de carregamento, monitoramento de sessão, consumo de energia, histórico de carregamento, análise de frota]
---

# Sessões de Carregamento

Cada vez que um dos seus veículos carrega em uma localização Stroomlijnen, é criado um registro de sessão com dados completos — energia, custos, duração, curva de potência e método de autenticação.

## Sessões Ativas

A exibição **Sessões Ativas** mostra todos os veículos que estão carregando no momento:

- **Veículo** — Identificado por placa, apelido ou VIN
- **Localização** — Nome da localização de carregamento e ID específico do EVSE
- **Iniciado** — Data e hora de início da sessão
- **Duração** — Temporizador em execução
- **Energia** — kWh entregues até o momento (atualizado a cada 60 segundos)
- **Potência** — Potência de carregamento atual em kW
- **SoC** — Nível de carga da bateria (se relatado pelo veículo)
- **Método de Autenticação** — Plug & Charge, RFID ou aplicativo

Você pode clicar em qualquer sessão ativa para ver uma **curva de potência ao vivo** que mostra o perfil de carregamento em tempo real.

## Histórico de Sessões

A exibição de histórico mostra todas as sessões concluídas com opções de filtro:

### Filtros
- **Intervalo de Datas** — Datas personalizadas ou pré-configuradas (hoje, esta semana, este mês, últimos 30 dias)
- **Veículo** — Um veículo ou grupo de veículos
- **Localização** — Localização específica ou todas as localizações
- **Método de Autenticação** — PnC, RFID, aplicativo ou tudo
- **Energia Mínima** — Filtrar sessões muito curtas

### Detalhes da Sessão

Clique em uma sessão para ver:

- **Curva de Potência Completa** — Gráfico de kW ao longo do tempo, com início, platô e declínio
- **Detalhamento de Energia** — Total de kWh, pico de potência, potência média
- **Detalhamento de Custo** — Custos de energia (€/kWh), eventuais acréscimos, custo total
- **Dados do Veículo** — SoC no início e no fim (se relatado), VIN, placa
- **Dados do Carregador** — ID do EVSE, tipo de conector, versão do firmware
- **CDR** — Registro Detalhado de Carregamento conforme OCPI (baixável)

## Análise

O painel de análise oferece insights gerais da frota:

### Consumo de Energia
- Total de kWh por dia/semana/mês
- Detalhamento por veículo ou grupo de veículos
- Comparação entre períodos
- Tendências nos custos por kWh

### Indicadores de Eficiência
- Energia média por sessão
- Custo médio por kWh
- Ocupação (tempo de carregamento versus tempo de inatividade por veículo)
- Padrões de demanda de pico

### Análise de Localização
- Quais localizações sua frota usa mais
- Tempo médio de espera para um carregador livre
- Preços de energia por localização

## Notificações

Configure notificações para:

- **Sessões com Falha** — Uma sessão que foi iniciada, mas terminou de forma anormal
- **Sessões Longas** — Um veículo carrega por mais tempo do que um período definido
- **Custos Elevados** — Uma sessão excede um limite de custo
- **Limite de SoC** — O nível de carga da bateria de um veículo está abaixo de um mínimo antes de chegar a um carregador

Notificações são enviadas por e-mail e/ou exibidas no painel Mijn Vloot.

## Exportação e Integração

### Exportação CSV
Baixe qualquer exibição filtrada como arquivo CSV. As colunas contêm todos os detalhes da sessão, além de campos calculados, como custos por kWh e duração.

### API
Obtenha dados de sessão programaticamente:

```
GET /api/v1/sessions?start_date=2026-03-01&end_date=2026-03-31
GET /api/v1/sessions/{session_id}
GET /api/v1/sessions/active
```

### Webhooks
Receba notificações em tempo real quando as sessões são iniciadas, atualizadas ou concluídas:

```json
{
  "event": "session.completed",
  "session_id": "ses_abc123",
  "vehicle_vin": "YV2RT60A1PB123456",
  "energy_kwh": 287.4,
  "cost_eur": 34.49,
  "duration_minutes": 142,
  "location": "Theater De Flint, Amersfoort"
}
```

Configure webhooks via **Configurações** → **API** → **Webhooks**.

## Entendendo a Curva de Potência

Uma sessão típica de carregamento DC para um caminhão elétrico apresenta o seguinte padrão:

1. **Início** (0–3 min) — A potência aumenta à medida que o carregador e o veículo negociam e a bateria é pré-aquecida
2. **Platô** (3 min – 60%+ SoC) — Potência de carregamento máxima, frequentemente entre 150–350 kW, dependendo do modelo do caminhão
3. **Declínio** (60%+ SoC – SoC objetivo) — A potência diminui gradualmente à medida que a bateria se torna mais cheia, para proteger a saúde da célula
4. **Conclusão** — A sessão termina no SoC objetivo ou quando interrompida manualmente

Entender essa curva ajuda na planejamento: se você só precisar carregar de 20% para 80% do SoC, receberá a maior parte da energia durante a fase rápida do platô. Carregar de 80–100% leva um tempo desproporcionalmente mais longo.