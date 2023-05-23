const searchTerm = 'searchField'; // Inserisce il termine di ricerca preso dall'ID riga 50 dell'HTML (la search bar)
const endpoint = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchTerm}`;

fetch(endpoint)
  .then(response => {
    if (!response.ok) {
      throw Error('Errore nella richiesta');
    }
    return response.json(); //questa è la Promise
  })
  .then(data => {
    // Utilizza i dati ricevuti dalla risposta
    console.log(data);
  })
  .catch(error => {
    // Gestisci eventuali errori
    console.log(error);
  });

  //assegnazione del comando al bottone per creare una lista
  const button = document.getElementById(lista)[0];
  button.addEventListener("click", function(){

  });