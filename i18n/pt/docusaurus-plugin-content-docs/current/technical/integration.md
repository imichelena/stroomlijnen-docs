---
sidebar_position: 4
title: API & Integração
description: Visão geral da API REST da Stroomlijnen para integração com sistemas de gerenciamento de frotas — sessões, veículos, webhooks.
keywords: [API de carregamento, API de frota, integração, API REST, webhooks, OCPI, integração de sistema de gerenciamento de frotas]
---

# API & Integração

Para frotas que desejam integrar os dados de carregamento da Stroomlijnen em seus próprios sistemas de gerenciamento.

## Visão Geral da API REST

Nossa API oferece acesso programático a todas as funcionalidades de gerenciamento de frotas:

**URL Base:** `https://api.stroomlijnen.nl/v1`
**Autenticação:** Bearer-token (chave de API via portal → Configurações → API)
**Formato:** JSON
**Limite de Velocidade:** 100 requisições/minuto

## Pontos de Extremidade

### Sessões

```
GET /sessions                    — Obter sessões (paginadas, filtráveis)
GET /sessions/{id}               — Obter detalhes da sessão
GET /sessions/{id}/meter-values  — Obter leituras de medidor detalhadas
```

**Filtros:**
- `?from=2026-03-01&to=2026-03-31` — intervalo de datas
- `?vehicle=XX-123-YY` — por placa do veículo
- `?location=theater-carre` — por localização-slug
- `?status=completed` — por status (ativo, concluído, falhado)
- `?auth_method=plug_and_charge` — por método de autenticação

**Resposta:**
```json
{
  "id": "STM-2026-03-001234",
  "vehicle": {
    "vin": "YV2E4C1A1RB123456",
    "license_plate": "XX-123-YY",
    "nickname": "Truck 14"
  },
  "location": {
    "name": "Theater Carré, Amsterdam",
    "evse_id": "NL*STM*E001234*1"
  },
  "start_time": "2026-03-23T08:14:00+01:00",
  "end_time": "2026-03-23T10:47:00+01:00",
  "energy_kwh": 187.4,
  "max_power_kw": 148.2,
  "avg_power_kw": 73.8,
  "auth_method": "plug_and_charge",
  "cost": {
    "total": 18.74,
    "currency": "EUR",
    "tariff": "fleet-standard",
    "breakdown": {
      "energy": 18.74,
      "time": 0,
      "idle": 0
    }
  },
  "status": "completed"
}
```

### Veículos

```
GET    /vehicles         — Obter veículos da frota
POST   /vehicles         — Adicionar veículo
GET    /vehicles/{vin}   — Obter detalhes do veículo
PATCH  /vehicles/{vin}   — Atualizar veículo
DELETE /vehicles/{vin}   — Remover veículo
```

### Motoristas

```
GET    /drivers          — Obter motoristas
POST   /drivers          — Adicionar motorista
GET    /drivers/{id}     — Obter detalhes do motorista
PATCH  /drivers/{id}     — Atualizar motorista
DELETE /drivers/{id}     — Desativar motorista
```

### Localizações

```
GET /locations           — Obter todas as localizações disponíveis
GET /locations/{id}      — Obter detalhes da localização com status do carregador
```

### Faturas

```
GET /invoices            — Obter faturas
GET /invoices/{id}       — Obter detalhes da fatura
GET /invoices/{id}/pdf   — Baixar PDF
GET /invoices/{id}/csv   — Baixar CSV (dados de sessão)
```

## Webhooks

Receba notificações em tempo real para eventos:

### Configuração
1. Acesse **Portal → Configurações → Webhooks**
2. Adicione a URL do seu ponto de extremidade
3. Selecione os eventos que deseja receber
4. Enviamos um evento de teste para verificação

### Eventos Disponíveis

| Evento | Gatilho | Payload |
|-------|---------|---------|
| `session.started` | Nova sessão de carregamento iniciada | Objeto de sessão |
| `session.updated` | Dados da sessão atualizados (a cada 60s durante o carregamento) | Objeto de sessão |
| `session.completed` | Sessão concluída normalmente | Objeto de sessão com dados finais |
| `session.failed` | Sessão falhada (autenticação, energia, erro) | Objeto de sessão com erro |
| `vehicle.alert` | Certificado próximo do vencimento, problema de passe, etc. | Objeto de notificação |
| `invoice.created` | Nova fatura disponível | Visão geral da fatura |

### Formato do Webhook
```json
{
  "event": "session.completed",
  "timestamp": "2026-03-23T10:47:00Z",
  "data": { /* payload específico do evento */ }
}
```

**Política de Retentativa:** 3 tentativas com atraso exponencial (10s, 60s, 300s). Se todas falharem, o evento é registrado e disponibilizado via API para recuperação manual.

## Integração OCPI

Para integração eMSP/CPO-para-CPO, suportamos **OCPI 2.2.1**:
- **Módulo de Localizações** — disponibilidade de carregadores em tempo real
- **Módulo de Sessões** — dados de sessão ao vivo
- **Módulo CDR** — Registros de Detalhes de Carregamento
- **Módulo de Tarifas** — preços atuais
- **Módulo de Comandos** — iniciar/parar carregamento remoto

Entre em contato conosco para obter informações do ponto de extremidade OCPI e testes de integração.

## SDKs & Exemplos

Fornecemos exemplos em linguagens de programação comuns:

```python
# Exemplo em Python
import requests

API_KEY = "sua_chave_de_api_aqui"
BASE = "https://api.stroomlijnen.nl/v1"
headers = {"Authorization": f"Bearer {API_KEY}"}

# Obter as 10 últimas sessões
sessions = requests.get(f"{BASE}/sessions?limit=10", headers=headers)
for s in sessions.json()["data"]:
    print(f"{s['vehicle']['nickname']}: {s['energy_kwh']} kWh em {s['location']['name']}")
```

## Limites de Velocidade & Cotas

| Plano | Limite de Velocidade | Eventos de Webhook | Armazenamento de Dados |
|------|-----------|----------------|----------------|
| Padrão | 100 req./min | 1.000/dia | 12 meses |
| Profissional | 500 req./min | 10.000/dia | 24 meses |
| Empresa | 2.000 req./min | Ilimitado | 36 meses |

## Suporte

- **Problemas de API:** [api-support@stroomlijnen.nl](mailto:api-support@stroomlijnen.nl)
- **Página de Status:** [status.stroomlijnen.nl](https://status.stroomlijnen.nl)
- **Registro de Alterações:** As alterações da API são anunciadas 30 dias antes por e-mail