---
sidebar_position: 1
title: Volvo Trucks — Configurazione Plug & Charge
description: Guida passo dopo passo per l'abilitazione di Plug & Charge su Volvo FH, FM, FE e FL Electric tramite Volvo Connect.
keywords: [Volvo, FH Electric, FM Electric, Volvo Connect, Plug and Charge, ISO 15118, fleet charging]
---

# Volvo Trucks — Configurazione Plug & Charge

Volvo è stato uno dei primi produttori di autocarri a supportare completamente la norma ISO 15118-2 Plug & Charge. Tutti i modelli elettrici Volvo attuali (FH, FM, FE, FL) supportano PnC con firmware v3.2 o successivo.

## Modelli Supportati

| Modello | Opzioni di batteria | Caricamento DC massimo | PnC Pronto |
|-------|-----------|---------------|:---------:|
| FH Electric | 540 kWh | 250 kW (CCS) | ✅ |
| FM Electric | 540 kWh | 250 kW (CCS) | ✅ |
| FE Electric | 265 kWh | 150 kW (CCS) | ✅ |
| FL Electric | 265 kWh | 150 kW (CCS) | ✅ |

## Requisiti

- Account di gestione della flotta Volvo Connect con accesso amministratore
- Firmware del veicolo v3.2 o successivo (controllare in Volvo Connect → Veicolo → Software)
- Account Stroomlijnen con PnC abilitato ([Guida all'installazione](../setup-guide))

## Passo dopo Passo: Volvo Connect

### 1. Controllare la Versione del Firmware

1. Accedere a [Volvo Connect](https://connect.volvotrucks.com)
2. Selezionare il veicolo dall'elenco della flotta
3. Andare a **Dettagli veicolo** → **Software**
4. Verificare che la versione del firmware sia **3.2 o successivo**
5. In caso contrario, contattare il concessionario Volvo per un aggiornamento

### 2. Abilitare i Servizi di Ricarica

1. Andare in Volvo Connect a **Servizi** → **Servizi di ricarica**
2. Se questa sezione non è visibile, chiedere al proprio amministratore Volvo Connect di abilitare il modulo **eMobility** per l'account
3. Cliccare su **Gestire i partner di ricarica**

### 3. Autorizzare Stroomlijnen

1. Cerca nell'elenco dei partner di ricarica **"Stroomlijnen B.V."**
   - Se non è elencato, cliccare su **Aggiungi partner** e cercare "Stroomlijnen" o utilizzare il codice del partner `NL-STM`
2. Cliccare su **Autorizzare**
3. Esaminare le autorizzazioni:
   - ✅ Installazione del certificato — Richiesta per PnC
   - ✅ Identificazione del veicolo — Richiesta per l'associazione del certificato
   - ❌ Dati di localizzazione — Non richiesti, è possibile rifiutarli
4. Cliccare su **Conferma autorizzazione**

### 4. Selezionare i Veicoli

1. Dopo l'autorizzazione, verrà visualizzata una schermata per la selezione dei veicoli
2. Spuntare le caselle per tutti gli autocarri che devono utilizzare Stroomlijnen PnC
3. Cliccare su **Applica**

### 5. Installazione del Certificato

Dopo l'autorizzazione, il backend di Stroomlijnen invierà una richiesta di installazione del certificato:

1. La richiesta apparirà in Volvo Connect → **Notifiche** (di solito entro 30 minuti)
2. Il sistema Volvo pusherà il certificato di contratto al veicolo
3. Il veicolo deve essere **online** per riceverlo (contatto acceso o collegato a un caricabatterie AC)
4. L'installazione è solitamente completata entro **1-2 ore**

È possibile monitorare lo stato dell'installazione in:
- **Volvo Connect** → Veicolo → Servizi di ricarica → Stato del certificato
- **Stroomlijnen Miei Veicoli** → Veicolo → scheda Plug & Charge

### 6. Verificare l'Installazione

Una volta che lo stato mostra "Attivo" in entrambi i portali:

1. Guidare fino a un caricabatterie Stroomlijnen
2. Collegare il cavo CCS
3. Il caricabatterie dovrebbe mostrare "Plug & Charge — Autenticato" entro 5-10 secondi
4. La ricarica inizia automaticamente

## Procedura di Aggiornamento del Firmware

Se il veicolo ha un firmware precedente alla versione v3.2:

1. **Contattare il concessionario Volvo** per un aggiornamento del firmware
2. Gli aggiornamenti possono essere eseguiti presso il concessionario (~2 ore)
3. Alcuni aggiornamenti sono disponibili come **OTA (Over-The-Air)** — controllare Volvo Connect → Veicolo → Aggiornamenti software
4. Tornare al passaggio 2 dopo l'aggiornamento

:::caution
Non tentare di aggiornare il firmware del veicolo manualmente. Gli aggiornamenti del firmware devono essere eseguiti da un concessionario Volvo autorizzato o tramite il canale ufficiale OTA.
:::

## Risoluzione dei Problemi

### "Servizi di ricarica" non visibili in Volvo Connect
Il proprio abbonamento a Volvo Connect potrebbe non includere il modulo eMobility. Contattare il concessionario Volvo o il supporto Volvo Connect per l'abilitazione.

### Certificato mostra "In elaborazione" per più di 24 ore
1. Verificare che il veicolo sia stato online (contatto acceso) per almeno 30 minuti dopo la richiesta
2. Controllare Volvo Connect per eventuali richieste di autorizzazione in sospeso
3. Contattare il supporto Stroomlijnen — possono riattivare la richiesta del certificato

### PnC non riesce ma il certificato mostra "Attivo"
1. Controllare il display del caricabatterie per eventuali codici di errore specifici
2. Provare a utilizzare un altro cavo CCS (se disponibile)
3. Spegnere il contatto del veicolo, attendere 30 secondi, riaccenderlo e riconnettersi
4. Vedere la guida generale alla [Risoluzione dei Problemi](../troubleshooting)

### Multi-account Volvo
Se la propria flotta è gestita tramite più account Volvo Connect (ad esempio, diverse società controllate), ogni account deve autorizzare Stroomlijnen separatamente. Contattare il proprio account manager Stroomlijnen per le impostazioni multi-account.

---

**Successivo:** [DAF Configurazione →](./daf)