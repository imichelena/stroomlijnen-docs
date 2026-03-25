---
sidebar_position: 1
title: Panoramica della Gestione della Flotta
description: Gestisci la ricarica della tua flotta elettrica con il portale Miei Veicoli di Stroomlijnen — veicoli, sessioni, fatturazione e gestione degli autisti.
keywords: [gestione della flotta, portale Miei Veicoli, flotta elettrica, gestione della ricarica, dashboard della flotta]
---

# Panoramica della Gestione della Flotta

Il portale **Miei Veicoli** di Stroomlijnen offre ai gestori della flotta una visibilità e un controllo completi sulle attività di ricarica dei veicoli elettrici. Da un unico dashboard, è possibile gestire i veicoli, monitorare in tempo reale le sessioni di ricarica, controllare i costi e generare rapporti.

## Accesso a Miei Veicoli

Accedi a **my.stroomlijnen.nl** e logga in con le tue credenziali di gestore della flotta. I nuovi utenti devono registrarsi con il numero KVK dell'azienda e essere approvati da un account manager di Stroomlijnen.

## Dashboard

Il dashboard principale mostra:

- **Stato della flotta** — Quanti veicoli stanno attualmente ricaricando, sono fermi o in movimento
- **Energia di oggi** — Totale kWh forniti alla tua flotta oggi
- **Sessioni attive** — Panoramica in tempo reale di tutte le sessioni di ricarica in corso con curve di potenza
- **Notifiche** — Certificati scaduti, sessioni non riuscite o modelli di ricarica insoliti
- **Riepilogo mensile** — Totale dei costi in corso e confronto con il mese precedente

## Funzioni Principali

### Gestione dei Veicoli
Registra, configura e monitora tutti i tuoi veicoli elettrici in un unico luogo. Attiva Plug & Charge, assegna pass RFID e imposta le politiche di ricarica per veicolo o gruppo.

→ [Dettagli Gestione dei Veicoli](./vehicles)

### Monitoraggio delle Sessioni
Segui ogni sessione di ricarica — passata e presente. Visualizza l'energia fornita, la durata, i costi, il metodo di autenticazione e la posizione del caricabatterie. Esporta in CSV o integra tramite API.

→ [Dettagli Sessioni](./sessions)

### Fatturazione
Fatture mensili con dettagli per veicolo, posizione e data. Scarica le fatture come PDF, ricevi l'analisi dei costi per chilometro e imposta la fatturazione automatica.

→ [Dettagli Fatturazione](./invoicing)

### Gestione degli Autisti
Assegna gli autisti ai veicoli, fornisce pass RFID personalizzati e imposta i limiti di ricarica per autista. Gli autisti possono utilizzare l'app Stroomlijnen per trovare i caricabatterie e avviare le sessioni.

→ [Dettagli Gestione degli Autisti](./driver-management)

## Ruoli degli Utenti

| Ruolo | Autorizzazioni |
|------|-------------|
| **Gestore della Flotta** | Accesso completo: veicoli, fatturazione, PnC, utenti, chiavi API |
| **Gestore della Flotta** | Gestione dei veicoli, monitoraggio delle sessioni, rapporti |
| **Gestore delle Fatture** | Accesso alle fatture, metodi di pagamento, rapporti sui costi |
| **Autista** | Visualizzazione delle proprie sessioni, ricerca dei caricabatterie, avvio/interuzione delle sessioni |

## Accesso all'API

Per le aziende che desiderano integrare i dati di ricarica nel proprio sistema di gestione della flotta o ERP, offriamo un'API REST:

- Webhook delle sessioni in tempo reale
- Dati storici delle sessioni
- Gestione dei veicoli e degli autisti
- Richiesta di fatture

La documentazione dell'API è disponibile nel portale Miei Veicoli sotto **Impostazioni** → **API**.

## Iniziare

1. [Registra la tua flotta](https://stroomlijnen.nl/fleet-signup) o contatta il tuo account manager
2. [Aggiungi i tuoi veicoli](./vehicles)
3. [Attiva Plug & Charge](../plug-and-charge/setup-guide) o [fornisci pass RFID](../getting-started/rfid-cards)
4. Inizia a ricaricare — tutte le sessioni saranno registrate e fatturate automaticamente