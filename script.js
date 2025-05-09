
function start(){
    const searchItem = document.querySelector("#searchBox").value;
    const url = `https://restcountries.com/v3.1/name/${searchItem}`;
    fetch(url)
    .then(res => res.json())
    // .then(data=>console.log(data))
    .then(data => process(data));
}


