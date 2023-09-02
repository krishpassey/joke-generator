const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apikey = "2HZ5uZYD0yQbbG/cgn+ZIg==vyPfW4U4m0PiKuhX";

const options = {
method: "GET",
headers:{
    "X-Api-Key":apikey,
},
};

const apiURL ="https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getjoke(){

    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Tell Me Joke";
    
    jokeEl.innerText = data[0].joke;
        
    } catch (error) {
        jokeEl.innerText = "try again after some time Internet error..."
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me Joke";
        
    }



}

btnEl = addEventListener("click",getjoke);