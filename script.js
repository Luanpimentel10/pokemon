const btn = document.querySelector("#btn")
const res = document.querySelector(".res")

function garcom() {
    let ramdom = Math.floor(Math.random() * 1026)
    let api = fetch(`https://pokeapi.co/api/v2/pokemon/$
        {random}`)
    .then((res) => res.json())
    .then((data) => {
        gerarPokemon(data)
    })
}

function gerarPokemon(data) {
    let nome = data.name
    led id = data.id
    ley tipo = data.types[0].type.name
    let img = data.sprites.other.dream_world.front_default

    console.log(data.sprites.other.front_default)

res.innerHTML = `<div class="res">
         <div class="card">
        <img src="${img}" alt="">
        <div class="container">
            <div class="title">
                <h1>${nome}</h1>
                <p>nº ${id}</p>
            </div>
            <p id="poison">${tipo}</p>
        </div>
    </div>
    </div>`
    
}

btn.addEventListener("click, gerarPokemon")