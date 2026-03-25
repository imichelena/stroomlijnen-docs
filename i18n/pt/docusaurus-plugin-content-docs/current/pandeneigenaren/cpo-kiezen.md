---
sidebar_position: 4
title: Escolhendo um CPO
description: Checklist e pontos de atenção ao escolher um Operador de Pontos de Carregamento para o seu local.
keywords: [escolhendo um CPO, OCPP, roaming, gerenciamento de postos de carregamento, forma de contrato, vendor lock-in]
---

# Escolhendo um CPO

Um **CPO (Operador de Pontos de Carregamento)** gerencia o seu ponto de carregamento operacionalmente: autorização de usuários, faturamento, monitoramento e serviço de manutenção. Você assina um contrato por um período de 5 a 10 anos — uma escolha bem pensada é importante.

## O que exatamente faz um CPO?

| Tarefa | Explicação |
|---|---|
| **Autorização** | Verifica se um usuário pode carregar (via cartão de carregamento, QR ou Plug & Charge) |
| **Medição** | Registra exatamente quantos kWh foram carregados por sessão |
| **Faturamento** | Fatura o usuário e calcula a sua parte |
| **Monitoramento** | Verifica o status do posto de carregamento (online, em manutenção, em uso) |
| **Serviço de manutenção** | Resolve problemas técnicos — à distância ou no local |
| **Relatórios** | Fornece um resumo mensal de sessões e receitas |

## Checklist para escolher um CPO

### ✅ Padrão aberto (OCPP)

Certifique-se de que o seu ponto de carregamento se comunique via **OCPP 2.0.1** (Open Charge Point Protocol). Isso evita o vendor lock-in: você pode mudar de CPO sem substituir o hardware.

**Pergunta ao CPO:** "O seu sistema é compatível com OCPP e posso conectar a coluna a uma backoffice diferente mais tarde?"

---

### ✅ Roaming

Verifique se o CPO está conectado a redes de roaming (OCPI). Isso permite que motoristas com qualquer cartão de carregamento holandês ou europeu usem o seu ponto de carregamento — não apenas clientes de um único fornecedor.

**Pergunta:** "Quais redes de roaming estão conectadas? O meu posto de carregamento funciona com Vattenfall, Shell Recharge, Allego e outros grandes fornecedores?"

---

### ✅ Painel do proprietário

Você deve ser capaz de ver quanto foi carregado, quando, por quem (anônimo) e o que você ganhou.

**Pergunta:** "Você tem um painel do proprietário? Posso visualizar dados de sessão em tempo real?"

---

### ✅ Serviço de manutenção e tempo de resposta

Especially para caminhões que carregam à noite, a disponibilidade é crítica. Quem lida com uma falha e como rápido?

**Pergunta:** "Qual é o seu tempo médio de resposta em caso de falha? Você tem uma linha de manutenção 24/7?"

---

### ✅ Forma de contrato e propriedade

- Aluguel, compra ou leasing? Quem é o proprietário do hardware após o término?
- Quais são os prazos de cancelamento?
- O que acontece se o CPO falir?

**Pergunta:** "Se eu encerrar o contrato, posso levar o hardware comigo ou transferi-lo para outro CPO?"

---

### ✅ Suporte à subvenção

O CPO ajuda com a solicitação de subvenção SPRILA ou deixa que você faça isso sozinho?

---

## Perguntas a fazer a cada CPO

1. O seu sistema é compatível com OCPP 2.0.1?
2. Quais redes de roaming estão conectadas?
3. Posso conectar a coluna a uma backoffice diferente mais tarde?
4. Quem é o proprietário do hardware — você ou eu?
5. Quais são os prazos de cancelamento e duração do contrato?
6. Você ajuda com a solicitação de subvenção SPRILA?
7. Qual é o seu SLA para falhas (tempo de resposta, garantia de disponibilidade)?
8. Você tem referências de locais semelhantes (teatros, instituições culturais)?

---

:::note
\* A Stroomlijnen oferece um pacote específico para locais culturais, incluindo assistência à solicitação de subvenção SPRILA, uma tarifa cultural, controle dinâmico de potência com base no seu contrato de potência e uma rede própria criptografada sem conexão com servidores externos. O sistema também funciona em caso de falha de internet. Mais informações: [stroomlijnen.nl](https://stroomlijnen.nl)
:::