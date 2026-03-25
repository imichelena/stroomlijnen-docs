---
sidebar_position: 1
title: Volvo Trucks — Configuração do Plug & Charge
description: Guia passo a passo para habilitar o Plug & Charge em caminhões elétricos Volvo FH, FM, FE e FL via Volvo Connect.
keywords: [Volvo, FH Elétrico, FM Elétrico, Volvo Connect, Plug and Charge, ISO 15118, carregamento de frota]
---

# Volvo Trucks — Configuração do Plug & Charge

A Volvo foi uma das primeiras montadoras de caminhões a dar suporte total ao ISO 15118-2 Plug & Charge. Todos os modelos elétricos atuais da Volvo (FH, FM, FE, FL) suportam o PnC com firmware v3.2 ou superior.

## Modelos Suportados

| Modelo | Opções de Bateria | Carregamento DC Máximo | Pronto para PnC |
|-------|-----------|---------------|:---------:|
| FH Elétrico | 540 kWh | 250 kW (CCS) | ✅ |
| FM Elétrico | 540 kWh | 250 kW (CCS) | ✅ |
| FE Elétrico | 265 kWh | 150 kW (CCS) | ✅ |
| FL Elétrico | 265 kWh | 150 kW (CCS) | ✅ |

## Requisitos

- Conta de gerenciamento de frota Volvo Connect com acesso de administrador
- Firmware do caminhão v3.2 ou superior (verifique em Volvo Connect → Veículo → Software)
- Conta de frota Stroomlijnen com PnC habilitado ([Guia de Instalação](../setup-guide))

## Passo a Passo: Volvo Connect

### 1. Verificar a Versão do Firmware

1. Faça login em [Volvo Connect](https://connect.volvotrucks.com)
2. Selecione seu veículo na lista de frota
3. Vá para **Detalhes do Veículo** → **Software**
4. Verifique se a versão do firmware é **3.2 ou superior**
5. Se não for, entre em contato com o concessionário Volvo para uma atualização

### 2. Habilitar Serviços de Carregamento

1. Vá para **Serviços** → **Serviços de Carregamento** no Volvo Connect
2. Se essa seção não estiver visível, peça ao administrador do Volvo Connect que habilite o módulo **eMobility** para sua conta
3. Clique em **Gerenciar Parceiros de Carregamento**

### 3. Autorizar Stroomlijnen

1. Encontre "Stroomlijnen B.V." na lista de parceiros de carregamento
   - Se não estiver listado, clique em **Adicionar Parceiro** e procure por "Stroomlijnen" ou use o código do parceiro `NL-STM`
2. Clique em **Autorizar**
3. Verifique as permissões:
   - ✅ Instalação de Certificado — Necessário para PnC
   - ✅ Identificação do Veículo — Necessária para vinculação de certificado
   - ❌ Dados de Localização — Não necessário, você pode recusar
4. Clique em **Confirmar Autorização**

### 4. Selecionar Veículos

1. Após a autorização, você verá uma tela para seleção de veículos
2. Marque as caixas de seleção para todos os caminhões que devem usar o PnC da Stroomlijnen
3. Clique em **Aplicar**

### 5. Instalação do Certificado

Após a autorização, o backend da Stroomlijnen enviará um pedido de instalação de certificado:

1. O pedido aparecerá em Volvo Connect → **Notificações** (geralmente dentro de 30 minutos)
2. O sistema da Volvo enviará o certificado de contrato para o caminhão
3. O caminhão deve estar **online** para recebê-lo (contato ligado ou conectado a um carregador AC)
4. A instalação geralmente é concluída dentro de **1–2 horas**

Você pode acompanhar o progresso em:
- **Volvo Connect** → Veículo → Serviços de Carregamento → Status do Certificado
- **Stroomlijnen Minha Frota** → Veículo → guia Plug & Charge

### 6. Verificar Instalação

Assim que o status mostrar "Ativo" em ambos os portais:

1. Dirija-se a um carregador Stroomlijnen
2. Conecte o cabo CCS
3. O carregador deve exibir "Plug & Charge — Autenticado" dentro de 5–10 segundos
4. O carregamento começará automaticamente

## Procedimento de Atualização do Firmware

Se o seu caminhão tiver firmware inferior a v3.2:

1. **Entre em contato com o concessionário Volvo** para uma atualização do firmware
2. As atualizações podem ser realizadas no concessionário (~2 horas)
3. Algumas atualizações estão disponíveis como **OTA (Over-The-Air)** — verifique Volvo Connect → Veículo → Atualizações de Software
4. Retorne à etapa 2 após a atualização

:::caution
Não tente atualizar o firmware do caminhão sozinho. As atualizações do firmware devem ser realizadas por um concessionário Volvo autorizado ou via o canal oficial OTA.
:::

## Solução de Problemas

### "Serviços de Carregamento" não visível no Volvo Connect
Sua assinatura do Volvo Connect pode não incluir o módulo eMobility. Entre em contato com o concessionário Volvo ou suporte do Volvo Connect para ativação.

### Certificado exibe mais de 24 horas "Em Processamento"
1. Verifique se o caminhão esteve online (contato ligado) por pelo menos 30 minutos após o pedido
2. Verifique o Volvo Connect por quaisquer pedidos de autorização pendentes
3. Entre em contato com o suporte da Stroomlijnen — podemos reativar o pedido do certificado

### PnC falha, mas certificado exibe "Ativo"
1. Verifique a tela do carregador para códigos de erro específicos
2. Tente usar um cabo CCS diferente (se disponível)
3. Desligue o contato do caminhão, aguarde 30 segundos e ligue novamente
4. Consulte o guia geral de [Solução de Problemas](../troubleshooting)

### Múltiplas Contas Volvo
Se sua frota for gerenciada por meio de várias contas do Volvo Connect (por exemplo, diferentes filiais), cada conta deve autorizar a Stroomlijnen separadamente. Entre em contato com o gerente de conta da Stroomlijnen para configuração de múltiplas contas.

---

**Próximo:** [Configurar DAF →](./daf)