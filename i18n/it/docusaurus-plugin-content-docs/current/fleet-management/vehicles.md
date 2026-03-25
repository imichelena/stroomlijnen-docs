---
sidebar_position: 2
title: Gestione Veicoli
description: Come registrare, configurare e gestire veicoli elettrici nel portale Stroomlijnen Mijn Vloot.
keywords: [gestione veicoli, registrazione flotta, camion elettrico, VIN, assegnazione RFID, politica di ricarica]
---

# Gestione Veicoli

La sezione Veicoli di Mijn Vloot è il luogo in cui si registrano i camion e i furgoni, si configurano le impostazioni di ricarica e si monitora lo stato.

## Aggiungere Veicoli

### Singolo Veicolo

1. Vai a **Veicoli** → **Aggiungi veicolo**
2. Compila i campi obbligatori:
   - **VIN** — Numero di identificazione del veicolo da 17 caratteri
   - **Targa** — Formato olandese o europeo
   - **Marca & Modello** — Seleziona dal menu a discesa
   - **Anno di costruzione** — Anno del modello
   - **Capacità della batteria** — In kWh (compilato automaticamente per modelli noti)
3. Campi opzionali:
   - **Soprannome** — Per una facile identificazione (ad esempio "Amsterdam 014")
   - **Dipartimento/Gruppo** — Per la filtrazione organizzativa
   - **Centro di costo** — Per l'assegnazione della fattura
4. Clicca su **Salva**

### Importazione in blocco

Per flotte con molti veicoli:

1. Vai a **Veicoli** → **Importa**
2. Scarica il modello CSV
3. Compila i dati del veicolo
4. Carica il file CSV compilato
5. Controlla la panoramica dell'importazione — correggi eventuali errori di convalida
6. Clicca su **Conferma importazione**

## Dettagli Veicolo

La pagina dei dettagli del veicolo mostra:

### Stato
- **Stato attuale** — In ricarica / Inattivo / Offline
- **Ultima volta visto** — Quando il veicolo ha comunicato con un caricabatterie per l'ultima volta
- **Livello della batteria** — Se segnalato dal veicolo durante l'ultima sessione

### Configurazione di ricarica
- **Metodo di autenticazione** — PnC, RFID o entrambi
- **Stato Plug & Charge** — Abilitato/Disabilitato, stato del certificato
- **Pass RFID assegnati** — Quali pass sono collegati a questo veicolo
- **Politica di ricarica** — Velocità di ricarica massima, obiettivo SoC desiderato, finestre di ricarica pianificate

### Cronologia delle sessioni
- Elenco di tutte le sessioni di ricarica passate per questo veicolo
- Filtrare per intervallo di date, posizione o metodo di autenticazione
- Energia totale, costi totali e durata media della sessione

### Documenti
- Certificato di immatricolazione (facoltativo caricamento)
- Certificato di assicurazione (facoltativo caricamento)
- Dati di manutenzione

## Politica di ricarica

È possibile impostare la politica di ricarica per veicolo o per gruppo:

### Limite di potenza
Imposta un limite di potenza massimo. Utile per:
- Durata della batteria (limita a 80% del massimo)
- Gestione dei costi (potenza inferiore = costi di capacità inferiori in alcune posizioni)

### Obiettivo SoC
Imposta un obiettivo di livello di carica desiderato. Quando raggiunto, il caricabatterie riduce la potenza o si ferma. Ciò prolunga la durata della batteria e rende i caricabatterie disponibili per altri veicoli.

### Ricarica pianificata
Definisci finestre di tempo in cui è possibile ricaricare. Utile per:
- Prezzi orari dell'elettricità
- Gestione del carico di rete
- Ottimizzazione dell'orario di partenza (ricarica al 90% entro le 06:00)

### Priorità
Quando più veicoli della flotta si trovano nella stessa posizione e la potenza è limitata, le impostazioni di priorità determinano quali veicoli ricevono per primi la piena potenza.

## Gruppi di veicoli

Organizza i veicoli in gruppi per una gestione più semplice:

- **Per rotta** — Rotte Amsterdam, rotte Rotterdam
- **Per tipo** — Lungo raggio, consegna regionale, ultimo miglio
- **Per dipartimento** — Operazioni, consegna clienti

I gruppi possono avere politiche di ricarica e impostazioni di fatturazione condivise.

## Dismissione di un veicolo

Quando un veicolo lascia la flotta:

1. Vai a **Veicoli** → seleziona il veicolo → **Impostazioni**
2. Clicca su **Dismissiona veicolo**
3. Ciò farà:
   - Revocare tutti i certificati PnC attivi
   - Scollegare tutte le pass RFID
   - Archiviare la cronologia delle sessioni del veicolo (ancora accessibile per la creazione di report)
   - Interrompere la fatturazione per questo veicolo

Il veicolo può essere riattivato se ritorna nella flotta.

## Esportazione dei dati

Esporta i dati dei veicoli per l'integrazione con i tuoi sistemi:

- **Elenco veicoli** — CSV con tutti i dettagli del veicolo
- **Cronologia delle sessioni** — CSV per veicolo o per tutti i veicoli
- **API** — Accesso programmabile ai dati dei veicoli (vedi Panoramica Gestione flotta → API)