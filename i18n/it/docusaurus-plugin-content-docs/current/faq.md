---
sidebar_position: 100
title: Domande frequenti
description: Risposte alle domande più comuni su Stroomlijnen carica batterie elettrica per camion — Plug & Charge, tariffe, RFID, gestione flotta e altro.
keywords: [Domande frequenti, FAQ, ricarica elettrica, Plug and Charge, gestione flotta, RFID, prezzi]
---

# Domande frequenti

## Generale

### 1. Cos'è Stroomlijnen?
Stroomlijnen è un operatore olandese di punti di ricarica (CPO) e fornitore di servizi di mobilità elettrica (eMSP) specializzato nella ricarica rapida CC per camion elettrici. Installiamo infrastrutture di ricarica presso teatri, hub logistici e località strategiche in tutta l'Olanda.

### 2. Perché i teatri?
I teatri dispongono di grandi collegamenti elettrici (per illuminazione, suono e allestimenti), parcheggi accessibili ai camion (per consegne di set) e sono disponibili di notte quando i camion solitamente si ricaricano. Una combinazione logica — utilizziamo infrastrutture esistenti che altrimenti rimarrebbero inutilizzate di notte.

### 3. Quali veicoli possono ricaricare presso Stroomlijnen?
Ogni veicolo con una presa **CCS Combo 2** può ricaricare alle nostre stazioni CC. Ciò include camion elettrici, furgoni, autobus e auto. I nostri caricabatterie forniscono fino a 400 kW, ma si adattano alla potenza massima che il veicolo può gestire.

### 4. Dove sono posizionate le stazioni di ricarica Stroomlijnen?
Principalmente nei Paesi Bassi, con piani di espansione in Belgio e Germania. Consultate la nostra [mappa delle stazioni](./locations/finding-charger) per tutte le località attuali.

### 5. Le auto possono utilizzare i caricabatterie?
Sì. Sebbene i nostri caricabatterie siano progettati e posizionati per veicoli commerciali, qualsiasi automobile dotata di CCS può anche ricaricare. Tenga presente che le aree di parcheggio per camion possono avere bordi più alti o una disposizione diversa rispetto a una stazione di ricarica standard per auto.

## Plug & Charge

### 6. Cos'è il Plug & Charge?
Il Plug & Charge significa che il vostro camion si autentica automaticamente e inizia a ricaricare non appena si collega il cavo — nessun pass, nessuna app, nessuna azione del conducente. Utilizza certificati digitali ISO 15118 integrati nel veicolo. Consultate [Cos'è il Plug & Charge?](./plug-and-charge/what-is-pnc) per ulteriori dettagli.

### 7. Il Plug & Charge è sicuro?
Sì — anche più sicuro dei pass RFID. PnC utilizza l'autenticazione reciproca TLS e certificati digitali (stessa tecnologia dell'home banking). I certificati sono collegati al numero di identificazione del veicolo (VIN) e archiviati in un modulo di protezione hardware, rendendo difficile la clonazione.

### 8. Quali camion supportano il Plug & Charge?
La maggior parte dei grandi produttori di camion elettrici supporta ora PnC: Volvo, DAF, Mercedes-Benz, Scania e MAN. Consultate la nostra [lista di veicoli compatibili](./plug-and-charge/compatible-vehicles) per i dettagli completi.

### 9. Quanto tempo ci vuole per configurare il Plug & Charge?
Circa 15 minuti di configurazione del portale, quindi da 1 a 24 ore per l'installazione del certificato nel veicolo (a seconda del produttore). Consultate la [guida all'installazione](./plug-and-charge/setup-guide).

### 10. Posso utilizzare il Plug & Charge e RFID contemporaneamente?
Sì. PnC e RFID possono coesistere. Se per qualche motivo PnC non funziona, il conducente può sempre ricorrere al pass RFID. Il caricabatterie tenta prima PnC; se PnC non si autentica entro 15 secondi, viene richiesto un pass RFID.

## Tariffe e fatturazione

