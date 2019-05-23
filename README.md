# Report

- Maurizio Favaro (matricola 120099)
- favaro.maurizio@spes.uniud.it

PROGETTO IN FASE DI SVILUPPO

## Descrizione

//screenshot

La scena rappresentata in questo progetto è una ricostruzione semplificata del celebre incidente avvenuto nella notte tra il 14 e il 15 aprile 1912 che ha portato al naufragio del leggendario transatlantico RMS Titanic. La nave, un capolavoro ingegneristico dell'epoca, era la più grande e lussuosa al mondo ma, nonostante fosse considerata pressoché inaffondabile, naufragò nell'oceano Atlantico a causa dell'impatto con un iceberg proprio durante il suo viaggio inaugurale.

Il Titanic colpì di striscio la massa di ghiaccio con la parte destra della prua, aprendo una falla nello scafo. Iniziò quindi ad immagazzinare acqua, sprofondando inesorabilmente. La parte anteriore venne velocemente sommersa, causando il sollevamento della poppa verso l'alto fino a formare un angolo di circa 30 gradi con il mare. A quel punto la nave si spezzò in due tronconi per poi inabissarsi rapidamente. Molto probabilmente, però, il Titanic si divise sotto la superficie dell'acqua: i testimoni oculari raccontarono infatti di aver visto il transatlantico affondare tutto intero, pertanto è questa la situazione che viene rappresentata nella ricostruzione di questo progetto.

L'incidente ebbe un impatto mediatico enorme: il Titanic era la nave più famosa dell'epoca e la notizia del suo naufragio fece il giro del mondo. Poiché molto intensa, drammatica e ricca di episodi particolari, la storia del transatlantico divenne negli anni oggetto di numerose opere come libri, canzoni e soprattutto film (il più popolare è il colossal del 1997 di James Cameron, vincitore di 11 Oscar) che ne hanno alimentato la leggenda, rendendo il Titanic un'icona eterna.

## File e cartelle

* **`lib`**: contiene le librerie necessarie al funzionamento del progetto.
* **`parts`**: contiene le classi Javascript per la costruzione del Titanic e del terrain.
  * `bow.js`: classe per la creazione della prua del Titanic.
  * `deck.js`: classe per la creazione del ponte della nave.
  * `funnel.js`: classe per la creazione dei fumaioli.
  * `hull.js`: classe per la creazione dello scafo.
  * `stern.js`: classe per la creazione della poppa della nave.
  * `terrain.js`: classe per la creazione del terreno. In questo file è contenuta anche la funzione *getHeightData* fornita nel codice di partenza.
* **`pics`**: contiene le immagini inserite in questo file e nel `journal.md`.
* **`StartingCode`**: contiene i file di partenza forniti per questo progetto.
* **`textures`**: contiene le textures utilizzate nella scena e la heightmap usata per la creazione del terreno.
  * `heightmap.png`: la heightmap in scala di grigi.
  * `ice.jpg`: texture per l'iceberg da [Spiral Graphics](http://spiralgraphics.biz/packs/snow_ice/index.htm?23#anchor).
  * `sea.png`: texture per l'oceano da [3DJungle](https://3djungle.net/textures/water/1832/) scurita con Microsoft Office PowerPoint.
  * `sky.jpg`: texture utilizzata in background per simulare il cielo notturno (da [PublicDomainPictures.net](https://www.publicdomainpictures.net/en/view-image.php?image=9767&picture=starry-night)).
* `index.html`: file principale che contiene il codice del progetto.
* `journal.md`: file che contiene il processo di sviluppo del progetto: qui vengono segnalati i progressi giornalieri e le scelte effettuate.
* `README.md`: questo file.

## Risultati

//screenshots

Il progetto è stato sviluppato modificando il codice del file `StartingCode-nolights.html`. La scena rappresentata contiene il Titanic e il terreno, ottenuto utilizzando le funzioni presenti in `StartingCode-heightmap.html`, che comprende l'iceberg e la porzione di oceano in cui si svolge la ricostruzione. Per simulare meglio la grande oscurità che fu tra le cause dell'incidente (era una notte di Luna nuova e il buio impedì alle vedette di avvistare in tempo l'iceberg), sono stati aggiunti un ground (simile a quello presente nel file `StartingCode-withlights.html`) completamente nero attorno al terreno e una nebbia anch'essa nera. Come da consegna, nave e terreno sono formati da box opportunamente scalati, traslati e ruotati. Il terreno è ottenuto a partire da una heightmap 60x60 in scala di grigi.

La scena racchiude in pochi secondi il naufragio dall'impatto alla completa immersione della nave. Le animazioni sono suddivise in 6 fasi:
- all'inizio il Titanic sta virando disperatamente nel tentativo di schivare l'iceberg ma non riesce ad evitare la collisione
- poi il transatlantico continua la sua corsa rallentando e affondando lentamente
- in seguito la nave si ferma e la prua inizia a sprofondare nell'oceano dalla parte in cui è stata aperta la falla
- la prua viene sommersa velocemente e la poppa si staglia sempre più verso il cielo
- raggiunto un angolo di 30 gradi col mare, il Titanic affonda negli abissi
- la nave viene riportata nella posizione iniziale e la scena riparte.

La camera osserva lo scenario seguendo i movimenti del Titanic. L'osservatore è libero di spostarla con il mouse in tutte le direzioni ma non sotto il livello del mare, mantenendo comunque l'obiettivo puntato sul transatlantico.

//risultati da lt

## Processo di sviluppo
