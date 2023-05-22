import { Movies } from "./movies.js"

const container = document.getElementById("container")
const watchlistDisplay = document.getElementById("watchlist-container")

let watchlistIdArr = Object.keys(localStorage)

async function getMovieData(watchlistIdArr) {
    watchlistDisplay.innerHTML = ""
    if (watchlistIdArr.length > 0) {
        for (let movieId of watchlistIdArr) {
            const response = await fetch(`https://www.omdbapi.com/?apikey=b26fbe67&i=${movieId}`)
            const data = await response.json()
            renderWatchlist(data)
        }
    } else {
        renderEmptyWatchlist()
    }
}

function renderWatchlist(data) {
    container.style.display = "none"
    const movie = new Movies(data)
    watchlistDisplay.innerHTML += movie.getWatchlistHtml()
}

function renderEmptyWatchlist() {
    container.style.display = "block"
}


watchlistDisplay.addEventListener("click", function (e) {
    console.log(watchlistIdArr)
    let removeId = e.target.dataset.id
    localStorage.removeItem(removeId)
    watchlistIdArr = watchlistIdArr.filter(id => id !== removeId)
    console.log(watchlistIdArr)
    getMovieData(watchlistIdArr)
    renderEmptyWatchlist()
})

getMovieData(watchlistIdArr)