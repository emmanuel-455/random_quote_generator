let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

async function fetc() {
    let response = await fetch(url);
    let result = await response.json();
    quote.innerHTML = result.content
    author.innerHTML = result.author
}
btn.addEventListener("click", () => {
    fetc()
})
window.addEventListener("load", fetc());