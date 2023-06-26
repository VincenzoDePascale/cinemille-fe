# CineMille-fe

Questo progetto è un frontend (FE) sviluppato in JavaScript e React, che consiste nell'implementazione di un'interfaccia grafica per la gestione di un cinema proposto per un colloquio con l'azienda Lascaux.

## Gestione del frontend

Questa applicazione consiste in un'interfaccia grafica che consente:

- Per l'utente [no login]: di visualizzare le sale, l'elenco dei film e la programmazione delle proiezioni. All'accesso, la ricerca sarà automaticamente impostata tramite la libreria moment per mostrare tutti i film la cui programmazione termina tra la data corrente e una settimana dopo.

- Per l'amministratore: di accedere all'area riservata dove sarà possibile caricare l'elenco completo delle sale, dei film e delle programmazioni utilizzando file CSV (presenti nel progetto backend collegato di seguito). Nel readme del progetto backend sono riportati i dati di accesso.

## Come utilizzare il sito

1. Scarica entrambe le repository.
2. Segui le istruzioni nella sezione backend del progetto, che puoi trovare a questo [link](https://github.com/VincenzoDePascale/CineMille-be).
3. Una volta aperto il progetto nel tuo IDE, avvia il server con i seguenti passaggi:
   - Apri il terminale ed esegui i seguenti comandi:
   - `npm i`
   - `npm start`
   Ora il sito si aprirà all'indirizzo "http://localhost:3000".
4. Ora puoi navigare nel sito.

## Tecnologie utilizzate

- HTML5, CSS3, SCSS, Bootstrap
- JavaScript, React, Redux
- Moment.js
