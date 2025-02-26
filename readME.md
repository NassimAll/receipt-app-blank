# Analizzatore di Scontrini Ristorante (Nome App)

## Descrizione

Questa applicazione mobile, sviluppata con Ionic e Angular, permette agli utenti di caricare e analizzare foto di scontrini di ristoranti. L'app estrae automaticamente informazioni chiave come il nome del ristorante, la data, l'importo totale. Questi dati vengono salvati e organizzati, fornendo un comodo registro di tutti i pasti consumati, con dettagli su dove, quando e quanto.

## Funzionalità

* **Caricamento e Analisi di Immagini**: Carica foto di scontrini direttamente dalla galleria o scatta una foto con la fotocamera.
* **Estrazione Automatica dei Dati**: L'app utilizza tecnologie di riconoscimento ottico dei caratteri (OCR) per estrarre informazioni rilevanti dallo scontrino.
* **Salvataggio e Organizzazione dei Dati**: I dati estratti vengono salvati in un database locale, permettendo all'utente di visualizzare e gestire la cronologia dei pasti.
* **Visualizzazione della Cronologia**: Interfaccia utente  per visualizzare la cronologia dei pasti.

## Tecnologie Utilizzate

* **Ionic Framework**: Per lo sviluppo di applicazioni mobile cross-platform.
* **Angular**: Framework JavaScript per la creazione dell'interfaccia utente.
* **Capacitor**: Runtime nativo per l'accesso alle funzionalità native del dispositivo.
* **OCR (Riconoscimento Ottico dei Caratteri)**: Per l'estrazione del testo dalle immagini.
* **Database Locale**: Per il salvataggio dei dati (SQLite).
* **TypeScript**: Linguaggio di programmazione principale.

## Installazione

1.  Clona la repository:

    ```bash
    git clone https://github.com/NassimAll/receipt-app-blank.git
    ```

2.  Installa le dipendenze:

    ```bash
    npm install
    ```

3.  Installa Ionic CLI (se non già installato):

    ```bash
    npm install -g @ionic/cli
    ```

4.  Aggiungi le piattaforme desiderate (iOS, Android) usando Capacitor:

    ```bash
    ionic capacitor add android
    ionic capacitor add ios
    ```

5.  Esegui l'applicazione in modalità web:

    ```bash
    ionic serve
    ```

    oppure, per eseguire su un dispositivo o emulatore:

    ```bash
    ionic capacitor run android
    ionic capacitor run ios
    ```