### 11. Quanto costa la ricarica?
I clienti della flotta ricevono un tasso contrattuale di €/kWh. Non ci sono costi di sessione o costi basati sul tempo — pagate solo per l'energia consumata. Contattateci per un preventivo di prezzo per la flotta.

### 12. Come funziona la fatturazione?
Fatture mensili con dettagli delle sessioni, disponibili come PDF, CSV o UBL XML. Le fatture vengono generate il primo giorno di ogni mese. Consultate [Fatturazione](./fleet-management/invoicing) per i dettagli.

### 13. Offrite sconti per quantità?
Sì. Le flotte che superano le soglie energetiche mensili possono beneficiare di tariffe a scalare. Contattate il vostro account manager o inviate un'e-mail a [sales@stroomlijnen.nl](mailto:sales@stroomlijnen.nl) per i dettagli.

### 14. Gli utenti in roaming possono ricaricare presso Stroomlijnen?
Sì, tramite le nostre connessioni Hubject e OCPI. Gli utenti con pass di ricarica di altri fornitori possono effettuare il check-in e ricaricare. I prezzi del roaming possono differire dai prezzi della flotta diretta.

## Pass RFID

### 15. Come ottengo i pass RFID?
Ordinate tramite il [portale Mijn Vloot](./getting-started/rfid-cards) o contattate il vostro account manager. I pass vengono spediti entro 3 giorni lavorativi e richiedono attivazione.

### 16. Cosa succede se un pass RFID viene smarrito o rubato?
Disattivate immediatamente il pass tramite Mijn Vloot → Pass RFID → Selezionate il pass → Disattiva. Il pass verrà bloccato su tutte le stazioni di ricarica Stroomlijnen entro pochi secondi. Ordinate un sostituto tramite il portale.

### 17. Un singolo pass RFID può funzionare su più veicoli?
Sì. I pass RFID sono collegati al vostro account flotta, non a un veicolo specifico. Ogni pass assegnato alla vostra flotta può avviare una sessione di ricarica su qualsiasi caricabatterie per qualsiasi dei vostri veicoli.

## Tecnico

### 18. Quale versione di OCPP utilizzano i vostri caricabatterie?
Tutti i nuovi caricabatterie utilizzano **OCPP 2.0.1**. Alcune installazioni più vecchie utilizzano OCPP 1.6-J. Entrambi sono completamente supportati dal nostro CSMS. Consultate [Panoramica di OCPP](./technical/ocpp-overview).

### 19. Supportate il caricamento intelligente / la suddivisione dei compiti?
Sì. Il nostro CSMS distribuisce dinamicamente la potenza tra i caricabatterie in ogni località in base alla capacità della rete, alla priorità del veicolo e all'ottimizzazione basata sull'orario. Consultate [Panoramica di OCPP → Caricamento intelligente](./technical/ocpp-overview#smart-charging).

### 20. Posso integrare i dati di ricarica con il mio sistema di gestione della flotta?
Sì. Offriamo un'API REST con webhooks in tempo reale per i dati di sessione, la gestione dei veicoli e la fatturazione. Gli SDK sono disponibili per Python, JavaScript e C#. Consultate [API & Integrazione](./technical/integration).

## Supporto

### Come segnalo un caricabatterie difettoso?
- **App:** Aiuto → Segnala un problema → Seleziona il caricabatterie
- **Telefono:** Numero di supporto riportato su ogni caricabatterie
- **E-mail:** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Specifica:** ID del caricabatterie (formato: `NL*STM*E...`), orario e descrizione del problema

### Come contatto Stroomlijnen?
- **Domande generali:** [info@stroomlijnen.nl](mailto:info@stroomlijnen.nl)
- **Vendite flotta:** [sales@stroomlijnen.nl](mailto:sales@stroomlijnen.nl)
- **Supporto tecnico:** [support@stroomlijnen.nl](mailto:support@stroomlijnen.nl)
- **Integrazione tecnica:** [technical@stroomlijnen.nl](mailto:technical@stroomlijnen.nl)