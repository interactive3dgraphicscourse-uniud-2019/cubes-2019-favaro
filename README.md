# Report

- Maurizio Favaro (matricola 120099)
- favaro.maurizio@spes.uniud.it

PROGETTO IN FASE DI SVILUPPO

## Descrizione

La scena rappresentata in questo progetto è una ricostruzione semplificata del celebre incidente avvenuto nella notte tra il 14 e il 15 aprile 1912 che ha portato al naufragio del leggendario transatlantico RMS Titanic. La nave, un capolavoro ingegneristico dell'epoca, era la più grande e lussuosa al mondo ma, nonostante fosse considerata pressoché inaffondabile, l'impatto con un iceberg ne causò il naufragio nell'oceano Atlantico proprio durante il suo viaggio inaugurale.

Il Titanic colpì di striscio la massa di ghiaccio con la parte destra della prua, aprendo una falla nello scafo. Iniziò quindi ad immagazzinare acqua, sprofondando inesorabilmente. La parte anteriore venne velocemente sommersa dall'acqua, causando il sollevamento della poppa verso l'alto fino a formare un angolo di circa 30 gradi con il mare. A quel punto la nave si spezzò in due tronconi per poi inabissarsi rapidamente. Molto probabilmente il Titanic si divise sotto la superficie dell'acqua poiché i testimoni oculari raccontarono di aver visto il transatlantico affondare tutto intero, pertanto quest'ultima situazione è quella che viene rappresentata nella ricostruzione di questo progetto.

L'incidente ebbe un impatto mediatico enorme: il Titanic era la nave più famosa dell'epoca e la notizia del suo naufragio fece il giro del mondo. La storia del transatlantico divenne oggetto di numerose opere come libri, canzoni e soprattutto film (il più popolare è il colossal del 1997 di James Cameron che vinse 11 Oscar) che ne hanno alimentato la leggenda, portando la sua fama fino ai nostri giorni.

## File e cartelle

* **`lib`**: contiene le librerie necessarie al funzionamento del progetto.
* `**parts**`: contiene le classi Javascript per la costruzione del Titanic e del terrain.
  * `bow.js`: classe per la creazione della prua del Titanic.
  * `deck.js`: classe per la creazione del ponte della nave.
  * `funnel.js`: classe per la creazione dei fumaioli.
  * `hull.js`: classe per la creazione dello scafo.
  * `stern.js`: classe per la creazione della poppa della nave.
  * `terrain.js`: classe per la creazione del terreno. In questo file è contenuta anche la funzione *getHeightData* fornita nel codice di partenza.
* `**pics**`: contiene le immagini inserite in questo file e nel `journal.md`.
* `**StartingCode**`: contiene i file di partenza forniti per questo progetto.
* `**textures**`: contiene le textures utilizzate nella scena e la heightmap usata per la creazione del terreno.
  * `heightmap.png`: la heightmap in scala di grigi.
  * `ice.jpg`: texture per l'iceberg.
  * `sea.png`: texture per l'oceano.
  * `sky.jpg`: texture utilizzata in background per simulare il cielo notturno.
* `index.html`: file principale che contiene il codice del progetto.
* `journal.md`: file che contiene il processo di sviluppo del progetto: qui vengono segnalati i progressi giornalieri e le scelte effettuate.
* `README.md`: questo file.
