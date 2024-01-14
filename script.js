const APILINK = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=412fe5a89c75bff5bcc607edb6a772b7&page=1';
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=412fe5a89c75bff5bcc607edb6a772b7&query=";


const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK)


function returnMovies(url){
  let count = 0;
  fetch(url).then(res => res.json())
  .then(function(data){
  data.results.forEach(element => {
    console.log(element);
    const div_card = document.createElement('div');
    div_card.setAttribute('class', 'card');
    const movie_name = `${element.title}`;
    div_card.setAttribute('onclick', `location.href="movie.html?id=${element.id}&title=${element.title}&overview=${element.overview}&poster_path=${element.poster_path}&release_date=${element.release_date}&backdrop_path=${element.backdrop_path}";`);

    const div_row = document.createElement('div');
    div_row.setAttribute('class', 'row');
    
    const div_column = document.createElement('div');
    div_column.setAttribute('class', 'column');
    
    const image = document.createElement('img');
    image.setAttribute('class', 'thumbnail');
    image.setAttribute('id', 'image');
    
    const title = document.createElement('h3');
    title.setAttribute('id', 'title');
    
    const center = document.createElement('center');

    title.innerHTML = `${element.title}`;
    image.src = IMG_PATH + element.poster_path;

    center.appendChild(image);
    div_card.appendChild(center);
    div_card.appendChild(title);
    div_column.appendChild(div_card);
    div_row.appendChild(div_column);

    main.appendChild(div_row);

    count += 1;

  });
  if(count == 0) {
    const no_results = document.querySelector('.no_results');
    no_results.style.display = 'flex';
  }
  else {
    const no_results = document.querySelector('.no_results');
    no_results.style.display = 'none';
  }
});
}

form.addEventListener("submit", (e) => {
e.preventDefault();
main.innerHTML = '';

const searchItem = search.value;

if (searchItem) {
  returnMovies(SEARCHAPI + searchItem);
    search.value = "";
}
});


function goToHome(){
  returnMovies(APILINK);
}
