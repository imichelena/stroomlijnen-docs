---
sidebar_position: 1
title: O que é Plug & Charge?
description: "Quando um caminhão compatível com Plug & Charge se conecta à nossa estação de carregamento, a cobrança começa automaticamente — sem cartão, sem aplicativo, sem ação do motorista necessária."
keywords: [Plug and Charge, ISO 15118, carregamento automático, caminhão elétrico, carregamento de frota, PnC]
---

# O que é Plug & Charge?

**Quando um caminhão compatível com Plug & Charge se conecta à nossa estação de carregamento, a cobrança começa automaticamente — sem cartão, sem aplicativo, sem ação do motorista necessária.**

Isso é tudo. Conectar, sair, voltar com o caminhão carregado. A estação de carregamento e o caminhão cuidam da autenticação, autorização e cobrança entre si.

## O Problema que Plug & Charge Resolve

Atualmente, a maioria das sessões de carregamento exige que o motorista:
1. Tenha o cartão ou aplicativo correto
2. Saiba qual rede gerencia essa estação de carregamento
3. Passe o cartão, escaneie um código QR ou inicie uma sessão no aplicativo
4. Aguarde a autorização
5. E então conecte

Para um proprietário de carro que carrega uma vez por semana, isso é uma leve fricção. Para uma frota com 20 caminhões e vários motoristas em turnos, é um fardo operacional:

- Motoristas esquecem os cartões
- Cartões são perdidos ou danificados
- Novos motoristas precisam ser treinados
- Diferentes redes de carregamento exigem diferentes aplicativos
- Veículos compartilhados exigem cartões compartilhados (risco de segurança)
- Cada autenticação mal-sucedida é tempo de carregamento perdido

### O Custo Real da Fricção

Para uma frota de 20 caminhões elétricos:
- Em média, **3 minutos** por sessão de problemas de autenticação
- Em média, **2 sessões de carregamento** por caminhão por dia
- Isso é **120 minutos por dia** — duas horas de tempo do motorista desperdiçadas em cartões
- Com custos de motorista totalmente carregados de €35/hora: **€1.225/mês** em produtividade perdida
- Além de sessões mal-sucedidas, chamadas de suporte e motoristas frustrados

## Como Plug & Charge Resolve Isso

Com Plug & Charge:
1. O motorista conecta o cabo
2. **Pronto.**

O certificado a bordo do caminhão cuida de tudo. A estação de carregamento sabe quem você é, a qual frota pertence e para onde enviar a fatura — tudo trocado criptograficamente em menos de 5 segundos.

Sem cartões para perder. Sem aplicativos para instalar. Sem treinamento necessário. Sem diferença entre um motorista do primeiro dia e um veterano de 10 anos.

## Quem Pode Usá-lo?

Plug & Charge requer:

1. **Um veículo compatível** — o caminhão ou furgão deve suportar ISO 15118-2 ou superior. Veja nossa lista de [Veículos Compatíveis](/docs/plug-and-charge/compatible-vehicles).
2. **Uma estação de carregamento compatível** — deve suportar ISO 15118 e estar conectada a um ecossistema Plug & Charge. Todas as estações de carregamento Stroomlijnen suportam isso.
3. **Provisionamento de certificado** — seu veículo precisa de um certificado de contrato. Nós cuidamos disso por meio de nosso portal.

## É Seguro?

Sim. Plug & Charge usa o mesmo tipo de criptografia que protege o banking online:

- **Certificados X.509** — cada veículo tem um certificado digital único
- **PKI (Infraestrutura de Chave Pública)** — uma cadeia de confiança do veículo ao eMSP
- **Criptografia TLS** — toda a comunicação entre o veículo e a estação de carregamento é criptografada
- **Nenhum dado sensível exposto** — o cabo transporta dados de certificado criptografados, não números de conta

Um veículo roubado pode ser desativado remotamente revogando o certificado. Um passe RFID, por outro lado, funciona até que alguém note que ele está faltando.

:::info
Plug & Charge é **mais seguro** do que passes RFID. Passes podem ser clonados (embora passes modernos tornem isso difícil). Certificados não — eles usam criptografia assimétrica com chaves de 256 bits.
:::

## O Caso de Negócios

Para gerentes de frota, Plug & Charge não é apenas conveniente — é uma economia de custos:

| Fator | RFID | Plug & Charge |
|--------|------|---------------|
| Tempo do motorista por sessão | 2–5 minutos | 0 minutos |
| Carga de trabalho administrativo para passes | Alta | Nenhum |
| Risco de perda/roubo | Real | N/A |
| Processo de treinamento para novos motoristas | Entregar passe, explicar processo | "Apenas conectar" |
| Veículos com vários turnos | Passes compartilhados (arriscado) | Automático por veículo |
| Tempo de manutenção mensal | Horas | Minutos |

## Em Ação

Pronto para configurar Plug & Charge para sua frota?

1. **[Verifique a compatibilidade do veículo](/docs/plug-and-charge/compatible-vehicles)** — o seu caminhão suporta?
2. **[Entenda como funciona](/docs/plug-and-charge/how-it-works)** — a tecnologia por trás
3. **[Configure](/docs/plug-and-charge/setup-guide)** — passo a passo em nosso portal
4. **[Guias específicos de marca](/docs/plug-and-charge/brand-guides/volvo-trucks)** — instruções detalhadas por fabricante