fetch(`http://localhost:3000/beer_names/${id}`)
    .then(response => response.json())
    .then(beernames => console.log(beernames))