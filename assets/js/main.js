// Javascript Page for Pokemon Card List Page

$("#submit-button").on("click", function(event) { // When the submit button is clicked
    event.preventDefault(); // Prevents the page from refreshing
    let searchInput = $("#search").val(); // Grabs the value of the input field

    getPokemonCards(searchInput);
});
// Fetching the data from the API
function getPokemonCards(name) { 
    const requestUrl = 'https://api.pokemontcg.io/v2/cards?q=name:'+name;
    const apikey = '0fb07e5a-e09f-4596-9800-e2ad56426e45';

    fetch(requestUrl, { // Fetches the data from the API
        method: 'GET',
        headers: {'X-Api-Key': apikey}
        }).then(function(response) { // Converts the response to JSON
            return response.json();
        }).then(function(results) {  // Returns the JSON data
            console.log(results.data);  
            return results.data;
    });
}
