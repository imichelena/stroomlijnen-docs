---
sidebar_position: 7
title: Veículos de Passageiros — Plug & Charge
description: Como o Plug & Charge funciona para veículos de passageiros em estações de carregamento Stroomlijnen — BMW, Mercedes, Porsche, Audi, VW e mais.
keywords: [carros de passageiros, Plug and Charge, BMW, Mercedes, Porsche, Audi, VW, CCS, carro elétrico]
---

# Veículos de Passageiros — Plug & Charge

Embora as estações de carregamento da Stroomlijnen sejam projetadas para veículos comerciais, os carros de passageiros com conectores CCS também podem carregar em nossas estações. Muitos carros elétricos modernos já suportam o Plug & Charge.

## Como Funciona para Veículos de Passageiros

O Plug & Charge para veículos de passageiros funciona da mesma maneira que para caminhões — o veículo apresenta um certificado digital de contrato via ISO 15118, e o carregador autentica automaticamente.

A diferença está em **como o certificado chega ao carro**:
- Os carros geralmente recebem certificados PnC por meio do serviço de carregamento da fabricante (BMW Charging, Mercedes me Charge, etc.)
- O certificado PnC do carro pode estar vinculado à eMSP da fabricante, não diretamente à Stroomlijnen
- O roaming via Hubject permite o Plug & Charge em redes cruzadas — o certificado do carro funciona na Stroomlijnen por meio de roaming

## Marcas Suportadas

| Marca | Método PnC | Funciona na Stroomlijnen |
|------|-------------|:----------------------:|
| **BMW** | BMW Charging / Hubject | ✅ Via roaming |
| **Mercedes-Benz** | Mercedes me Charge / Hubject | ✅ Via roaming |
| **Porsche** | Porsche Charging Service / Hubject | ✅ Via roaming |
| **Audi** | myAudi / Hubject | ✅ Via roaming |
| **VW** | Volkswagen We Charge | ⚠️ Em implantação |
| **Hyundai** | Hyundai Bluelink | ⚠️ Dependente do mercado |
| **Kia** | Kia Connect | ⚠️ Dependente do mercado |
| **Tesla** | Supercharger PnC próprio | ❌ Não via ISO 15118 |
| **Stellantis** | — | ❌ Ainda não suportado |

### Como o Roaming PnC Funciona

1. Você ativa o PnC no aplicativo da fabricante do seu carro (por exemplo, BMW Charging no aplicativo My BMW)
2. A fabricante instala um certificado de contrato em seu carro
3. Quando você conecta o carro a uma estação de carregamento Stroomlijnen, o carro apresenta seu certificado
4. Nosso carregador valida o certificado por meio do pool de certificados da Hubject
5. A sessão é autorizada e faturada por meio do serviço de carregamento da fabricante
6. Você vê a sessão no aplicativo da fabricante (e nós a vemos em nossa área de backend)

**Atenção aos preços:** Ao carregar via roaming PnC, aplica-se o preço da sua eMSP (por exemplo, tarifa BMW Charging), não os preços de varejo da Stroomlijnen. Para obter os melhores preços em locais Stroomlijnen, você pode considerar solicitar uma conta de frota direta.

## Plug & Charge Direto para Veículos de Passageiros

Se você gerencia uma frota de veículos de passageiros (carros de empresa, por exemplo), você pode configurar o Plug & Charge direto da Stroomlijnen:

1. Registre os veículos em Minha Frota (mesmo procedimento que para caminhões)
2. Ative o PnC para cada veículo
3. Para marcas suportadas (BMW, Mercedes, Audi), nosso CPS envia certificados por meio da backend da fabricante
4. Você recebe os preços de frota diretos da Stroomlijnen em vez de taxas de roaming

Isso é especialmente valioso para frotas de carros de empresa onde o controle de custos é importante.

## Observações Práticas

### Compatibilidade Física
As estações de carregamento Stroomlijnen são projetadas para caminhões. Ao carregar um carro de passageiros:
- Estacione em uma vaga de estacionamento designada para carros, se disponível
- O cabo CCS pode ser mais pesado do que os cabos de carregamento padrão (projetados para conexões de caminhão)
- O alcance do cabo é suficiente — nossos cabos têm 5 m ou mais

### Velocidade de Carregamento
Nossos carregadores fornecem até 400 kW, mas o seu carro só absorve o que pode. Um carro de passageiros médio carrega a 50–250 kW, dependendo do modelo e do status da bateria.

### Encontrando Locais Amigáveis para Carros
Procure no aplicativo Stroomlijnen ou no mapa por locais que sejam indicados com ambos os ícones de caminhão e carro. Alguns locais têm vagas de estacionamento especiais para carros com suportes de cabo mais baixos.