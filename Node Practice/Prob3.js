//Q.5} Write a function to update the director of the movie to "James Cameron" if the current director is "Christopher Nolan". 

const moviesData = [
    {

        "title": "Inception",

        "director": "Christopher Nolan",

        "releaseYear": 2010

    },

    {

        "title": "The Shawshank Redemption",

        "director": "Frank Darabont",

        "releaseYear": 1994

    },

    {

        "title": "The Godfather",

        "director": "Francis Ford Coppola",

        "releaseYear": 1972

    },

    {

        "title": "Pulp Fiction",

        "director": "Quentin Tarantino",

        "releaseYear": 1994

    },

    {

        "title": "The Dark Knight",

        "director": "Christopher Nolan",

        "releaseYear": 2008

    },

    {

        "title": "Schindler's List",

        "director": "Steven Spielberg",

        "releaseYear": 1993

    },

    {

        "title": "Forrest Gump",

        "director": "Robert Zemeckis",

        "releaseYear": 1994

    },

    {

        "title": "The Matrix",

        "director": "The Wachowskis",

        "releaseYear": 1999

    },

    {

        "title": "The Lord of the Rings: The Fellowship of the Ring",

        "director": "Peter Jackson",

        "releaseYear": 2001

    },

    {

        "title": "Titanic",

        "director": "Christopher Nolan",

        "releaseYear": 1997

    }

];


function updateDirector(movie, currentDirector) {
    movie.forEach(movie => {
        if (movie.director === currentDirector) {
            movie.director = "James Cameron";
        }
    });
}

updateDirector(moviesData, "Christopher Nolan");

console.log(moviesData);


//Q.6} Check if all the required properties ('title', 'director', 'releaseYear') exist in the movie object. 

function checkProperties() {
    for (let movie of moviesData) {
        if (!('title' in movie && 'director' in movie && 'releaseYear in movie')) {
            return false;
        }

    }
    return true;
}

const propertiesExist = checkProperties(moviesData);

console.log("Do all movies have required properties? " + (propertiesExist ? "Yes" : "No"));



//Q.7} Create a function that accept a movie title and calculate how many years ago the movie was released.

function yearsAgo(movieTitle) {
    const movie = moviesData.find(movie => movie.title === movieTitle);
    if (movie) {
        const currentYear = new Date().getFullYear();
        const yearsAgo = currentYear - movie.releaseYear;
        return yearsAgo;
    } else {
        return "Movie not found";
    }
}
const movieTitle = "Inception";
const years = yearsAgo(movieTitle);
if (typeof years === "number") {
    console.log(`${movieTitle} was released ${years} years ago.`);
} else {
    console.log(years);
}



//Q.8} Implement a function to check if any movie titles have more than 50 characters.

function movieTitleLength(movies) {
    for (let movie of movies) {
        if (movie.title.length > 50) {
            return true;
        }
    }
    return false;
}

const hasLongTitles = movieTitleLength(moviesData);


if (hasLongTitles) {
    console.log("Some movie titles have more than 50 characters.");
} else {
    console.log("All movie titles have 50 characters or less.");
}
