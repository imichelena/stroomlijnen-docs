---
sidebar_position: 6
title: Outras Marcas de Caminhões — Plug & Charge
description: Status e informações de instalação do Plug & Charge para Scania, MAN, Renault Trucks, Ford Trucks, IVECO e Veículos Comerciais VW.
keywords: [Scania, MAN, Renault Trucks, IVECO, Plug and Charge, ISO 15118, caminhão elétrico]
---

# Outras Marcas de Caminhões — Plug & Charge

Esta página aborda a instalação do PnC para marcas de caminhões que ainda não têm um guia detalhado próprio. À medida que a adoção cresce, dividiremos isso em guias separados.

## Scania BEV

**Modelos:** R-serie BEV, P-serie BEV
**Status do PnC:** ✅ Suportado (firmware 2025.3+)
**Portal de Frota:** Gerenciamento de Frota Scania

### Etapas de Instalação

1. Faça login no [Gerenciamento de Frota Scania](https://my.scania.com)
2. Vá para **Eletroficação** → **Serviços de Carregamento**
3. Clique em **Adicionar Parceiro de Carregamento** → procure por "Stroomlijnen"
4. Autorize e selecione veículos
5. A Scania envia certificados via sua gateway de telemática
6. **Tempo de Instalação Típico: 4–12 horas**

### Observações
- A Scania requer a versão do firmware 2025.3 ou superior para suporte total ao PnC
- Firmwares mais antigos suportam comunicação ISO 15118, mas não o processamento de certificados de contrato
- Entre em contato com seu concessionário Scania para atualizações de firmware — atualizações OTA para PnC estão sendo implantadas gradualmente
- O sistema de telemática da Scania usa uma conexão móvel separada do infotainment do veículo — certifique-se de que a SIM de telemática esteja ativa

## MAN Elétrico

**Modelos:** eTGX, eTGS, eTGL, eTGM
**Status do PnC:** ✅ Suportado no eTGX/eTGS | ⚠️ Em implantação no eTGL/eTGM
**Portal de Frota:** Plataforma RIO

### Etapas de Instalação

1. Faça login no [RIO](https://rio.cloud)
2. Navegue até **Serviços** → **Gerenciamento de Carregamento**
3. Clique em **Conectar Parceiro** sob **Parceiros de Carregamento Externos**
4. Procure por **"Stroomlijnen B.V."** e clique em **Autorizar**
5. Selecione veículos e confirme
6. **Tempo de Instalação Típico: 6–24 horas**

### Observações
- A plataforma RIO é compartilhada pela MAN e por outras marcas TRATON
- O eTGX e o eTGS têm suporte total ao PnC desde o final de 2025
- O eTGL e o eTGM receberão suporte ao PnC via atualizações de firmware faseadas durante 2026
- Os certificados da MAN usam um módulo de segurança de hardware (HSM) no veículo — isso oferece excelente segurança, mas significa que os certificados só podem ser instalados quando o módulo de segurança do caminhão estiver no modo "provisioning" (primeiros 30 minutos após o contato)

## Renault Trucks E-Tech

**Modelos:** E-Tech T, E-Tech D, E-Tech Master (caminhão leve)
**Status do PnC:** ⚠️ Chegará no primeiro semestre de 2026
**Portal de Frota:** Gerenciamento de Frota Renault Trucks

### Status Atual
- O hardware ISO 15118-2 está presente nos E-Tech T e E-Tech D
- A ativação do software PnC é esperada via atualização OTA na primeira metade de 2026
- A Renault Trucks realiza testes de interoperabilidade PnC com a Hubject desde o terceiro trimestre de 2025
- O E-Tech Master não tem suporte ao ISO 15118

### O que Fazer Agora
1. Certifique-se de que sua conta do portal de frota esteja configurada com acesso de administrador
2. Registre seus veículos no portal Mijn Vloot da Stroomlijnen
3. Use passes RFID para carregar enquanto isso
4. Nós o informaremos quando o PnC estiver disponível para a Renault Trucks

## Ford Trucks

**Modelos:** F-MAX Elétrico
**Status do PnC:** ❌ Não suportado

### Status Atual
- O Ford F-MAX Elétrico (produzido pela Ford Otosan na Turquia) não suporta o ISO 15118 no momento
- A Ford Otosan anunciou suporte ao ISO 15118 em sua estratégia para o ano modelo 2027
- Use passes RFID ou o aplicativo Stroomlijnen para carregar

## IVECO

**Modelos:** S-eWay
**Status do PnC:** ⚠️ Anunciado para modelos 2026

### Status Atual
- A IVECO anunciou suporte ao ISO 15118-2 PnC para caminhões S-eWay do ano modelo 2026
- Modelos anteriores a 2026 não possuem o hardware ISO 15118 necessário
- Conversão não está disponível — o PnC requer módulos de comunicação instalados na fábrica
- Use passes RFID para os atuais caminhões S-eWay

## Veículos Comerciais VW

**Modelos:** ID. Buzz Cargo
**Status do PnC:** ⚠️ Suporte limitado

### Status Atual
- O ID. Buzz Cargo suporta o ISO 15118-2, mas o PnC é gerenciado via o ecossistema VW We Charge
- PnC entre provedores (usando certificados Stroomlijnen com veículos VW) é tecnicamente possível, mas requer configuração adicional
- Entre em contato com o suporte da Stroomlijnen para configuração PnC específica da VW

---

:::info Sua marca não encontrada?
Entre em contato conosco via [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl). Estamos expandindo ativamente o suporte ao PnC à medida que mais fabricantes de equipamentos originais ativam o ISO 15118.
:::

**Próximo:** [Solução de Problemas →](../troubleshooting)