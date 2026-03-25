---
sidebar_position: 5
title: MAN Elétrico — Configuração do Plug & Charge
description: Guia passo a passo para habilitar o Plug & Charge nos caminhões elétricos MAN eTGX e eTGS por meio da plataforma RIO.
keywords: [MAN, eTGX, eTGS, RIO, Plug and Charge, ISO 15118, TRATON]
---

# MAN Elétrico — Configuração do Plug & Charge

A linha de caminhões elétricos da MAN (parte do grupo TRATON, juntamente com a Scania) suporta o Plug & Charge ISO 15118-2 nos modelos eTGX e eTGS. Os modelos eTGL e eTGM receberão suporte ao PnC por meio de uma atualização de firmware faseada durante 2026. A configuração é gerenciada por meio da plataforma RIO.

## Modelos Suportados

| Modelo | Opções de Bateria | Carga DC Máxima | Pronto para PnC |
|-------|-----------|---------------|:---------:|
| eTGX | Até 480 kWh | 375 kW (CCS) | ✅ |
| eTGS | Até 400 kWh | 250 kW (CCS) | ✅ |
| eTGL | Até 265 kWh | 150 kW (CCS) | ⚠️ Em implantação |
| eTGM | Até 265 kWh | 150 kW (CCS) | ⚠️ Em implantação |

## Requisitos

- Conta da plataforma RIO com acesso de gerenciador de frota
- eTGX/eTGS com firmware mais recente (fim de 2025+)
- Conta da frota Stroomlijnen com PnC habilitado ([Guia de Instalação](../setup-guide))

## Passo a Passo: Plataforma RIO

### 1. Acesso ao Gerenciamento de Carga

1. Faça login no [RIO](https://rio.cloud)
2. Navegue até **Serviços** → **Gerenciamento de Carga**
3. Se o Gerenciamento de Carga não for visível, é necessário ativá-lo — vá para **Marketplace** → procure por "Gerenciamento de Carga" → **Ativar**

### 2. Conectar Stroomlijnen

1. Vá para o Gerenciamento de Carga e clique em **Parceiros de Carga**
2. Clique em **Conectar novo parceiro**
3. Procure por **"Stroomlijnen B.V."** (ou use o ID eMSP `NL-STM`)
4. Clique em **Conectar & Autorizar**
5. Aceite os termos

### 3. Selecionar Veículos

1. Após conectar, a página do parceiro exibirá os veículos elegíveis
2. Marque as caixas de seleção para os caminhões que devem ter o PnC habilitado
3. Clique em **Salvar seleção**

### 4. Aguarde a Instalação do Certificado

- RIO ativa a provisionamento de certificado por meio do sistema de telemática da MAN
- O caminhão deve estar online com contato ligado
- **Importante:** A MAN usa um Módulo de Segurança de Hardware (HSM) para armazenamento de certificado. O HSM entra no modo de provisionamento durante os primeiros 30 minutos após a ligação do contato. Se o caminhão estiver estacionado com contato ligado por mais de 30 minutos sem receber o certificado, desligue e ligue novamente o contato para reativar o modo de provisionamento.
- **Tempo de instalação típico: 6–24 horas**

### 5. Verificar

Verifique o status do certificado tanto no RIO quanto na Frota Stroomlijnen Mijn. Teste em um carregador Stroomlijnen.

## Modo de Provisionamento do HSM — Importante

A arquitetura de segurança da MAN usa um módulo de segurança de hardware com uma janela de provisionamento específica:

1. Quando o contato do caminhão é ligado, o HSM entra no modo de provisionamento por 30 minutos
2. Durante essa janela, novos certificados podem ser instalados
3. Após 30 minutos, o HSM trava para evitar alterações não autorizadas de certificado
4. Para reabrir a janela: desligue o contato, aguarde 10 segundos e ligue novamente

**O que isso significa na prática:** Se você habilitar o PnC no portal RIO enquanto o caminhão está em uma viagem, o certificado será colocado na fila e instalado da próxima vez que o caminhão for iniciado (dentro da primeira janela de 30 minutos).

## Integração do Grupo TRATON

A MAN e a Scania fazem parte do grupo TRATON e compartilham alguma infraestrutura de backend. No entanto:

- Cada marca tem seu próprio portal de frota (RIO para MAN, My Scania para Scania)
- O PnC deve ser configurado separadamente em cada portal
- Certificados são específicos da marca e não podem ser transferidos

## Solução de Problemas

| Problema | Solução |
|---------|----------|
| "Gerenciamento de Carga" não está no RIO | Ative-o a partir do Marketplace do RIO |
| Certificado em processamento > 24 horas | Execute um ciclo de contato para reativar o modo de provisionamento do HSM |
| eTGL/eTGM exibe "PnC não disponível" | Atualização de firmware pode estar em andamento — verifique com o concessionário MAN |
| PnC funciona uma vez, então falha | O HSM pode ter um problema de conexão — diagnóstico do concessionário necessário |

---

**Próximo:** [Outros Caminhões →](./other-trucks)