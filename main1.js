document.getElementById("miBoton").addEventListener("click", (event) => {
    const apiUrl = 'https://rickandmortyapi.com/api/character';
        fetch(apiUrl)
            .then(response => response.json()) 
            .then(data => {
                const rymlist = data.results; 
                const cardsContainer = document.getElementById('cards-container');

                rymlist.forEach(rym => {

                            const card = document.createElement('div');
                            card.classList.add('card');
                            card.innerHTML = `
                                <h3>${rym.name}</h3>
                                <img src="${rym.image}">
                            `;
                            cardsContainer.appendChild(card); 
                        })
                        .catch(error => console.error('Error al obtener detalles del Personaje:', error));
});
  });