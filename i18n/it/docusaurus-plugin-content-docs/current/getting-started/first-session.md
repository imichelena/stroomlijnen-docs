---
sidebar_position: 2
title: La Tua Prima Sessione di Ricarica
description: Guida passo dopo passo per la tua prima sessione di ricarica per camion elettrici presso un sito Stroomlijnen.
keywords: [prima sessione di ricarica, come ricaricare, camion elettrico, RFID, Plug and Charge]
---

# La Tua Prima Sessione di Ricarica

Sia che tu sia un gestore di flotte che configura tutto o un conducente che si trova per la prima volta davanti al caricabatterie — qui puoi leggere esattamente cosa succede.

## Prima di Arrivare

### Come Gestore di Flotta

1. **Registra** il tuo account sul portale Stroomlijnen all'indirizzo [portal.stroomlijnen.nl](https://portal.stroomlijnen.nl)
2. **Aggiungi i tuoi veicoli** — numeri di identificazione del veicolo (VIN) e targa
3. **Scegli il metodo di autenticazione:**
   - **Pass RFID** — li riceverai per posta (vedi [Pass RFID](/docs/getting-started/rfid-cards))
   - **Plug & Charge** — configurazione tramite il portale (vedi [Guida all'installazione](/docs/plug-and-charge/setup-guide))
4. **Informa i tuoi conducenti** — condividi l'indirizzo del sito e eventuali codici di accesso

### Come Conducente

- Assicurati di avere il **pass RFID** con te (o che il tuo camion supporti Plug & Charge)
- Conosci l'**indirizzo del sito** e eventuali codici di accesso per i cancelli
- Controlla il **livello di carica attuale** della tua batteria — pianifica il tempo di ricarica necessario

## Al Caricabatterie

### Passo 1: Parcheggio e Collegamento

1. Guida fino a un caricabatterie disponibile
2. Spegni il veicolo (alcuni camion richiedono questo; altri no — consulta il manuale del produttore)
3. Apri la porta di ricarica
4. Collega il cavo di ricarica:
   - **CCS2** (Combined Charging System) — lo standard europeo per la ricarica rapida DC
   - La spina si adatta solo in un modo. Non forzare.

### Passo 2: Autenticazione

**Con pass RFID:**
1. Tieni il pass davanti al lettore di carte sul caricabatterie
2. Attendi fino a quando non si accende la luce verde e/o fino a quando non appare una conferma sul display
3. La ricarica inizia automaticamente

**Con Plug & Charge:**
1. Collega il cavo. È tutto.
2. Il camion e il caricabatterie scambiano certificati tramite ISO 15118
3. La ricarica inizia entro 5-10 secondi

**Con app di ricarica (roaming):**
1. Apri l'app del tuo eMSP
2. Scansiona il codice QR sul caricabatterie o inserisci l'ID del caricabatterie
3. Avvia la sessione nell'app

### Passo 3: Monitoraggio

- Il display del caricabatterie mostra la potenza in tempo reale (kW) e l'energia fornita (kWh)
- Puoi anche monitorare tramite il portale Stroomlijnen o la tua app di gestione della flotta
- La maggior parte dei camion elettrici si ricarica dal 20% all'80% in 60-90 minuti sui nostri caricabatterie DC

### Passo 4: Scollegamento

1. Interrompi la sessione:
   - **RFID:** tocca nuovamente il pass
   - **Plug & Charge:** scollega semplicemente (la sessione si conclude automaticamente)
   - **App:** interrompi nella app, poi scollega
2. Riponi il cavo nel suo alloggiamento
3. Chiudi la porta di ricarica
4. Puoi ripartire

## Cosa Fare Se Qualcosa Va Storto?

| Problema | Cosa fare |
|-------|-----------|
| Pass non riconosciuto | Controlla se il pass è stato attivato nel portale. Prova a tenere il pass più vicino / per più tempo al lettore. |
| Plug & Charge non parte | Controlla lo stato PnC del tuo camion nel portale OEM. Vedi [Risoluzione dei problemi](/docs/plug-and-charge/troubleshooting). |
| Caricabatterie visualizza un messaggio di errore | Annota il codice di errore e contattaci. Vedi [FAQ](/docs/faq). |
| Ricarica più lenta del previsto | La temperatura della batteria, il livello di carica (SoC) e la capacità della rete influenzano tutti la velocità di ricarica. Oltre l'80% SoC, la ricarica si rallenta notevolmente. |
| Cavo non rimovibile | Il cavo si blocca durante la ricarica. Assicurati che la sessione sia completamente interrotta prima di tirare. |

## Velocità di Ricarica Attese

I camion elettrici hanno diverse capacità di ricarica:

| Livello di potenza | Uso tipico | Tempo per 200 kWh |
|-------------|------------|-------------------|
| 50 kW DC | Ricarica notturna / in deposito | ~4 ore |
| 150 kW DC | Ricarica occasionale | ~1,5 ore |
| 350 kW DC | Tempo di ricarica rapido | ~40 minuti |

:::note
La velocità di ricarica effettiva dipende dal caricabatterie a bordo del veicolo, dalla temperatura della batteria, dal livello di carica e dalla potenza disponibile del caricabatterie. Il caricabatterie fornisce la massima potenza richiesta dal veicolo, fino alla potenza nominale del caricabatterie.
:::

## Passi Successivi

- [Configura Plug & Charge](/docs/plug-and-charge/setup-guide) per sessioni future senza problemi
- [Comprendi le tue fatture](/docs/fleet-management/invoicing)
- [Aggiungi più conducenti](/docs/fleet-management/driver-management)