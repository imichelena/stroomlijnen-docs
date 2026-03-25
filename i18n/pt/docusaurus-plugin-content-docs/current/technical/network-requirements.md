---
sidebar_position: 3
title: Requisitos de Rede
description: Requisitos de rede e conexão para estações de carregamento Stroomlijnen — largura de banda, regras de firewall e failover.
keywords: [requisitos de rede, conectividade do carregador, firewall, largura de banda, failover 4G, rede de localização]
---

# Requisitos de Rede

Cada estação de carregamento Stroomlijnen requer uma conexão de internet confiável para se comunicar com nosso CSMS. Nesta página, estão listados os requisitos para operadores de locais e equipes de TI.

## Conectividade

### Primária: Ethernet com Fio
- **Largura de banda mínima:** 1 Mbps por carregador (simétrica)
- **Recomendada:** 10 Mbps compartilhada para até 10 carregadores
- **Latência:** < 200 ms para nossos pontos de extremidade do CSMS
- **Protocolo:** WebSocket via TLS (wss://)

### Backup: 4G/LTE
- Todos os carregadores Stroomlijnen têm um modem 4G embutido
- Ativa automaticamente se a conexão com fio falhar
- Suficiente para comunicação OCPP (baixa largura de banda)
- Não adequado para atualizações de firmware (use conexão com fio para isso)

## Regras de Firewall

Se a rede do local tiver uma firewall, o seguinte deve ser permitido **para saída** a partir do VLAN/sub-rede do carregador:

| Destino | Porta | Protocolo | Propósito |
|-------------|------|----------|---------|
| csms.stroomlijnen.nl | 443 | TCP (WSS) | Comunicação OCPP |
| firmware.stroomlijnen.nl | 443 | TCP (HTTPS) | Atualizações de firmware |
| ntp.stroomlijnen.nl | 123 | UDP (NTP) | Sincronização de tempo |
| hubject.com | 443 | TCP (HTTPS) | Validação de certificado PnC |
| *.sentry.io | 443 | TCP (HTTPS) | Relatórios de erro (opcional) |

**Nenhuma porta de entrada** precisa ser aberta. Os carregadores iniciam todas as conexões para saída.

## Isolamento de Rede

Recomendamos que os carregadores sejam colocados em um **VLAN próprio**, isolado da rede geral do local:

- Evita que o tráfego do carregador se misture com o tráfego da empresa
- Simplifica as regras de firewall
- Reduz a superfície de ataque
- Permite priorização QoS (Quality of Service) se necessário

## Endereçamento IP

- **DHCP é preferido** — Os carregadores solicitam um IP via DHCP
- **IP estático** — Pode ser configurado durante a instalação se necessário
- **IPv4** — Requerido (carregador para CSMS)
- **IPv6** — Não requerido para comunicação CSMS (usado internamente no cabo de carregamento para ISO 15118)

## DNS

Os carregadores precisam de resolução DNS para nossos nomes de host do CSMS. Ou:
- Forneça um servidor DNS via DHCP, ou
- Configure DNS estático (recomendamos 1.1.1.1 / 8.8.8.8 como fallback)

## Sincronização de Tempo

Tempo preciso é essencial para:
- Validação de certificado (controle de data de vencimento)
- Medição de sessão (precisão da fatura)
- Correlação de log

Os carregadores sincronizam o tempo via:
1. NTP (primário) — de nosso servidor NTP ou uma piscina NTP pública
2. OCPP-heartbeat — CSMS contém carimbo de data/hora em respostas heartbeat (backup)

## Estimativa de Largura de Banda

| Atividade | Largura de banda | Frequência |
|----------|-----------|-----------|
| OCPP-heartbeat | ~1 KB | A cada 60 segundos |
| Solicitação de autorização | ~2 KB | Por início de sessão |
| Valores do medidor | ~1 KB | A cada 15 segundos durante o carregamento |
| Iniciar/parar sessão | ~3 KB | Por evento |
| Atualização de firmware | 50–200 MB | A cada trimestre |

**Carga típica por carregador:** ~50 KB/hora durante carregamento ativo, ~1 KB/hora em repouso.

## Avaliação do Local

Antes da instalação, a Stroomlijnen realiza uma avaliação de rede:
1. **Teste de conectividade** — Verifique se o internet com fio alcança a localização do carregador
2. **Cobertura 4G** — Teste a força do sinal móvel no ponto de instalação
3. **Avaliação da firewall** — Confirme que as portas necessárias estão abertas
4. **Teste de largura de banda** — Verifique capacidade suficiente para o número planejado de carregadores

## Solução de Problemas

### Carregador exibe "Offline" no portal
1. Verifique a conexão Ethernet física (LEDs de link no carregador e switch)
2. Verifique se o DHCP atribui um IP (consulte logs do servidor DHCP)
3. Teste a resolução DNS a partir da sub-rede do carregador
4. Verifique se a firewall permite tráfego de saída para a porta 443 em csms.stroomlijnen.nl
5. Se a conexão com fio falhar, verifique o sinal 4G e o status do SIM

### Conexões interrompidas esporádicas
- Verifique congestionamento de rede ou problemas QoS
- Verifique se a porta do switch não entra em modo de suspensão (desative a economia de energia na porta)
- Verifique conflitos de IP (outro dispositivo com o mesmo IP)
- Verifique as configurações de time-out da sessão da firewall (conexões WebSocket são de longa duração)