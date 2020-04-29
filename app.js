console.log("hi")
fetch("http://localhost:3000/beer_stores")
    .then(response => response.json())
    .then(beerstores => displayBeerStores(beerstores))

    function displayBeerStores(beerstores){
        // console.log(beerstores)
        beerstores.forEach(beerstore => {
            const h2 = document.createElement("h2")
            h2.innerHTML = `<a href="show.html?=html${beerstore.id}" >${beerstore.name}</a>`
            document.body.appendChild(h2)
        });
        
    }
    