let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const ApiUrl = "https://api.quotable.io/random";

async function Api() {
    let response = await fetch(ApiUrl);
    let result = await response.json();
    quote.innerHTML = result.content
    author.innerHTML = result.author
}
btn.addEventListener("click", () => {
    fetc()
})
window.addEventListener("load", Api());