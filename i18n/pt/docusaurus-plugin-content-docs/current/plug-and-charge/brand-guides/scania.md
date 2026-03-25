---
sidebar_position: 4
title: Scania BEV — Configuração do Plug & Charge
description: Guia passo a passo para habilitar o Plug & Charge nos caminhões elétricos Scania da série R e P via Gerenciamento de Frota Scania.
keywords: [Scania, BEV, Série R, Série P, Gerenciamento de Frota Scania, Plug and Charge, ISO 15118]
---

# Scania BEV — Configuração do Plug & Charge

Os caminhões elétricos da Scania (séries R e P BEV) suportam o Plug & Charge ISO 15118-2 com a versão de firmware 2025.3 ou superior. O PnC é gerenciado por meio do portal de Gerenciamento de Frota Scania.

## Modelos Suportados

| Modelo | Opções de Bateria | Carga DC Máxima | Pronto para PnC |
|-------|-----------|---------------|:---------:|
| Série R BEV | Até 624 kWh | 375 kW (CCS) | ✅ (fw 2025.3+) |
| Série P BEV | Até 416 kWh | 250 kW (CCS) | ✅ (fw 2025.3+) |

## Requisitos

- Conta de Gerenciamento de Frota Scania com acesso de administrador
- Versão do firmware do caminhão 2025.3 ou superior
- Conta da frota Stroomlijnen com PnC habilitado ([Guia de Instalação](../setup-guide))

## Passo a Passo: Gerenciamento de Frota Scania

### 1. Verificar Firmware

1. Faça login em [My Scania](https://my.scania.com) (Gerenciamento de Frota Scania)
2. Selecione seu veículo → **Informações do Veículo** → **Versão do Software**
3. Confirme a versão 2025.3 ou superior
4. Se for inferior, agende uma visita ao concessionário ou verifique se há atualizações OTA disponíveis em **Manutenção** → **Atualizações de Software**

### 2. Habilitar Serviços de Eletrificação

1. Acesse o Gerenciamento de Frota Scania e vá para **Serviços** → **Eletrificação**
2. Se essa seção não for visível, é possível que sua assinatura precise da extensão de Eletrificação — entre em contato com o concessionário Scania
3. Clique em **Gerenciamento de Parceiros de Carregamento**

### 3. Adicionar Stroomlijnen

1. Clique em **Adicionar Parceiro**
2. Pesquise por **"Stroomlijnen B.V."** ou insira o ID eMSP `NL-STM`
3. Clique em **Conectar**
4. Revise e aceite o acordo de compartilhamento de dados (identificação do veículo para vinculação de certificado)
5. Clique em **Confirmar**

### 4. Atribuir Veículos

1. Após conectar a Stroomlijnen, clique em **Gerenciar Veículos**
2. Selecione os caminhões para os quais o PnC deve ser habilitado
3. Clique em **Aplicar**

### 5. Instalação do Certificado

- A gateway de telemática da Scania envia o certificado de contrato para o veículo
- O caminhão deve estar online (contato ligado ou conectado a um carregador)
- **Tempo de instalação típico: 4–12 horas**
- Acompanhe o progresso no Gerenciamento de Frota Scania → Eletrificação → Status do Certificado

### 6. Verificar

1. Verifique o status tanto no Gerenciamento de Frota Scania quanto na frota Stroomlijnen
2. Conecte-se a um carregador Stroomlijnen para testar
3. A autenticação automática deve ser concluída dentro de 5–10 segundos

## Notas Importantes

### SIM de Telemática
Os caminhões Scania têm um módulo de telemática separado com sua própria conexão móvel (independente do sistema de infoentretenimento). Certifique-se de que a assinatura do SIM de telemática esteja ativa — a entrega do certificado depende dessa conexão, não da WiFi do caminhão.

### Atualizações de Firmware
A Scania lança atualizações de firmware relacionadas ao PnC gradualmente por região. Se o seu caminhão tiver firmware 2025.2 ou anterior, a atualização do PnC pode não estar disponível via OTA. O concessionário pode instalá-la manualmente.

### Múltiplas Frotas
Se os seus caminhões estiverem registrados em várias contas de Gerenciamento de Frota Scania (por exemplo, após aquisições), cada conta deve autorizar a Stroomlijnen separadamente.

## Solução de Problemas

| Problema | Solução |
|---------|----------|
| "Eletrificação" não está no menu | A assinatura pode precisar de upgrade — entre em contato com o concessionário Scania |
| Certificado preso em "Em Processamento" | Verifique se o caminhão está online, SIM de telemática ativo, firmware ≥ 2025.3 |
| PnC falha no carregador | Reinicie o caminhão (ciclo de contato completo), tente novamente. Verifique o status do certificado. |
| "Parceiro não encontrado" ao pesquisar | Certifique-se de que está pesquisando com o nome ou código correto (NL-STM) |

---

**Próximo:** [Configurar MAN →](./man)