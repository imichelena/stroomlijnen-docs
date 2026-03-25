---
sidebar_position: 10
title: Solução de Problemas Plug & Charge
description: Problemas comuns do Plug & Charge e soluções — desde erros de certificado até falhas de comunicação no carregador.
keywords: [solução de problemas do Plug and Charge, erros do PnC, problemas do ISO 15118, carregamento falhou, erro de certificado]
---

# Solução de Problemas Plug & Charge

Quando o Plug & Charge não funciona como esperado, o problema geralmente cai em uma das seguintes categorias: problemas de certificado, falhas de comunicação ou falta de configuração. Este guia aborda os problemas mais comuns.

## Lista de Diagnóstico Rápido

Execute esta lista de verificação antes de mergulhar nos detalhes:

- [ ] O veículo é [compatível com o PnC](./veiculos-compativeis)?
- [ ] O firmware do veículo está atualizado?
- [ ] O PnC está habilitado no portal Stroomlijnen Mijn Vloot?
- [ ] O status do certificado exibe "Ativo" em ambos os portais (OEM + Stroomlijnen)?
- [ ] O contato do veículo está ligado ou o modo de acessório está ativo?
- [ ] O cabo CCS está completamente inserido na conexão do veículo?

## Problemas Comuns

### 1. Carregador exibe "Autenticação falhou"

**Sintomas:** Cabo conectado, carregador tenta PnC, mas exibe um erro de autenticação.

**Causas e Soluções:**

| Causa | Solução |
|---------|----------|
| Certificado expirado | Verifique a data de validade no Mijn Vloot → Veículo → Guia do PnC. Renove se expirado. |
| Certificado não instalado | Status pode exibir "Em espera". Certifique-se de que o caminhão esteja online. Aguarde até 24 horas. |
| Certificado revogado | Se revogado intencionalmente, reabilite o PnC por meio do portal. |
| EMAID não sincronizado | Entre em contato com o suporte da Stroomlijnen — nosso backend pode precisar ser sincronizado com o Hubject. |
| Certificado apresentado incorretamente | Se vários certificados eMSP forem instalados, o veículo pode apresentar o certificado errado. Verifique o portal do OEM. |

### 2. Carregador reverte para RFID

**Sintomas:** Em vez de PnC, o carregador solicita "Toque seu passe RFID."

**Causas e Soluções:**

- **Veículo não inicia o ISO 15118-2:** O módulo de comunicação do veículo pode não oferecer PnC. Reinicie o veículo e tente novamente.
- **Comunicação PLC falhou:** A Comunicação de Linha de Alimentação entre o cabo e o veículo não foi estabelecida. Tente um cabo ou conector diferente (se disponível). Limpe os contatos do conector CCS.
- **PnC do carregador desabilitado temporariamente:** Raramente, um carregador pode ter o PnC desabilitado para manutenção. Tente outro carregador no mesmo local.

### 3. Status do certificado permanece em "Em espera"

**Sintomas:** Você habilitou o PnC há dias, mas o certificado não foi instalado.

**Soluções:**
1. **Certifique-se de que o veículo esteja online** — O veículo deve estar ligado (contato ou modo de acessório) com conexão móvel para o certificado ser entregue.
2. **Verifique o portal do OEM** — Pode haver um pedido de autorização pendente que você precisa aprovar.
3. **Verifique os direitos do portal da frota** — Certifique-se de que sua conta tenha acesso de administrador para gerenciar o PnC.
4. **Dispare a instalação novamente** — No Mijn Vloot → Veículo → Guia do PnC, clique em **Solicitar certificado novamente**.
5. **Entre em contato com o suporte** — Se estiver preso por mais de 48 horas, entre em contato com o suporte da Stroomlijnen e seu revendedor OEM.

### 4. PnC Funciona Intermitentemente

**Sintomas:** O PnC funciona em alguns carregadores ou em momentos específicos, mas falha aleatoriamente.

**Possíveis Causas:**

