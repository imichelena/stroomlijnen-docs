---
sidebar_position: 5
title: Gerenciamento de Motoristas
description: Gerencie os motoristas da sua frota elétrica — atribua veículos, forneça passes RFID, defina limites de carregamento e monitore a atividade dos motoristas.
keywords: [gerenciamento de motoristas, motoristas de frota, atribuição de RFID, limites de carregamento, aplicativo de motorista]
---

# Gerenciamento de Motoristas

A seção de Gerenciamento de Motoristas permite que os gerentes de frota determinem quem pode carregar, em quais veículos e com quais limites.

## Adicionar Motoristas

1. Acesse **Motoristas** → **Adicionar motorista**
2. Preencha as informações do motorista:
   - **Nome** — Nome e sobrenome
   - **E-mail** — Para acesso à conta e notificações
   - **Telefone** — Para autenticação no aplicativo (opcional)
   - **Número de funcionário** — Para referência interna
   - **Departamento/Grupo** — Para filtragem organizacional
3. Clique em **Salvar**

O motorista receberá um convite por e-mail para configurar sua conta Stroomlijnen e baixar o aplicativo móvel.

## Atribuir Veículos

Os motoristas podem ser atribuídos a um ou mais veículos:

1. Acesse **Motoristas** → selecione um motorista → **Veículos**
2. Clique em **Atribuir veículo** e selecione da sua frota
3. Um motorista só pode iniciar sessões em veículos atribuídos (se a vinculação de veículo-motorista estiver habilitada nas configurações da frota)

### Atribuição Flexível
Para frotas onde os motoristas compartilham veículos:
- Defina **Vinculação de veículo-motorista** como "Flexível" nas configurações da frota
- Cada motorista registrado pode carregar qualquer veículo da frota
- As sessões ainda são rastreadas por motorista (via passe RFID ou aplicativo)

## Passes RFID para Motoristas

Cada motorista pode receber um passe RFID pessoal:

1. Acesse **Motoristas** → selecione um motorista → **Passes RFID**
2. Clique em **Atribuir passe** e insira o UID do passe (impresso no passe)
3. O passe agora está vinculado a este motorista e aos veículos atribuídos

Quando um motorista usa seu passe pessoal em uma estação de carregamento, a sessão é atribuída especificamente a ele — útil para relatórios e alocação de custos por motorista.

Veja também: [Passes RFID](../getting-started/rfid-cards) para pedir e ativar.

## Limites de Carregamento

Defina limites por motorista para controlar os custos:

### Limite de Energia Mensal
Máximo de kWh que um motorista pode carregar por mês. Se o limite for alcançado:
- O motorista é notificado por e-mail/aplicativo
- O carregamento adicional está sujeito à aprovação do gerente da frota (ou o limite é redefinido no próximo mês)

### Limite por Sessão
Máximo de kWh por sessão individual. Útil para evitar carregamentos noturnos acidentais.

### Restrições de Localização
Restrinja em quais locais um motorista pode carregar. Por exemplo, apenas locais Stroomlijnen na rota atribuída.

## Aplicativo de Motorista

Os motoristas podem baixar o aplicativo Stroomlijnen para:

- **Encontrar estações de carregamento** — Mapa de todos os locais Stroomlijnen com disponibilidade em tempo real
- **Iniciar sessões** — Escanear código QR ou usar Bluetooth para iniciar o carregamento (alternativa ao passe RFID)
- **Monitorar sessões** — Potência de carregamento atual, energia fornecida, tempo estimado até a SoC desejada
- **Visualizar histórico** — Sessões anteriores com detalhes de energia e custo
- **Receber notificações** — Sessão concluída, estação de carregamento disponível, eventos PnC

O aplicativo está disponível para iOS e Android. Os motoristas fazem login com o endereço de e-mail registrado em Minha Frota.

## Relatórios

### Relatórios por Motorista
- Total de kWh por motorista por mês
- Número de sessões
- Duração média da sessão
- Locais mais usados
- Alocação de custos

### Comparação de Motoristas
Compare os padrões de carregamento dos motoristas para identificar:
- Comportamento de carregamento eficiente versus ineficiente
- Oportunidades de otimização de rotas
- Gastos excessivos

Os relatórios estão disponíveis em **Relatórios** → **Análise de Motoristas** e podem ser exportados como CSV ou PDF.