---
sidebar_position: 3
title: Veículos Compatíveis
description: Quais caminhões elétricos, furgões e carros de passageiros suportam Plug & Charge nas estações de carregamento da Stroomlijnen.
keywords: [veículos compatíveis, Plug and Charge, caminhões elétricos, ISO 15118, Volvo, DAF, Mercedes, Scania, MAN]
---

# Veículos Compatíveis

A compatibilidade com Plug & Charge depende do suporte do veículo ao **ISO 15118-2** com processamento de certificado de contrato. Abaixo está o status atual para veículos frequentemente vistos em locais da Stroomlijnen.

:::info Atualizado março 2026
A compatibilidade evolui rapidamente. Estamos atualizando esta página à medida que os fabricantes de equipamentos originais (OEMs) lançam novas versões de firmware e modelos. Se o seu veículo não estiver listado, [entre em contato conosco](mailto:info@stroomlijnen.nl).
:::

## Caminhões Elétricos

| Fabricante | Modelo | Suporte PnC | Observações |
|-------------|-------|:-----------:|-------|
| **Volvo** | FH Electric | ✅ | Via Volvo Connect. Suporte total PnC a partir do firmware v3.2+ |
| **Volvo** | FM Electric | ✅ | Via Volvo Connect. Mesma plataforma que o FH Electric |
| **Volvo** | FE Electric | ✅ | Via Volvo Connect |
| **Volvo** | FL Electric | ✅ | Via Volvo Connect |
| **DAF** | XF Electric | ✅ | Via DAF Connect. Requer ativação pelo gerente de frota |
| **DAF** | XD Electric | ✅ | Via DAF Connect |
| **DAF** | XB Electric | ✅ | Via DAF Connect |
| **Mercedes-Benz** | eActros 600 | ✅ | Via Fleetboard. PnC disponível a partir do Q4 2025 |
| **Mercedes-Benz** | eActros 300 | ✅ | Via Fleetboard |
| **Mercedes-Benz** | eEconic | ⚠️ | PnC via atualização OTA esperada para o Q2 2026 |
| **Scania** | BEV R-serie | ✅ | Via Scania Fleet Management. Firmware 2025.3+ |
| **Scania** | BEV P-serie | ✅ | Via Scania Fleet Management |
| **MAN** | eTGX | ✅ | Via plataforma RIO. Suporte total PnC a partir do final de 2025 |
| **MAN** | eTGS | ✅ | Via plataforma RIO |
| **MAN** | eTGL/eTGM | ⚠️ | Implantação PnC em andamento, consulte o concessionário |
| **Renault Trucks** | E-Tech T | ⚠️ | Hardware ISO 15118-2 presente, ativação PnC via OTA esperada para H1 2026 |
| **Renault Trucks** | E-Tech D | ⚠️ | Mesma situação que o E-Tech T |
| **Ford Trucks** | F-MAX Electric | ❌ | ISO 15118 ainda não suportado. Apenas RFID/aplicativo |
| **IVECO** | S-eWay | ⚠️ | PnC anunciado para modelos de 2026 |

### Legenda

- ✅ **Suportado** — PnC funciona hoje nas estações de carregamento da Stroomlijnen
- ⚠️ **Em breve** — Hardware adequado, aguardando atualização de software
- ❌ **Não suportado** — Use passe RFID ou aplicativo

## Furgões Elétricos

| Fabricante | Modelo | Suporte PnC | Observações |
|-------------|-------|:-----------:|-------|
| **Mercedes-Benz** | eSprinter | ✅ | ISO 15118-2 a partir do ano de fabricação 2025 |
| **Mercedes-Benz** | eVito | ✅ | ISO 15118-2 a partir do ano de fabricação 2025 |
| **Volvo** | EM90 | ✅ | Via Volvo Connect |
| **Ford** | E-Transit | ⚠️ | Hardware adequado, ativação PnC varia por mercado |
| **MAN** | eTGE | ⚠️ | Suporte PnC limitado, consulte o concessionário |
| **Renault** | Master E-Tech | ❌ | Apenas RFID/aplicativo |
| **VW** | ID. Buzz Cargo | ⚠️ | PnC via backend da VW, requer contrato Volkswagen We Charge |
| **Fiat** | E-Ducato | ❌ | Sem suporte ISO 15118 |
| **Maxus** | eDeliver 7 | ❌ | Sem suporte ISO 15118 |

## Carros de Passageiros (CCS DC)

Embora as estações de carregamento da Stroomlijnen sejam projetadas para veículos comerciais, os carros de passageiros com conectores CCS também podem carregar em nossas estações. Suporte PnC:

| Fabricante | Suporte PnC | Observações |
|-------------|:-----------:|-------|
| **BMW** | ✅ | i4, iX, i5, i7 — via BMW Charging |
| **Mercedes-Benz** | ✅ | EQS, EQE, EQA, EQB — via Mercedes me Charge |
| **Porsche** | ✅ | Taycan, Macan Electric — via Porsche Charging Service |
| **Audi** | ✅ | e-tron GT, Q6 e-tron, Q8 e-tron — via myAudi |
| **VW** | ⚠️ | Série ID. — via Volkswagen We Charge, implantação em andamento |
| **Hyundai/Kia** | ⚠️ | Ioniq 5/6, EV6/9 — PnC varia por mercado e firmware |
| **Tesla** | ❌ | Usa o próprio Supercharger PnC, CCS PnC não suportado |
| **Marcas Stellantis** | ❌ | Sem suporte ISO 15118 PnC nos atuais modelos |

:::tip
Mesmo sem PnC, todos os veículos com conector **CCS Combo 2** podem carregar nas estações da Stroomlijnen via passe RFID ou aplicativo. O PnC simplesmente remove a necessidade de autenticação manual.
:::

## Verificar Seu Veículo

1. **Verifique o portal do fabricante** — Volvo Connect, DAF Connect, Fleetboard, RIO ou Scania Fleet Management exibe "Plug & Charge" ou configurações "ISO 15118"
2. **Verifique a versão do firmware** — Certifique-se de que seu veículo tenha o firmware mais recente (consulte [guias específicas de marca](./brand-guides/volvo-trucks))
3. **Entre em contato com seu concessionário** — Eles podem confirmar a possibilidade ISO 15118 e instalar certificados se necessário
4. **Entre em contato com a Stroomlijnen** — Podemos verificar a compatibilidade quando você se registrar em nosso portal

## Seu Veículo Não Está Listado?

Se o seu caminhão ou furgão não estiver listado, ainda pode funcionar. Novos modelos e atualizações de firmware são lançados regularmente. Entre em contato conosco via [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl) com a marca, modelo e VIN do seu veículo, e investigaremos.

---

**Próximo:** [Guia de Instalação →](./setup-guide)