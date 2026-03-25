---
sidebar_position: 2
title: DAF Trucks — Configurazione Plug & Charge
description: Guida passo dopo passo per l'attivazione di Plug & Charge su camion elettrici DAF XF, XD e XB tramite DAF Connect.
keywords: [DAF, XF Electric, XD Electric, XB Electric, DAF Connect, Plug and Charge, ISO 15118]
---

# DAF Trucks — Configurazione Plug & Charge

La gamma di camion elettrici DAF, parte del gruppo PACCAR, supporta la tecnologia ISO 15118-2 Plug & Charge su tutti i modelli BEV attuali. La configurazione viene gestita tramite DAF Connect, la piattaforma di gestione della flotta.

## Modelli Supportati

| Modello | Opzioni di batteria | Caricamento DC massimo | PnC Pronto |
|-------|-----------|---------------|:---------:|
| XF Electric | Fino a 525 kWh | 350 kW (CCS) | ✅ |
| XD Electric | Fino a 350 kWh | 250 kW (CCS) | ✅ |
| XB Electric | Fino a 210 kWh | 175 kW (CCS) | ✅ |

## Requisiti

- Account di gestione della flotta DAF Connect con accesso amministratore
- Software del veicolo più recente (controllare in DAF Connect → Veicolo → Diagnostica)
- Account di gestione della flotta Stroomlijnen con PnC abilitato ([Guida all'installazione](../setup-guide))

## Passo dopo Passo: DAF Connect

### 1. Accesso alle Impostazioni di Caricamento

1. Accedere a [DAF Connect](https://dafconnect.paccar.com)
2. Navigare verso **Gestione della flotta** → **Mobilità elettrica**
3. Se la sezione Mobilità elettrica non è visibile, contattare il supporto DAF Connect per abilitarla per il proprio account

### 2. Configurazione dei Partner di Caricamento

1. Andare a **Mobilità elettrica** → **Partner di caricamento**
2. Cliccare su **Aggiungi partner di caricamento**
3. Cerca "Stroomlijnen" o inserisci l'ID del partner `NL-STM`
4. Cliccare su **Aggiungi e autorizza**

### 3. Assegnazione dei Veicoli

1. Dopo aver aggiunto Stroomlijnen, andare a **Partner di caricamento** → **Stroomlijnen B.V.**
2. Cliccare su **Gestisci veicoli**
3. Selezionare i camion che devono utilizzare PnC
4. Cliccare su **Salva**

### 4. Approvazione dell'Installazione del Certificato

1. DAF Connect visualizza una notifica per l'approvazione dell'installazione del certificato
2. Verificare i dettagli della richiesta (veicoli, autorizzazioni)
3. Cliccare su **Approva**
4. I certificati di contratto vengono inviati ai camion selezionati

### 5. Attesa dell'Installazione

- La consegna del certificato solitamente richiede **4–8 ore**
- Il camion deve essere online (contatto acceso o collegato alla corrente)
- Seguire lo stato in DAF Connect → **Mobilità elettrica** → **Stato del certificato**

### 6. Verifica e Test

1. Controllare lo stato sia in DAF Connect che in Stroomlijnen Mijn Vloot
2. Collegarsi a un caricabatterie Stroomlijnen per verificare l'autenticazione automatica
3. La prima sessione PnC conferma che tutto funziona

## Nota sull'Attivazione da parte del Gestore della Flotta

DAF richiede che il **gestore della flotta** (non i singoli conducenti) attivi PnC per ogni veicolo. Questo è un requisito di sicurezza — solo i gestori della flotta autorizzati possono abilitare la fatturazione automatica sui veicoli aziendali.

Se la tua organizzazione ha più gestori della flotta:
- Ognuno può attivare PnC per i veicoli sotto la loro gestione
- Un super-gestore può delegare i diritti di mobilità elettrica

## Risoluzione dei Problemi

### Sezione "Mobilità elettrica" non visibile
Questa funzionalità richiede un abbonamento DAF Connect Premium. Contattare il concessionario DAF per verificare il livello di abbonamento.

### Installazione del certificato che dura più di 24 ore
1. Verificare che il camion sia stato online per almeno 1 ora dopo l'approvazione
2. Controllare DAF Connect per eventuali messaggi di errore in Mobilità elettrica → Notifiche
3. Contattare il supporto Stroomlijnen per verificare se la richiesta è stata ricevuta

### Autenticazione non riuscita al caricabatterie
1. Verificare in DAF Connect che lo stato del certificato sia "Attivo"
2. Controllare se il software del veicolo è aggiornato
3. Riavviare il veicolo (ciclo di contatto completo)
4. Vedere la guida generale alla [Risoluzione dei problemi](../troubleshooting)

---

**Successivo:** [Configurazione Mercedes-Benz →](./mercedes-trucks)