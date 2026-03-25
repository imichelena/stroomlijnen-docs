---
sidebar_position: 100
title: Perguntas Frequentes
description: Perguntas frequentes sobre Stroomlijnen carregamento de caminhões elétricos — Plug & Charge, taxas, RFID, gerenciamento de frotas e mais.
keywords: [Perguntas Frequentes, perguntas frequentes, carregamento de veículos elétricos, Plug and Charge, carregamento de frotas, RFID, preços]
---

# Perguntas Frequentes

## Geral

### 1. O que é Stroomlijnen?
Stroomlijnen é uma operadora holandesa de pontos de carregamento (CPO) e provedora de serviços de mobilidade elétrica (eMSP) especializada em carregamento de alta potência DC para caminhões elétricos. Nós instalamos infraestrutura de carregamento em teatros, hubs logísticos e locais estratégicos em toda a Holanda.

### 2. Por que teatros?
Teatros possuem grandes conexões elétricas (para iluminação, som e instalações de palco), estacionamentos acessíveis para caminhões (para entregas de conjuntos de palco) e estão disponíveis à noite quando os caminhões geralmente carregam. Uma combinação lógica — nós utilizamos infraestrutura existente que, de outra forma, ficaria inutilizada à noite.

### 3. Quais veículos podem carregar em Stroomlijnen?
Qualquer veículo com uma tomada **CCS Combo 2** pode carregar em nossas estações de carregamento DC. Isso inclui caminhões elétricos, vans, ônibus e carros de passageiros. Nossos carregadores fornecem até 400 kW, mas se adaptam à potência máxima que o veículo pode suportar.

### 4. Onde estão localizados os carregadores Stroomlijnen?
Principalmente na Holanda, com planos de expansão para a Bélgica e a Alemanha. Consulte nosso [mapa de carregadores](./locations/finding-charger) para todas as locais atuais.

### 5. Os carros de passageiros podem usar os carregadores?
Sim. Embora nossos carregadores sejam projetados e posicionados para veículos comerciais, qualquer carro equipado com CCS também pode carregar. Tenha em mente que as vagas para caminhões podem ter bordas mais altas ou uma disposição diferente do que um posto de carregamento padrão para carros de passageiros.

## Plug & Charge

### 6. O que é Plug & Charge?
Plug & Charge significa que o seu caminhão se autentica automaticamente e começa a carregar assim que você conecta o cabo — sem cartão, sem aplicativo, sem ação do motorista. Ele utiliza certificados digitais ISO 15118 incorporados no veículo. Veja [O que é Plug & Charge?](./plug-and-charge/what-is-pnc) para mais detalhes.

### 7. O Plug & Charge é seguro?
Sim — até mesmo mais seguro do que passes RFID. PnC usa autenticação mútua TLS e certificados digitais (a mesma tecnologia usada no banking online). Certificados são vinculados ao VIN do veículo e armazenados em um módulo de segurança de hardware, tornando a clonagem extremamente difícil.

### 8. Quais caminhões suportam Plug & Charge?
A maioria dos grandes fabricantes de caminhões elétricos agora suporta PnC: Volvo, DAF, Mercedes-Benz, Scania e MAN. Veja nossa [lista de veículos compatíveis](./plug-and-charge/compatible-vehicles) para todos os detalhes.

### 9. Quanto tempo leva para configurar o Plug & Charge?
Aproximadamente 15 minutos de configuração do portal, seguidos de 1–24 horas para a instalação do certificado no veículo (dependendo do fabricante). Veja o [guia de instalação](./plug-and-charge/setup-guide).

### 10. Posso usar Plug & Charge E RFID ao mesmo tempo?
Sim. PnC e RFID podem coexistir. Se o PnC falhar por qualquer motivo, o motorista sempre pode recorrer ao passe RFID. O carregador tenta primeiro o PnC; se o PnC não autenticar dentro de 15 segundos, é solicitado um passe RFID.

## Taxas e Faturamento

### 11. Quanto custa carregar?
Os clientes de frotas recebem uma taxa contratual de €/kWh. Não há taxas de sessão ou baseadas no tempo — você paga apenas pela energia consumida. Entre em contato para obter uma cotação de preço de frota.

### 12. Como funciona a faturação?
Faturas mensais com detalhes de sessão, disponíveis como PDF, CSV ou UBL XML. As faturas são geradas na primeira dia de cada mês. Veja [Faturamento](./fleet-management/invoicing) para detalhes.

### 13. Você oferece descontos por volume?
Sim. Frotas que excedem os limites mensais de energia se qualificam para taxas escalonadas. Entre em contato com o seu gerente de conta ou envie um e-mail para [sales@stroomlijnen.nl](mailto:sales@stroomlijnen.nl) para detalhes.

### 14. Os usuários de roaming podem carregar em Stroomlijnen?
Sim, por meio de nossas conexões de roaming Hubject e OCPI. Usuários com passes de carregamento de outros provedores podem tocar e carregar. As taxas de roaming podem variar das taxas diretas da frota.

## Passes RFID

### 15. Como obtenho passes RFID?
Peça através do [portal Mijn Vloot](./getting-started/rfid-cards) ou entre em contato com o seu gerente de conta. Os passes são enviados dentro de 3 dias úteis e requerem ativação.

### 16. O que acontece se um passe RFID for perdido ou roubado?
Desative o passe imediatamente através do Mijn Vloot → Passes RFID → selecione o passe → Desativar. O passe é bloqueado em todos os carregadores Stroomlijnen dentro de segundos. Peça um substituto através do portal.

### 17. Um passe RFID pode funcionar em vários veículos?
Sim. Os passes RFID estão vinculados à sua conta de frota, não a um veículo específico. Cada passe atribuído à sua frota pode iniciar uma sessão de carregamento em qualquer carregador para qualquer um dos seus veículos.

## Técnico

### 18. Qual versão do OCPP os seus carregadores usam?
Todos os novos carregadores usam **OCPP 2.0.1**. Algumas instalações mais antigas usam OCPP 1.6-J. Ambos são totalmente suportados pelo nosso CSMS. Veja [Visão geral do OCPP](./technical/ocpp-overview).

### 19. Vocês suportam carregamento inteligente / distribuição de tarefas?
Sim. Nosso CSMS distribui dinamicamente a potência entre os carregadores em cada local com base na capacidade da rede, prioridade do veículo e otimização baseada no horário. Veja [Visão geral do OCPP → Carregamento inteligente](./technical/ocpp-overview#smart-charging).

### 20. Posso integrar os dados de carregamento com o meu sistema de gerenciamento de frotas?
Sim. Nós oferecemos uma API REST com webhooks em tempo real para dados de sessão, gerenciamento de veículos e faturamento. SDKs disponíveis para Python, JavaScript e C#. Veja [API & Integração](./technical/integration).

## Suporte

### Como relato um carregador defeituoso?
- **Aplicativo:** Ajuda → Relatar problema → selecione o carregador
- **Telefone:** Número de suporte está em cada carregador
- **E-mail:** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Inclua:** ID do carregador (formato: `NL*STM*E...`), horário e descrição do problema

### Como entro em contato com a Stroomlijnen?
- **Perguntas gerais:** [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl)
- **Vendas de frotas:** [sales@stroomlijnen.nl](mailto:sales@stroomlijnen.nl)
- **Suporte técnico:** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Integração técnica:** [technical@stroomlijnen.nl](mailto:technical@stroomlijnen.nl)