- **Sinal PLC fraco:** O sinal de Comunicação de Linha de Alimentação pode ser afetado pela condição do cabo, desgaste do conector ou interferência eletromagnética. Tente desconectar e reconectar completamente.
- **Glitch de software do veículo:** Reinicie o veículo (ciclo completo de contato: desligar → aguardar 30 segundos → ligar).
- **Tempo limite do backend:** Se nosso backend estiver respondendo lentamente, o carregador pode atingir um tempo limite. Geralmente é resolvido ao tentar novamente.
- **Certificado próximo do vencimento:** Alguns sistemas têm validação mais rigorosa quando os certificados estão próximos do vencimento. Verifique a validade restante.

### 5. Erro "Certificado de contrato inválido"

**Sintomas:** O carregador relata especificamente o certificado de contrato como inválido.

**Soluções:**
1. **Verifique a cadeia de certificados:** Verifique os detalhes do certificado no Mijn Vloot. Se a cadeia estiver quebrada (por exemplo, CA intermediária expirou), entre em contato com o suporte da Stroomlijnen.
2. **Sincronização de tempo:** Se o relógio do veículo estiver significativamente des sincronizado, a validação do certificado pode falhar. Isso é raro em veículos modernos, mas possível após longos períodos de armazenamento.
3. **Atualização da CA raiz necessária:** O carregador pode precisar de um certificado root atualizado. A Stroomlijnen gerencia isso automaticamente, mas durante os períodos de implantação, podem haver lacunas temporárias. Relate o ID específico do carregador ao suporte.

### 6. Sessão Inicia Mas Para Imediatamente

**Sintomas:** O PnC autentica com sucesso, o carregamento começa, mas para dentro de segundos.

**Isso geralmente não é um problema do PnC.** A autenticação funcionou — o problema está na própria sessão de carregamento:

- **Intervenção do sistema de gerenciamento da bateria (BMS):** O BMS do veículo pode limitar a entrada de carga (temperatura, SoC, balanceamento de células).
- **Negociação de potência falhou:** O carregador e o veículo não conseguiram concordar com os parâmetros de carregamento. Tente novamente — a alocação dinâmica de potência pode variar.
- **Detecção de fuga de corrente:** O sistema de segurança detectou um problema. Desconecte, inspecione o cabo e o conector para umidade ou sujeira, tente novamente.

## Códigos de Erro

Se o carregador exibir um código de erro específico, anote-o e entre em contato com o suporte. Códigos comuns:

| Código | Significado | Ação |
|------|---------|--------|
| AUTH-001 | Nenhum certificado de contrato válido encontrado | Verifique a instalação do certificado |
| AUTH-002 | Falha na validação da cadeia de certificados | Entre em contato com o suporte |
| AUTH-003 | EMAID não autorizado | Verifique o status do PnC no Mijn Vloot |
| AUTH-004 | Tempo limite de comunicação do backend | Aguarde 2 minutos, tente novamente |
| COMM-001 | Falha na conexão PLC | Reconecte o cabo, limpe os contatos |
| COMM-002 | Incompatibilidade de versão do protocolo ISO 15118 | Atualize o firmware do veículo |
| COMM-003 | Falha no aperto TLS | Entre em contato com o suporte |

## Coletando Informações de Diagnóstico

Ao entrar em contato com o suporte, certifique-se de fornecer:

1. **Detalhes do Veículo:** Marca, modelo, VIN, versão do firmware
2. **Detalhes do Carregador:** Nome do local, ID do carregador (impresso no dispositivo, formato: `NL*STM*E...`)
3. **Data e Hora** da tentativa falha
4. **Mensagem de Erro** ou código exibido no carregador
5. **Capturas de Tela** do display do carregador e/ou painel do veículo (se seguro para fazer)

## Contato de Suporte

- **E-mail:** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Telefone:** Disponível para clientes de frota (consulte seu contrato para o número de suporte)
- **Portal Mijn Vloot:** Abra um pedido de suporte na seção Ajuda

---

**Ainda preso?** Verifique a [FAQ](../faq) para mais perguntas frequentes ou entre em contato com o gerente da sua conta Stroomlijnen.