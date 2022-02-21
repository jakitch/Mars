let quote;

function fetchQuote() {
    const url = "https://api.kanye.rest?=";
    fetch(url)
        .then(function(response){
            return response.json();
        }).then(function(json){
            if(quote === json.quote)
                fetchQuote();
            else{
                quote = json.quote;
            }
            updateQuote();
        });
}

fetchQuote();

function updateQuote() {
    
    let formattedText = quote;
    if(quote.charAt(quote.length -1 ) != "." 
        && quote.charAt(quote.length -1 ) != "!" 
        && quote.charAt(quote.length -1 ) != "?")
        formattedText += ".";
    document.getElementById("kanyeQuote").innerText = `"${formattedText}"\n\n--Kanye West`;
}

document.getElementById("quoteButton").addEventListener("click", function(event) {
    event.preventDefault();
    fetchQuote();
});
