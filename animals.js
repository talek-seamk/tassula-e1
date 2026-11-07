/* Päivitä eläinten tiedot tähän. status: "available" = kotia etsivä,
   "adopted" = adoptoitu. Adoptoituja ei näytetä korteissa eikä lomakkeella.
   Kaikki nykyiset tietueet ovat esimerkkejä. */
window.tassulaAnimals = [
  { id: 'misu', name: 'Misu', species: 'cat', label: 'Kissa', status: 'available', image: 'images/misu.jpg', alt: 'Oranssi kissa katsoo sivulle ulkona. Kuvituskuva.', story: 'Misu on rauhallinen ja ihmisrakas kissa. Sen unelmien arjessa on tilaa kiireettömille hetkille ja omalle pehmeälle lepopaikalle.' },
  { id: 'rekku', name: 'Rekku', species: 'dog', label: 'Koira', status: 'available', image: 'images/rekku.jpg', alt: 'Vaalea koira katsoo tarkkaavaisena kameraan. Kuvituskuva.', story: 'Rekku on energinen koira aktiiviseen kotiin. Yhteiset ulkoiluhetket ja mukava tekeminen voisivat olla sen uuden arjen kohokohtia.' },
  { id: 'paju', name: 'Paju', species: 'other', label: 'Kani', status: 'available', image: 'images/paju.jpg', alt: 'Pörröinen harmaa kani vaalealla taustalla. Kuvituskuva.', story: 'Paju on tämän sivuston esimerkkikani. Sen tarina muistuttaa, että pienikin eläin tarvitsee tilaa, lajille sopivaa hoitoa ja turvallista seuraa.' },
  { id: 'onni', name: 'Onni', species: 'cat', label: 'Kissa', status: 'adopted', image: 'images/misu.jpg', alt: 'Kissan kuvituskuva.', story: 'Adoptoitu esimerkkieläin, joka ei näy kotia etsivien listalla.' }
];
