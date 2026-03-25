---
sidebar_position: 5
title: Gestione dei Conducenti
description: Gestisci i conducenti della tua flotta elettrica — assegna veicoli, fornisce pass RFID, imposta limiti di ricarica e monitora l'attività dei conducenti.
keywords: [gestione dei conducenti, conducenti di flotta, assegnazione RFID, limiti di ricarica, app del conducente]
---

# Gestione dei Conducenti

La sezione Gestione dei Conducenti consente ai gestori di flotta di determinare chi può ricaricare, su quali veicoli e con quali limiti.

## Aggiungi Conducenti

1. Vai a **Conducenti** → **Aggiungi conducente**
2. Inserisci i dati del conducente:
   - **Nome** — Nome e cognome
   - **E-mail** — Per l'accesso all'account e le notifiche
   - **Telefono** — Per l'autenticazione dell'app (opzionale)
   - **Numero di dipendente** — Per riferimento interno
   - **Dipartimento/Gruppo** — Per filtrare in modo organizzativo
3. Clicca su **Salva**

Il conducente riceverà un'e-mail di invito per configurare il proprio account Stroomlijnen e scaricare l'app mobile.

## Assegna Veicoli

I conducenti possono essere assegnati a uno o più veicoli:

1. Vai a **Conducenti** → seleziona un conducente → **Veicoli**
2. Clicca su **Assegna veicolo** e seleziona dalla tua flotta
3. Un conducente può avviare sessioni solo sui veicoli assegnati (se l'associazione veicolo-conducente è abilitata nelle impostazioni della flotta)

### Assegnazione Flessibile
Per le flotte in cui i conducenti condividono veicoli:
- Imposta **Associazione veicolo-conducente** su "Flessibile" nelle impostazioni della flotta
- Ogni conducente registrato può ricaricare qualsiasi veicolo della flotta
- Le sessioni vengono comunque registrate per conducente (tramite pass RFID o app)

## Pass RFID per Conducenti

Ogni conducente può ricevere un pass RFID personale:

1. Vai a **Conducenti** → seleziona un conducente → **Pass RFID**
2. Clicca su **Assegna pass** e inserisci il codice UID del pass (stampato sul pass)
3. Il pass è ora collegato a questo conducente e ai suoi veicoli assegnati

Quando un conducente utilizza il proprio pass personale presso una stazione di ricarica, la sessione viene attribuita specificamente a lui/lei — utile per la creazione di report e l'assegnazione dei costi per conducente.

Vedi anche: [Pass RFID](../getting-started/rfid-cards) per ordinarli e attivarli.

## Limiti di Ricarica

Imposta limiti per conducente per controllare i costi:

### Limite di Energia Mensile
Massimo kWh che un conducente può ricaricare ogni mese. Se il limite viene raggiunto:
- Il conducente riceve una notifica via e-mail/app
- Ulteriori ricariche sono soggette all'approvazione del gestore della flotta (o il limite viene reimpostato il mese successivo)

### Limite per Sessione
Massimo kWh per sessione individuale. Utile per evitare ricariche notturne non intenzionali.

### Limitazioni di Locazione
Limita le locazioni in cui un conducente può ricaricare. Ad esempio, solo locazioni Stroomlijnen sulla rotta assegnata.

## App del Conducente

I conducenti possono scaricare l'app Stroomlijnen per:

- **Trovare stazioni di ricarica** — Mappa di tutte le locazioni Stroomlijnen con disponibilità in tempo reale
- **Avviare sessioni** — Scansiona il codice QR o utilizza Bluetooth per avviare la ricarica (alternativa al pass RFID)
- **Monitorare le sessioni** — Potenza di ricarica attuale, energia fornita, tempo stimato fino alla SoC desiderata
- **Visualizzare la cronologia** — Sessioni precedenti con dettagli di energia e costi
- **Ricevere notifiche** — Sessione completata, stazione di ricarica disponibile, eventi PnC

L'app è disponibile per iOS e Android. I conducenti accedono con l'indirizzo e-mail registrato in Mijn Vloot.

## Report

### Report per Conducente
- Totale kWh per conducente al mese
- Numero di sessioni
- Durata media della sessione
- Locazioni più utilizzate
- Assegnazione dei costi

### Confronto tra Conducenti
Confronta i modelli di ricarica dei conducenti per rilevare:
- Comportamenti di ricarica efficienti vs inefficienti
- Opportunità di ottimizzazione del percorso
- Picchi di costo

I report sono disponibili tramite **Report** → **Analisi dei Conducenti** e possono essere esportati come CSV o PDF.