---
sidebar_position: 4
title: Guia de Instalação Plug & Charge
description: Como configurar o Plug & Charge para sua frota por meio do portal Stroomlijnen — desde o registro até a primeira sessão automatizada.
keywords: [Configurar Plug and Charge, registro da frota, certificado de contrato, Portal Minha Frota, ativação PnC]
---

# Guia de Instalação Plug & Charge

Configurar o Plug & Charge para sua frota leva cerca de 15 minutos de trabalho no portal. Uma vez configurado, cada caminhão registrado se autentica automaticamente e carrega em qualquer localização Stroomlijnen — sem passes, sem aplicativos.

## Requisitos

Antes de começar:

- [ ] Uma **conta de frota Stroomlijnen** (registrar-se em [stroomlijnen.nl](https://stroomlijnen.nl) ou entrar em contato com o gerente de conta)
- [ ] Os **números de identificação do veículo (VIN)** de seus caminhões
- [ ] Acesso ao portal de frota do fabricante (Volvo Connect, DAF Connect, Fleetboard, etc.)
- [ ] Um **veículo compatível** (ver [Veículos Compatíveis](./compatible-vehicles))

## Etapa 1: Entrar no Meu Portal de Frota

Navegue até **my.stroomlijnen.nl** e faça login com suas credenciais de gerenciamento de frota.

Se você ainda não tiver uma conta:
1. Clique em **Registrar** e preencha as informações da sua empresa (número de registro, endereço de fatura)
2. Você receberá um e-mail de verificação — clique no link
3. Sua conta será revisada e ativada dentro de um dia útil

## Etapa 2: Adicionar Veículos

No painel do Meu Portal de Frota:

1. Vá para **Veículos** → **Adicionar Veículo**
2. Insira as informações do veículo:
   - **VIN** — Número de Identificação do Veículo (17 caracteres, no pilar da porta do motorista ou no certificado de registro)
   - **Placa** — Para identificação e relatórios
   - **Marca/Modelo** — Selecione a partir do menu suspenso (por exemplo, Volvo FH Electric)
   - **Apelido** — Opcional, para reconhecimento fácil (por exemplo, "Caminhão 014 — Rota Amsterdam")
3. Clique em **Salvar & Continuar**

Repita isso para cada caminhão em sua frota. Você também pode **importar em massa** via upload de CSV.

### Formato CSV

```csv
vin,placa,marca,modelo,apelido
YV2RT60A1PB123456,ABC-1234,Volvo,FH Electric,Caminhão 014
XLRAE75PC0H987654,DEF-5678,DAF,XF Electric,Caminhão 022
```

## Etapa 3: Ativar Plug & Charge

Para cada veículo:

1. Vá para **Veículos** → selecione um veículo → guia **Plug & Charge**
2. Defina **Ativar Plug & Charge** como LIGADO
3. O sistema irá:
   - Gerar um **Certificado de Contrato** para este veículo
   - Solicitar instalação via o Serviço de Provisionamento de Certificados do fabricante
   - Exibir status: `Aguardando → Instalando → Ativo`

:::nota Tempo de Instalação do Certificado
A instalação do certificado geralmente leva **1–24 horas**, dependendo do fabricante:
- **Volvo**: Geralmente dentro de 2 horas via Volvo Connect
- **DAF**: 4–8 horas via DAF Connect
- **Mercedes-Benz**: 2–6 horas via Fleetboard
- **Scania**: 4–12 horas via Scania Fleet Management
- **MAN**: 6–24 horas via plataforma RIO

O caminhão deve estar **online** (contato ligado ou conectado à carga) para o certificado ser entregue.
:::

## Etapa 4: Autorizar via Portal do Fabricante

Alguns fabricantes exigem que você aprove serviços de terceiros para PnC em seus portais de frota:

### Volvo Connect
1. Faça login no Volvo Connect → **Serviços** → **Serviços de Carga**
2. Procure "Stroomlijnen B.V." na lista de parceiros e clique em **Autorizar**
3. Confirme os veículos a serem incluídos
4. Veja o [Guia do Fabricante Volvo](./brand-guides/volvo-trucks) para etapas detalhadas

### DAF Connect
1. Faça login no DAF Connect → **Configurações** → **Parceiros de Carga**
2. Ative Stroomlijnen e selecione veículos
3. Veja o [Guia do Fabricante DAF](./brand-guides/daf) para etapas detalhadas

### Mercedes-Benz Fleetboard
1. Faça login no Fleetboard → **eMobility** → **Gerenciamento de Carga**
2. Adicione Stroomlijnen como fornecedor de carga
3. Veja o [Guia do Fabricante Mercedes](./brand-guides/mercedes-trucks) para etapas detalhadas

## Etapa 5: Verificar Ativação

Assim que o certificado for instalado:

1. No Meu Portal de Frota → **Veículos** → selecione veículo → guia **Plug & Charge**
2. Status deve exibir: **✅ Ativo**
3. Detalhes do certificado são exibidos:
   - EMAID (Identificador de Conta de Mobilidade Elétrica)
   - Data de vencimento do certificado
   - Última sessão PnC bem-sucedida (se disponível)

## Etapa 6: Testar

Dirija até uma localização Stroomlijnen e conecte o cabo. A sessão de carga deve começar dentro de 5–10 segundos sem ação manual.

**O que observar:**
- O display do carregador exibe "Plug & Charge — Verificado" (ou similar)
- A sessão aparece em Meu Portal de Frota → **Sessões** dentro de 1 minuto
- Nenhuma ação de RFID ou aplicativo foi necessária

## Solução de Problemas de Configuração

| Problema | Solução |
|---------|----------|
| Status do certificado permanece em "Aguardando" | Certifique-se de que o caminhão esteja online (contato ligado). Verifique o portal do fabricante por autorizações pendentes. |
| Portal do fabricante não exibe Stroomlijnen | Entre em contato conosco — pode ser necessário estabelecer a conexão de backend para sua conta específica do fabricante. |
| Certificado instalado, mas PnC falha | Veja o [Guia de Solução de Problemas](./troubleshooting) para diagnóstico detalhado. |
| Erro "EMAID não encontrado" no carregador | O certificado pode não ter sido transmitido para nossa backend. Aguarde 1 hora e tente novamente. |
| Erros de importação em massa | Verifique o formato do VIN (17 caracteres, sem O/I/Q), verifique se a codificação CSV é UTF-8. |

## Gerenciar Certificados

### Renovação
Certificados de contrato expiram após **2 anos**. O portal Meu Portal de Frota enviará notificações por e-mail 60, 30 e 7 dias antes do vencimento. A renovação é automática se sua assinatura de frota estiver ativa.

### Revogação
Se um caminhão for vendido, roubado ou retirado de serviço:
1. Vá para **Veículos** → selecione veículo → guia **Plug & Charge**
2. Clique em **Revogar Certificado**
3. O certificado será imediatamente invalidado em todas as redes de carregamento conectadas

### Transferência
Quando um caminhão é transferido para uma entidade de faturamento diferente dentro de sua organização:
1. Revogue o certificado atual
2. Registre o veículo novamente sob a nova entidade de faturamento
3. Um novo certificado será emitido

---

**Próximo:** [Guia do Fabricante →](./brand-guides/volvo-trucks)