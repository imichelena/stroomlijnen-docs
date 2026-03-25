---
sidebar_position: 4
title: Guida all'installazione di Plug & Charge
description: Come configurare Plug & Charge per la tua flotta tramite il portale Stroomlijnen — dalla registrazione alla prima sessione automatizzata.
keywords: [Configurazione Plug and Charge, registrazione flotta, certificato contrattuale, Portale Miei Veicoli, attivazione PnC]
---

# Guida all'installazione di Plug & Charge

La configurazione di Plug & Charge per la tua flotta richiede circa 15 minuti di lavoro sul portale. Una volta configurata, ogni veicolo registrato si autentica automaticamente e carica su qualsiasi sito Stroomlijnen — senza pass o app.

## Requisiti

Prima di iniziare:

- [ ] Un **account flotta Stroomlijnen** (registrazione tramite [stroomlijnen.nl](https://stroomlijnen.nl) o contattando il tuo account manager)
- [ ] I **numeri di identificazione del veicolo (VIN)** dei tuoi veicoli
- [ ] Accesso al portale flotta OEM (Volvo Connect, DAF Connect, Fleetboard, ecc.)
- [ ] Un **veicolo compatibile** (vedi [Veicoli compatibili](./compatible-vehicles))

## Passo 1: Accedere a Miei Veicoli

Naviga fino a **my.stroomlijnen.nl** ed effettua l'accesso con le tue credenziali di amministratore della flotta.

Se non hai ancora un account:
1. Clicca su **Registra** e inserisci i dati della tua azienda (numero KVK, indirizzo di fatturazione)
2. Riceverai un'e-mail di verifica — clicca sul link
3. Il tuo account sarà valutato e attivato entro un giorno lavorativo

## Passo 2: Aggiungere i veicoli

Nel dashboard Miei Veicoli:

1. Vai a **Veicoli** → **Aggiungi veicolo**
2. Inserisci i dati del veicolo:
   - **VIN** — Numero di identificazione del veicolo (17 caratteri) sul montante della porta del conducente o sul certificato di immatricolazione
   - **Targa** — Per identificazione e rapporti
   - **Marca/Modello** — Seleziona dal menu a discesa (ad es. Volvo FH Electric)
   - **Soprannome** — Opzionale, per una facile identificazione (ad es. "Camion 014 — Percorso Amsterdam")
3. Clicca su **Salva e continua**

Ripeti questo processo per ogni veicolo della tua flotta. Puoi anche **importare in blocco** tramite upload CSV.

### Formato CSV

```csv
vin,targa,marca,modello,soprannome
YV2RT60A1PB123456,AB-123-C,Volvo,FH Electric,Camion 014
XLRAE75PC0H987654,DE-456-F,DAF,XF Electric,Camion 022
```

## Passo 3: Attivare Plug & Charge

Per ogni veicolo:

1. Vai a **Veicoli** → seleziona un veicolo → scheda **Plug & Charge**
2. Imposta **Attiva Plug & Charge** su ATTIVO
3. Il sistema:
   - Genererà un **certificato contrattuale** per questo veicolo
   - Richiederà l'installazione tramite il servizio di provisioning dei certificati dell'OEM
   - Visualizzerà lo stato: `In attesa → Installazione → Attivo`

:::nota Tempo di installazione del certificato
L'installazione del certificato richiede generalmente **1–24 ore**, a seconda dell'OEM:
- **Volvo**: Di solito entro 2 ore tramite Volvo Connect
- **DAF**: 4–8 ore tramite DAF Connect
- **Mercedes-Benz**: 2–6 ore tramite Fleetboard
- **Scania**: 4–12 ore tramite Scania Fleet Management
- **MAN**: 6–24 ore tramite il piattaforma RIO

Il veicolo deve essere **online** (contatto acceso o collegato alla ricarica) per ricevere il certificato.
:::

## Passo 4: Autorizzare tramite portale OEM

Alcuni OEM richiedono che si autorizzino i servizi di terze parti per PnC nel loro portale flotta:

### Volvo Connect
1. Accedi a Volvo Connect → **Servizi** → **Servizi di ricarica**
2. Cerca "Stroomlijnen B.V." nell'elenco dei partner e clicca su **Autorizza**
3. Conferma i veicoli da aggiungere
4. Vedi la [guida alla marca Volvo](./brand-guides/volvo-trucks) per istruzioni dettagliate

### DAF Connect
1. Accedi a DAF Connect → **Impostazioni** → **Partner di ricarica**
2. Attiva Stroomlijnen e seleziona i veicoli
3. Vedi la [guida alla marca DAF](./brand-guides/daf) per istruzioni dettagliate

### Mercedes-Benz Fleetboard
1. Accedi a Fleetboard → **eMobility** → **Gestione della ricarica**
2. Aggiungi Stroomlijnen come fornitore di ricarica
3. Vedi la [guida alla marca Mercedes](./brand-guides/mercedes-trucks) per istruzioni dettagliate

## Passo 5: Verificare l'attivazione

Una volta installato il certificato:

1. In Miei Veicoli → **Veicoli** → seleziona veicolo → scheda **Plug & Charge**
2. Lo stato deve visualizzare: **✅ Attivo**
3. I dettagli del certificato vengono visualizzati:
   - EMAID (identificatore dell'account di mobilità elettrica)
   - Data di scadenza del certificato
   - Ultima sessione PnC riuscita (se presente)

## Passo 6: Test

Guida fino a un sito Stroomlijnen e collega il cavo. La sessione di ricarica deve iniziare entro 5–10 secondi senza azioni manuali.

**Cosa controllare:**
- Il display del caricabatterie visualizza "Plug & Charge — Verificato" (o simile)
- La sessione appare in Miei Veicoli → **Sessioni** entro 1 minuto
- Non è stato necessario alcun pass o azione dell'app

## Risoluzione dei problemi di configurazione

| Problema | Soluzione |
|---------|----------|
| Stato del certificato rimane su "In attesa" | Assicurati che il veicolo sia online (contatto acceso). Controlla il portale OEM per eventuali autorizzazioni in sospeso. |
| Portale OEM non visualizza Stroomlijnen | Contattaci — potrebbe essere necessario stabilire una connessione backend per il tuo account OEM specifico. |
| Certificato installato ma PnC non riesce | Vedi la [guida alla risoluzione dei problemi](./troubleshooting) per una diagnostica dettagliata. |
| Errore "EMAID non trovato" sul caricabatterie | Il certificato potrebbe non essere stato ancora consegnato al nostro backend. Attendi 1 ora e riprova. |
| Errori di importazione in blocco | Controlla il formato VIN (17 caratteri, senza O/I/Q), controlla se la codifica CSV è UTF-8. |

## Gestione dei certificati

### Rinnovo
I certificati contrattuali scadono dopo **2 anni**. Il portale Miei Veicoli invia notifiche e-mail 60, 30 e 7 giorni prima della scadenza. Il rinnovo è automatico se la tua sottoscrizione flotta è attiva.

### Revoca
Se un veicolo viene venduto, rubato o messo fuori servizio:
1. Vai a **Veicoli** → seleziona veicolo → scheda **Plug & Charge**
2. Clicca su **Revoca certificato**
3. Il certificato verrà immediatamente invalidato su tutti i network di ricarica connessi

### Trasferimento
Quando un veicolo viene trasferito a un'altra entità di fatturazione all'interno della tua organizzazione:
1. Revoca il certificato attuale
2. Registra nuovamente il veicolo sotto la nuova entità di fatturazione
3. Verrà rilasciato un nuovo certificato

---

**Successivo:** [Guide alle marche →](./brand-guides/volvo-trucks)