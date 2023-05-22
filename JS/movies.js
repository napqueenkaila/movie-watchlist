export class Movies{
    constructor(data){
        Object.assign(this, data)
    }
    
    getMovieHtml(){
        const {Poster, Title, imdbRating, Runtime, Genre, Plot, imdbID} = this
        return `
        <div id="card">
            <image id="poster" class="poster" src="${Poster}">
            <div class="outer-card">
                <div class="inner-card">
                    <div id="title" class="title">${Title}</div>
                    <image class="star-icon" src="images/star-icon.png">
                    <div id="rating" class="rating">${imdbRating}</div>
                </div>
                
                <div class="inner-card">
                    <div id="runtime" class="runtime">${Runtime}</div>
                    <div id="genre" class="genre">${Genre}</div>
                    <div class="watchlist-div" id=${imdbID}>
                        <image class="plus-icon" data-id="${imdbID}" src="images/plus-icon.png">
                        <div class="watchlist">Watchlist</div>
                    </div>
                </div>
                <div class="inner-card">
                    <div id="plot" class="plot">${Plot}</div>
                </div>   
            </div> 
        </div>
        <hr>`
    }

    getWatchlistHtml(){
        const {Poster, Title, imdbRating, Runtime, Genre, Plot, imdbID} = this
        return `
        <div id="card">
            <image id="poster" class="poster" src="${Poster}">
            <div class="outer-card">
                <div class="inner-card">
                    <div id="title" class="title">${Title}</div>
                    <image class="star-icon" src="images/star-icon.png">
                    <div id="rating" class="rating">${imdbRating}</div>
                </div>
                
                <div class="inner-card">
                    <div id="runtime" class="runtime">${Runtime}</div>
                    <div id="genre" class="genre">${Genre}</div>
                    <div class="watchlist-div" id=${imdbID}>
                        <image class="minus-icon" data-id="${imdbID}" src="images/minus-icon.png">
                        <div class="watchlist">Remove</div>
                    </div>
                </div>
                <div class="inner-card">
                    <div id="plot" class="plot">${Plot}</div>
                </div>   
            </div> 
        </div>
        <hr>`
    }

}
