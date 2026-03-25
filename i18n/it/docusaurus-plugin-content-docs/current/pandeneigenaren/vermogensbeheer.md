---
sidebar_position: 6
title: Gestione del potere e connessione di rete
description: Spiegazione sulla potenza di connessione, potenza contrattuale, peak shaving e ricarica intelligente per i proprietari di immobili.
keywords: [potenza di connessione, potenza contrattuale, peak shaving, ricarica intelligente, connessione di rete, gestione del carico]
---

# Gestione del potere e connessione di rete

Prima di installare i punti di ricarica, è importante capire come funziona la tua connessione elettrica e come la infrastruttura di ricarica interagisce con essa.

## Due concetti che devi conoscere

### Potenza di connessione

La **potenza di connessione** è il massimo fisico che la tua connessione di rete può gestire — determinato dai cavi e dalla stazione di trasformazione del tuo gestore di rete. Questo è il limite assoluto.

**Tipico per un teatro:** 400–2000 kVA (= 400–2000 kW per fase, a seconda della dimensione)

### Potenza contrattuale

La **potenza contrattuale** è la massima potenza per cui hai un contratto con il tuo gestore di rete. Paghi un canone fisso in base a questa potenza. Se consumi regolarmente più di quanto previsto, puoi incorrere in penalità o devi modificare il tuo contratto.

La potenza contrattuale è generalmente **inferiore** alla potenza di connessione.

**Tipico per un teatro:** 150–500 kW

---

:::tip Regola empirica
- **Potenza di connessione** = quanto possono gestire i cavi (limite superiore)
- **Potenza contrattuale** = quanto hai pagato per (contratto)
- **Consumo attuale** = quanto utilizzi effettivamente (varia per ora)

Di giorno, generalmente hai molto spazio tra il tuo consumo attuale e la tua potenza contrattuale. Questo spazio puoi utilizzarlo per la ricarica.
:::

---

## Come un caricabatterie DC si relaziona con la tua connessione

Un caricabatterie DC attinge la sua potenza direttamente e rapidamente dalla tua connessione. Un caricabatterie DC da 60 kW attinge 60 kW finché è attivo. Ciò significa:

| Tipo di ricarica | Potenza | % di 270 kW contrattuale |
|---|---|---|
| Caricabatterie AC (monofase) | 3,7–7,4 kW | 1–3% |
| Caricabatterie AC (trifase) | 11–22 kW | 4–8% |
| Caricabatterie DC | 50–150 kW | 18–55% |
| Caricabatterie DC rapido (camion) | 100–350 kW | 37–130% |

Un singolo caricabatterie DC da 150 kW su un contratto di 270 kW occupa quindi più della metà dello spazio del tuo contratto. Ciò è accettabile di giorno quando il teatro consuma poco — ma la sera, durante uno spettacolo, può creare problemi.

**La soluzione: peak shaving / gestione del carico**

---

## Peak shaving e ricarica intelligente

Il **peak shaving** (anche noto come gestione del carico o ricarica intelligente) è un sistema che adatta automaticamente la potenza di ricarica in base alla potenza disponibile in quel momento.

### Come funziona

1. Il sistema misura continuamente il consumo elettrico attuale dell'edificio
2. Calcola quanto spazio c'è ancora sotto la tua potenza contrattuale
3. La colonnina di ricarica riceve esattamente quanta potenza è disponibile — non di più
4. Se la sala si riempie e il consumo aumenta, la potenza di ricarica viene automaticamente ridotta
5. Se il consumo diminuisce (ad esempio dopo lo spettacolo), la potenza di ricarica torna a salire

### Risultato

- **Mai** superamento della tua potenza contrattuale
- **Massima velocità di ricarica** quando possibile
- **Nessuna azione manuale** necessaria

```
Potenza contrattuale:     270 kW
Consumo del teatro la sera:       220 kW
Disponibile per la ricarica:       50 kW → colonnina di ricarica carica a 50 kW

Consumo del teatro di giorno:      40 kW
Disponibile per la ricarica:      230 kW → colonnina di ricarica carica a 150 kW (massima potenza della colonnina)
```

---

## Quando è necessaria l'espansione della rete?

Nella maggior parte dei teatri, l'espansione della rete **non** è necessaria per una prima colonnina di ricarica da 60–150 kW, a condizione che sia installato il peak shaving.

L'espansione della rete diventa rilevante solo quando:
- Vuoi eseguire più punti di ricarica contemporaneamente (>3 caricabatterie rapide)
- Vuoi riservare una capacità di potenza fissa per la ricarica (ad esempio per garanzie contrattuali ai trasportatori)
- Vuoi aggiungere un sistema di accumulo di batterie (BSS) per una capacità di buffer aggiuntiva

:::note Gestore di rete
I tempi di attesa per l'espansione della rete nei Paesi Bassi sono attualmente di 5–10 anni in molte regioni. Il sistema di accumulo di batterie (BSS) può essere un'alternativa per superare il tempo di attesa. Consulta la [ElaadNL Outlook Logistiek](https://elaadnl.nl) per i dati aggiornati sulla congestione della rete e sull'infrastruttura di ricarica.
:::

---

## Accumulo di batterie come buffer

Un sistema di accumulo di batterie (BSS) carica quando il tuo consumo elettrico è basso e fornisce quell'energia alle colonnine di ricarica nei momenti di picco. Ciò consente potenze di ricarica più elevate senza superare la tua connessione di rete.

| Scenario | Senza BSS | Con BSS |
|---|---|---|
| Disponibile di giorno | 230 kW | 230 kW + buffer |
| Disponibile la sera | 50 kW | 50 kW + buffer da BSS |
| Massima potenza di ricarica la sera | 50 kW | 150 kW (da BSS) |