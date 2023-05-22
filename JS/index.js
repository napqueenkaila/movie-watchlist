import { Movies } from "./movies.js"
const searchInput = document.getElementById("search-bar")
const searchBtn = document.getElementById("search-btn")
const container = document.getElementById("container")
const movieDisplay = document.getElementById("movie-container")

searchBtn.addEventListener("click", getSearchResults)

async function getSearchResults(e){
    e.preventDefault()
    const response = await fetch(`http://www.omdbapi.com/?apikey=b26fbe67&s=${searchInput.value.replace(" ", "+")}&type=movie`)
    const data = await response.json()

    let movieIdArr = []
    if(data.Response === "True"){
        movieIdArr = data.Search.map(result => result.imdbID)
        container.style.display = "none"
    } else{
        container.innerHTML = `<p class="error">Unable to find what you're looking for. Please try another search.</p>`
    }
    searchInput.value = ''
    getMovieData(movieIdArr)
}

async function getMovieData(movieIdArr){
    for(let movieId of movieIdArr){
        const response = await fetch(`https://www.omdbapi.com/?apikey=b26fbe67&i=${movieId}`)
        const data = await response.json()
        renderMovies(data)
    }
}

function renderMovies(data){
    const movie = new Movies(data)
    movieDisplay.innerHTML += movie.getMovieHtml()
}

movieDisplay.addEventListener("click", function(e){
    let movieId = e.target.dataset.id
    if(movieId){
        document.getElementById(e.target.dataset.id).innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            <div class="watchlist">Watchlist</div>`
        localStorage.setItem(movieId, movieId)
    }
})
