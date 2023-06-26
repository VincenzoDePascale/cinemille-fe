# CineMille-fe

Questo progetto è un frontend (FE) sviluppato in JavaScript e React che consiste nell'implementazione di un'interfaccia grafica per gestione di un cinema propostami per un colloqui con l'azienda Lascaux.

## Gestione del frontend

Questa applicazione consiste in un interfaccia grafica che consente:
- per l'utente: di visualizzare delle sale, l'elenco dei film e la programmazione delle proiezioni (all'accesso sarà automaticamente impostato tramite la libreria moment la ricerca per tutti i film la cui programmazione termina tra la data del giorno corrente e quella data più una settimana).
- per l'admin, di accedere all'area riservata dove sarà possibilie caricare, tramite CSV (presenti nel progetto backend linkato di seguito) l'elenco completo delle sale, dei film e delle programmazioni.

## Come utilizzare il sito

1. Scarica entrambe le repository.
2. Segui le istruzioni nella sezione backend del progetto, che puoi trovare a questo [link](https://github.com/VincenzoDePascale/CineMille-be).
3. Una volta aperto il progetto nel tuo IDE, avvia Eclipse con i seguenti passaggi:
   - Apri il terminale ed esegui i seguenti comandi:
   - `npm i`
   - `npm start`
   Ora il sito si aprirà all'indirizzo "http://localhost:3000".
4. happy kacking.

## Tecnologie utilizzate

- HTML5, CSS3, SCSS, Bootstrap
- JavaScript, React, Redux
- moment
