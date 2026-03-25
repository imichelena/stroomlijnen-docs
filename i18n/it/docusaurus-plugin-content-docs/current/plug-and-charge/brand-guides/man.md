---
sidebar_position: 5
title: MAN Elettrico — Configurazione Plug & Charge
description: Guida passo dopo passo per l'attivazione di Plug & Charge su camion elettrici MAN eTGX ed eTGS tramite la piattaforma RIO.
keywords: [MAN, eTGX, eTGS, RIO, Plug and Charge, ISO 15118, TRATON]
---

# MAN Elettrico — Configurazione Plug & Charge

La gamma di camion elettrici MAN (parte del gruppo TRATON insieme a Scania) supporta la tecnologia ISO 15118-2 Plug & Charge sui modelli eTGX ed eTGS. I modelli eTGL ed eTGM riceveranno il supporto per PnC attraverso un aggiornamento del firmware nel corso del 2026. La configurazione viene gestita tramite la piattaforma RIO.

## Modelli Supportati

| Modello | Opzioni di batteria | Caricamento DC massimo | PnC Pronto |
|-------|-----------|---------------|:---------:|
| eTGX | Fino a 480 kWh | 375 kW (CCS) | ✅ |
| eTGS | Fino a 400 kWh | 250 kW (CCS) | ✅ |
| eTGL | Fino a 265 kWh | 150 kW (CCS) | ⚠️ In fase di distribuzione |
| eTGM | Fino a 265 kWh | 150 kW (CCS) | ⚠️ In fase di distribuzione |

## Requisiti

- Account RIO con accesso da amministratore di flotta
- eTGX/eTGS con firmware più recente (fine 2025+)
- Account Stroomlijnen con PnC abilitato ([Guida all'installazione](../setup-guide))

## Passo dopo Passo: Piattaforma RIO

### 1. Accesso alla Gestione della Ricarica

1. Accedi a [RIO](https://rio.cloud)
2. Vai a **Servizi** → **Gestione della ricarica**
3. Se la gestione della ricarica non è visibile, potrebbe essere necessario attivarla — vai a **Marketplace** → cerca "Gestione della ricarica" → **Attiva**

### 2. Connessione a Stroomlijnen

1. Vai alla sezione di gestione della ricarica e seleziona **Partner di ricarica**
2. Clicca su **Connetti un nuovo partner**
3. Cerca "**Stroomlijnen B.V.**" (o utilizza l'ID eMSP `NL-STM`)
4. Clicca su **Connetti e autorizza**
5. Accetta i termini

### 3. Seleziona Veicoli

1. Dopo la connessione, la pagina del partner mostrerà i veicoli idonei
2. Seleziona le caselle per i camion per cui si desidera abilitare PnC
3. Clicca su **Salva selezione**

### 4. Attendi l'Installazione del Certificato

- RIO attiva la provisione del certificato tramite il sistema telematico di MAN
- Il camion deve essere online con il contatto acceso
- **Importante:** MAN utilizza un modulo di sicurezza hardware (HSM) per l'archiviazione dei certificati. L'HSM entra in modalità di provisioning per i primi 30 minuti dopo l'accensione del contatto. Se il camion è parcheggiato con il contatto acceso per più di 30 minuti senza ricevere il certificato, spegni e riaccendi il contatto per riattivare la modalità di provisioning.
- **Tempo di installazione tipico: 6–24 ore**

### 5. Verifica

Controlla lo stato del certificato sia su RIO che su Stroomlijnen Mijn Vloot. Testa presso un caricabatterie Stroomlijnen.

## Modalità di Provisioning HSM — Importante

L'architettura di sicurezza di MAN utilizza un modulo di sicurezza hardware con una finestra di provisioning specifica:

1. Quando si accende il contatto del camion, l'HSM entra in modalità di provisioning per 30 minuti
2. Durante questo periodo, possono essere installati nuovi certificati
3. Dopo 30 minuti, l'HSM si blocca per prevenire modifiche non autorizzate ai certificati
4. Per riaprire la finestra: spegni il contatto, attendi 10 secondi, riaccendi

**Cosa significa nella pratica:** se si attiva PnC nel portale RIO mentre il camion è in movimento, il certificato viene messo in coda e installato al prossimo avvio (entro la prima finestra di 30 minuti).

## Integrazione con il Gruppo TRATON

MAN e Scania fanno entrambi parte del gruppo TRATON e condividono alcune infrastrutture backend. Tuttavia:

- Ogni marchio ha il proprio portale di flotta (RIO per MAN, My Scania per Scania)
- PnC deve essere configurato separatamente in ogni portale
- I certificati sono specifici del marchio e non trasferibili

## Risoluzione dei Problemi

| Problema | Soluzione |
|---------|----------|
| "Gestione della ricarica" non visibile in RIO | Attiva dal Marketplace di RIO |
| Certificato in elaborazione > 24 ore | Esegui un ciclo di contatto per riattivare la modalità di provisioning HSM |
| eTGL/eTGM mostra "PnC non disponibile" | Aggiornamento del firmware potrebbe essere in corso — controlla con il concessionario MAN |
| PnC funziona una volta poi fallisce | L'HSM potrebbe avere un problema di connessione — diagnostica richiesta dal concessionario |

---

**Successivo:** [Altri Camion →](./other-trucks)