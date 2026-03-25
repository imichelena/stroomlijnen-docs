---
sidebar_position: 3
title: Mercedes-Benz Caminhões — Configuração do Plug & Charge
description: Guia passo a passo para habilitar o Plug & Charge em caminhões Mercedes-Benz eActros e eEconic via Fleetboard.
keywords: [Mercedes-Benz, eActros, eEconic, Fleetboard, Plug and Charge, ISO 15118, Daimler Truck]
---

# Mercedes-Benz Caminhões — Configuração do Plug & Charge

A Mercedes-Benz (Daimler Truck) suporta o ISO 15118-2 Plug & Charge nos modelos eActros 600 e eActros 300. O eEconic deve receber suporte ao PnC por meio de uma atualização OTA no segundo trimestre de 2026. A configuração é gerenciada por meio da plataforma Fleetboard.

## Modelos Suportados

| Modelo | Opções de Bateria | Carga DC Máxima | Pronto para PnC |
|-------|-----------|---------------|:---------:|
| eActros 600 | Até 621 kWh | 400 kW (MCS/CCS) | ✅ |
| eActros 300 | Até 336 kWh | 160 kW (CCS) | ✅ |
| eEconic | Até 336 kWh | 160 kW (CCS) | ⚠️ Q2 2026 |

## Requisitos

- Conta Fleetboard com acesso de administrador para gerenciamento de frota
- Firmware do eActros com módulo de mobilidade elétrica (fornecido padrão desde o quarto trimestre de 2025)
- Conta da Stroomlijnen com PnC habilitado ([Guia de Instalação](../setup-guide))

## Passo a Passo: Fleetboard

### 1. Acessar Configurações de Mobilidade Elétrica

1. Faça login no [Fleetboard](https://fleetboard.com)
2. Navegue até **Mobilidade Elétrica** → **Gerenciamento de Carga**
3. Se estiver usando o novo portal **Daimler Truck Digital**, vá para **Serviços** → **Gerenciamento de Carga**

### 2. Adicionar Stroomlijnen como Fornecedor

1. Clique em **Fornecedores de Carga** no Gerenciamento de Carga
2. Clique em **Adicionar Fornecedor**
3. Procure por **"Stroomlijnen B.V."** (ou use o ID eMSP `NL-STM`)
4. Clique em **Conectar**
5. Aceite os termos de compartilhamento de dados (ID do veículo e troca de certificado)

### 3. Registrar Veículos para PnC

1. Vá para **Gerenciamento de Carga** → **Configurações de PnC do Veículo**
2. Faça o seguinte para cada eActros que deseja habilitar:
   - Clique na linha do veículo
   - Defina **Plug & Charge** como LIGADO
   - Selecione **Stroomlijnen** como fornecedor de carga preferencial (ou um dos vários)
3. Clique em **Salvar Alterações**

### 4. Implantação de Certificado

Após salvar:
1. O Fleetboard inicia a solicitação de certificado na Stroomlijnen
2. O certificado do contrato é gerado pelo nosso backend
3. Ele é enviado para o caminhão via unidade de telemática da Daimler Truck
4. **Tempo típico de implantação: 2–6 horas**
5. O caminhão deve estar online (contato ligado ou conectado a um carregador)

### 5. Verificar em Ambos os Portais

- **Fleetboard** → Mobilidade Elétrica → Veículo → Status do PnC: deve mostrar "Certificado Ativo"
- **Stroomlijnen Minha Frota** → Veículo → Plug & Charge: deve mostrar "✅ Ativo"

### 6. Primeira Sessão

Conecte o eActros a um carregador Stroomlijnen. O painel do eActros exibe o status de autenticação "Plug & Charge". A carga deve iniciar automaticamente dentro de 5–10 segundos.

## Vários Fornecedores de Carga

A Mercedes-Benz suporta vários fornecedores de PnC simultaneamente. Você pode ter certificados Stroomlijnen junto com certificados de outros fornecedores no mesmo veículo. O caminhão usa o certificado correto com base na rede do carregador.

## Fleetboard versus Daimler Truck Digital

A Daimler Truck está migrando do Fleetboard para a nova plataforma **Daimler Truck Digital**. Ambos os portais suportam atualmente o gerenciamento de PnC:

- **Fleetboard (legado):** Suporte completo ao PnC, bem documentado
- **Daimler Truck Digital (novo):** PnC disponível em Serviços → Gerenciamento de Carga

Se você migrar entre as plataformas, as configurações do PnC serão transferidas automaticamente.

## Solução de Problemas

### Seção "Mobilidade Elétrica" não Disponível no Fleetboard
- Certifique-se de que sua assinatura do Fleetboard inclui o módulo de mobilidade elétrica
- O módulo de mobilidade elétrica está incluído no Fleetboard Premium para veículos elétricos
- Entre em contato com seu concessionário Mercedes-Benz para verificação

### Certificado Mostra "Em Processamento" por um Período Mais Longo
1. Certifique-se de que o caminhão esteve online por pelo menos 2 horas
2. Verifique as Notificações do Fleetboard em busca de aprovações pendentes
3. Verifique se a unidade de telemática da Daimler Truck tem conexão de rede móvel (verifique a antena no caminhão)
4. Entre em contato com o suporte da Stroomlijnen para verificação do backend

### eActros 600 com Conector MCS
O eActros 600 suporta tanto CCS quanto MCS (Sistema de Carregamento Megawatt). O PnC funciona em ambos os tipos de conector nos locais da Stroomlijnen. Os carregadores MCS serão implantados em locais selecionados em 2026.

---

**Próximo:** [Outros Caminhões →](./other-trucks)