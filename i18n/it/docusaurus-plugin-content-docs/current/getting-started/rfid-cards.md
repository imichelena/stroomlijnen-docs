---
sidebar_position: 3
title: Pass RFID
description: Come ordinare, attivare e gestire i pass RFID per la tua flotta di veicoli elettrici con Stroomlijnen.
keywords: [pass RFID, carta di ricarica, NL*STM, ricarica flotta, attiva carta]
---

# Pass RFID

I pass RFID (Radio Frequency Identification) sono il metodo tradizionale per autenticarsi presso una stazione di ricarica. Tocca il tuo pass, inizia a ricaricare — semplice e affidabile.

## Come funzionano i pass RFID

Ogni pass contiene un codice di identificazione univoco (un **token** o **UID**) collegato al tuo account flotta. Quando tocchi il pass sul lettore di una stazione di ricarica:

1. La stazione di ricarica legge l'UID del pass
2. Lo invia tramite OCPP al backend di Stroomlijnen
3. Il nostro sistema controlla: è questo pass valido? A quale flotta appartiene?
4. Se valido → inizia la ricarica. La sessione viene addebitata all'account flotta.

Ciò funziona in tutte le località di Stroomlijnen e presso i **partner di roaming** in tutta Europa — il pass porta la tua identità NL\*STM eMSP.

## Ordinare pass

### Nuova registrazione flotta
Quando registri la tua flotta, puoi ordinare pass direttamente tramite il portale:

1. Vai a **La mia flotta → Pass RFID**
2. Clicca su **Ordina pass**
3. Inserisci il numero di pass necessari
4. Inserisci l'indirizzo di spedizione
5. I pass arrivano entro 3-5 giorni lavorativi

### Pass aggiuntivi
Ne hai bisogno di più? Stessa procedura. Puoi ordinare pass aggiuntivi in qualsiasi momento.

### Prezzo
- I pass sono forniti gratuitamente con l'abbonamento flotta
- Sostituzione in caso di smarrimento: gratuita (le prime due all'anno), €5 per pass dopo

## Attivare un pass

I pass sono **pre-attivati** e già collegati alla tua flotta. Tuttavia, devi:

1. Andare a **La mia flotta → Pass RFID** nel portale
2. Controllare se i nuovi pass appaiono nell'elenco
3. **Assegnare ogni pass a un conducente** (opzionale ma consigliato — aiuta a tenere traccia delle sessioni)
4. Testare il pass presso una stazione di ricarica

:::tip
Assegna i pass a conducenti specifici. Ciò ti aiuterà a visualizzare i rapporti di ricarica e a identificare quale conducente ha utilizzato quale pass, semplificando l'assegnazione dei costi per flotta.
:::

## Gestire i pass

### Disattivare un pass
Se un pass è smarrito o un conducente lascia l'azienda:
1. Vai a **La mia flotta → Pass RFID**
2. Cerca il pass (per numero o nome del conducente)
3. Clicca su **Disattiva**
4. Il pass non funziona più su tutte le stazioni di ricarica

### Riattivare un pass
Hai ritrovato quel pass "smarrito"? Puoi riattivarlo nello stesso modo.

### Gruppi di pass
Per flotte più grandi, puoi organizzare i pass in gruppi:
- **Per veicolo** — un pass per ogni camion
- **Per conducente** — pass personali che funzionano su qualsiasi veicolo
- **Per reparto** — fatturazione separata per unità aziendale

## Pass smarriti o rubati

1. **Disattiva immediatamente** nel portale (o chiama noi)
2. Il pass diventa invalido su tutte le stazioni di ricarica collegate entro 60 secondi
3. Ordina un sostituto
4. Eventuali costi prima della disattivazione appariranno sulla tua fattura abituale

:::caution
Disattiva i pass smarriti il più presto possibile. Fino ad allora, chiunque può utilizzare il pass per ricaricare sul tuo account. Elaboriamo la disattivazione entro 60 secondi — ma devi prendere l'iniziativa.
:::

## RFID vs Plug & Charge

| Funzione | Pass RFID | Plug & Charge |
|---------|-----------|---------------|
| Tempo di setup | Ordinare pass, assegnarli ai conducenti | Registrare il VIN, installare il certificato |
| Azione del conducente | Toccare il pass prima/dopo la ricarica | Semplicemente inserire la spina |
| Funziona con più flotte | Il pass segue il conducente | Il certificato segue il veicolo |
| Rischio di smarrimento | Il pass può essere smarrito/rubato | Niente da perdere fisicamente |
| Roaming | Funziona ovunque | In crescita, ma non ancora universale |
| Opzione di fallback | Funziona sempre | RFID necessario come opzione di fallback |

**La nostra raccomandazione:** Configura Plug & Charge per comodità, mantieni i pass RFID come opzione di riserva. Cintura e bretelle.

## Dettagli tecnici

- **Tecnologia dei pass:** MIFARE DESFire EV2 (crittografato, sicuro)
- **Frequenza:** 13,56 MHz (NFC)
- **Standard:** ISO 14443
- **Formato UID:** 14 caratteri esadecimali
- **Branding:** Logo Stroomlijnen con identificazione NL\*STM

## Prossimi passaggi

- [Configura Plug & Charge](/docs/plug-and-charge/setup-guide) accanto ai tuoi pass RFID
- [Gestisci i tuoi conducenti](/docs/fleet-management/driver-management)
- [Comprendere le tue fatture](/docs/fleet-management/invoicing)