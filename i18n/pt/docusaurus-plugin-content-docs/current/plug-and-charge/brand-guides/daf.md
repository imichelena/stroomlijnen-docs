---
sidebar_position: 2
title: Caminhões DAF — Configuração do Plug & Charge
description: Guia passo a passo para habilitar o Plug & Charge nos caminhões elétricos DAF XF, XD e XB via DAF Connect.
keywords: [DAF, XF Elétrico, XD Elétrico, XB Elétrico, DAF Connect, Plug and Charge, ISO 15118]
---

# Caminhões DAF — Configuração do Plug & Charge

A linha de caminhões elétricos da DAF — parte do grupo PACCAR — suporta o ISO 15118-2 Plug & Charge em todos os modelos BEV atuais. A configuração é gerenciada via DAF Connect, a plataforma de gerenciamento de frota.

## Modelos Suportados

| Modelo | Opções de Bateria | Carga DC Máxima | Pronto para PnC |
|-------|-----------|---------------|:---------:|
| XF Elétrico | Até 525 kWh | 350 kW (CCS) | ✅ |
| XD Elétrico | Até 350 kWh | 250 kW (CCS) | ✅ |
| XB Elétrico | Até 210 kWh | 175 kW (CCS) | ✅ |

## Requisitos

- Conta de gerenciamento de frota DAF Connect com acesso de administrador
- Software do veículo mais recente (verifique em DAF Connect → Veículo → Diagnóstico)
- Conta de frota Stroomlijnen com PnC habilitado ([Guia de Instalação](../setup-guide))

## Passo a Passo: DAF Connect

### 1. Acesso às Configurações de Carga

1. Faça login em [DAF Connect](https://dafconnect.paccar.com)
2. Navegue até **Gerenciamento de Frota** → **Mobilidade Elétrica**
3. Se você não vir a seção Mobilidade Elétrica, entre em contato com o suporte do DAF Connect para habilitá-la para sua conta

### 2. Configuração dos Parceiros de Carga

1. Vá até **Mobilidade Elétrica** → **Parceiros de Carga**
2. Clique em **Adicionar Parceiro de Carga**
3. Pesquise por **"Stroomlijnen"** ou insira o ID do parceiro `NL-STM`
4. Clique em **Adicionar e Autorizar**

### 3. Atribuição de Veículos

1. Após adicionar Stroomlijnen, vá até **Parceiros de Carga** → **Stroomlijnen B.V.**
2. Clique em **Gerenciar Veículos**
3. Selecione os caminhões que devem usar o PnC
4. Clique em **Salvar**

### 4. Aprovação da Instalação do Certificado

1. O DAF Connect exibirá uma notificação para aprovar a instalação do certificado
2. Verifique os detalhes da solicitação (veículos, permissões)
3. Clique em **Aprovar**
4. Os certificados de contrato serão enviados para os caminhões selecionados

### 5. Aguarde a Instalação

- A entrega do certificado geralmente leva **4–8 horas**
- O caminhão deve estar online (contato ligado ou conectado à energia)
- Verifique o status em DAF Connect → **Mobilidade Elétrica** → **Status do Certificado**

### 6. Verificar e Testar

1. Verifique o status tanto no DAF Connect quanto na Frota Stroomlijnen
2. Conecte-se a um carregador Stroomlijnen para verificar a autenticação automática
3. A primeira sessão PnC confirma que tudo está funcionando

## Observação sobre Ativação pelo Gerente de Frota

A DAF exige que o **gerente de frota** (e não os motoristas individuais) ative o PnC para cada veículo. Isso é uma função de segurança — apenas gerentes de frota autorizados podem habilitar a faturamento automático em veículos da empresa.

Se sua organização tiver vários gerentes de frota:
- Cada um pode ativar o PnC para os veículos sob seu gerenciamento
- Um super-gerente pode delegar direitos de Mobilidade Elétrica

## Solução de Problemas

### Seção "Mobilidade Elétrica" não visível
Essa função requer uma assinatura Premium do DAF Connect. Entre em contato com seu revendedor DAF para verificar o nível da sua assinatura.

### Instalação do certificado leva mais de 24 horas
1. Verifique se o caminhão esteve online por pelo menos 1 hora após a aprovação
2. Verifique o DAF Connect por mensagens de erro em Mobilidade Elétrica → Notificações
3. Entre em contato com o suporte da Stroomlijnen para verificar se o pedido foi recebido

### Autenticação falha no carregador
1. Verifique no DAF Connect se o status do certificado é "Ativo"
2. Verifique se o software do veículo está atualizado
3. Reinicie o veículo (ciclo de contato completo)
4. Consulte o guia geral de [Solução de Problemas](../troubleshooting)

---

**Próximo:** [Configuração do Mercedes-Benz →](./mercedes-trucks)