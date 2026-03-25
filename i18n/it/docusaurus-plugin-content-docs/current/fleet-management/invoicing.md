---
sidebar_position: 4
title: Fatturazione
description: Come funziona la fatturazione di Stroomlijnen per la ricarica della flotta — fatture mensili, dettagli dei costi, metodi di pagamento e documentazione fiscale.
keywords: [fatturazione, billing, costi di ricarica della flotta, fattura mensile, IVA, prezzo per kWh, account di flotta]
---

# Fatturazione

Stroomlijnen offre una fatturazione trasparente e dettagliata per tutte le attività di ricarica della tua flotta. Le fatture vengono emesse mensilmente e contengono dettagli per sessione.

## Modello tariffario

I clienti della flotta vengono fatturati in base al consumo di energia:

- **Costi energetici** — prezzo per kWh conforme al contratto della tua flotta
- **Nessun costo per sessione** — a differenza della ricarica pubblica, non addebitiamo costi di avvio per sessione
- **Nessun costo legato al tempo** — paghi per l'energia, non per il tempo di parcheggio
- **Sconti per volume** — disponibili per le flotte che superano i limiti mensili di energia (vedi il tuo contratto)

Il tuo prezzo contrattuale è visibile in **La mia flotta** → **Impostazioni** → **Fatturazione** → **Tariffa**.

## Fattura mensile

Le fatture vengono generate il **1° di ogni mese** per le attività di ricarica del mese precedente.

### Contenuto della fattura

Ogni fattura contiene:

- **Riepilogo** — energia totale (kWh), costi totali (€), numero di sessioni, numero di veicoli
- **Dettaglio per veicolo** — energia e costi per veicolo
- **Dettaglio per sessione** — data, ora, luogo, ID EVSE, kWh, costi, metodo di autenticazione
- **Dettagli fiscali** — IVA (21%) calcolata e visualizzata separatamente
- **Condizioni di pagamento** — 14 giorni netti

### Formati di fattura

- **PDF** — documento di fattura formattato per la tua amministrazione
- **CSV** — dettaglio leggibile da macchina per l'importazione in sistemi di contabilità/ERP
- **UBL** — linguaggio commerciale universale XML per l'elaborazione automatica delle fatture (standard olandese)

Tutti i formati sono disponibili tramite **La mia flotta** → **Fatturazione** → **Download**.

## Metodi di pagamento

### Addebito diretto (SEPA)
Il metodo di pagamento preferito per i clienti della flotta:
1. Vai a **Impostazioni** → **Fatturazione** → **Metodo di pagamento**
2. Clicca su **Configura addebito diretto**
3. Inserisci il tuo IBAN e autorizza il mandato SEPA
4. Le fatture vengono addebitate automaticamente 14 giorni dopo l'emissione

### Bonifico bancario
Per i clienti che pagano manualmente:
- I dati di pagamento sono indicati su ogni fattura
- Riferimento: numero di fattura (formato: `STM-2026-XXXXX`)
- Banca: ING Bank, NL
- Data di scadenza: 14 giorni dopo la data di fattura

## Assegnazione dei costi

### Per centro di costo
Se i tuoi veicoli sono assegnati a centri di costo nella sezione Veicoli, le fatture possono contenere dettagli per centro di costo. Ciò si integra direttamente con la tua contabilità interna.

### Per reparto/gruppo
I gruppi di veicoli vengono riflessi nel dettaglio della fattura, rendendo facile distribuire i costi tra i reparti.

### Assegnazione personalizzata
Hai bisogno di una logica di assegnazione personalizzata? Possiamo configurare raggruppamenti di fatture personalizzati per la tua organizzazione. Contatta il tuo account manager.

## Fisco e conformità

### IVA
- Tutti i prezzi sono indicati **al netto dell'IVA**
- L'IVA del 21% viene aggiunta a tutte le fatture
- Il numero di partita IVA è indicato su ogni fattura (Stroomlijnen B.V., KVK 93264526)

### Tassa sull'energia
- La tassa sull'energia è inclusa nel prezzo per kWh dove applicabile
- Il prezzo dipende dalla categoria di allacciamento alla rete della località
- Ciò è trasparente — vedi il tuo contratto per la specifica

### CSRD / rapporto ESG
Per le aziende con obblighi di reporting sulla sostenibilità:
- Forniamo **certificati energetici annuali** che mostrano il consumo totale di energia rinnovabile
- I calcoli delle emissioni di CO₂ evitate sono inclusi nel rapporto annuale della flotta
- Il formato dei dati è compatibile con i framework di reporting ESG più comuni

## Dispute e correzioni

Se pensi che una fattura contenga un errore:

1. Vai a **Fatturazione** → seleziona la fattura → **Contesta**
2. Seleziona la sessione(i) interessata(e)
3. Descrivi il problema
4. Il nostro team di fatturazione esamina e risponde entro 5 giorni lavorativi
5. Le correzioni vengono elaborate come credito sulla prossima fattura

## Fatture storiche

Tutte le fatture vengono **conservate per 7 anni** (obbligo legale olandese) e sono accessibili nel portale Mijn Vloot. Puoi anche impostare l'invio automatico delle fatture a indirizzi e-mail aggiuntivi tramite **Impostazioni** → **Fatturazione** → **Destinatari della fattura**.