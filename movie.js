const url = new URL(location.href); 
const movieId = url.searchParams.get("id");
const movieTitle = url.searchParams.get("title");
const overview = url.searchParams.get("overview");
const poster_path = url.searchParams.get("poster_path");
const backdrop_path = url.searchParams.get("backdrop_path");
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const APILINK = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers&api_key=412fe5a89c75bff5bcc607edb6a772b7`;
console.log(overview);


const main = document.getElementById("sectionMovie");
const sectionPlot = document.getElementById("sectionPlot");
const title = document.getElementById("title");

console.log(IMG_PATH + backdrop_path);

const backdrop = document.getElementById("space");
backdrop.style.backgroundImage = `url(${IMG_PATH}${backdrop_path})`;

const movie_name = movieTitle;

const image = document.createElement('img');
image.setAttribute('class', 'thumbnail');
image.setAttribute('id', 'imageMovie');

const plotTitle = document.createElement('h3');
plotTitle.innerHTML = 'Overview'
sectionPlot.appendChild(plotTitle);

const plot = document.createElement('p');
sectionPlot.appendChild(plot);
plot.setAttribute('id', 'description');
plot.innerHTML = overview;
plot.style.display = 'inline';

const head = document.createElement('h2');
head.setAttribute('id', 'head');

head.innerHTML = movieTitle;
image.src = IMG_PATH + poster_path;

main.appendChild(image);
main.appendChild(head);

const buy = document.createElement('div');
buy.setAttribute('id', 'buy');

main.appendChild(buy);

head.style.display = 'inline';
const watch = document.createElement('h3');
watch.setAttribute('id', 'watch');
watch.innerHTML = 'Where to watch';

main.appendChild(watch);
watch.style.display = 'inline';
watch.style.position = 'fixed';


const options2 = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTJmZTVhODljNzViZmY1YmNjNjA3ZWRiNmE3NzJiNyIsInN1YiI6IjY1YTM1MGZhMzk1NDlhMDEyZjEwOWNhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IZ6pmvjlWb_jYfmrnWtheGZhsDtbLvE4vFxyVe5SA_Q'
  }
};

fetch(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers`, options2)
  .then(response => response.json())
  .then(function(response){let count = 0;
    try{
      response.results.US.buy.forEach(element => {
      const div = document.createElement('div');
      const img = document.createElement('img');
      img.src = IMG_PATH + element.logo_path;
      div.appendChild(img);
      img.style.width = '50px';
      img.style.margin = '10px';

      const provider = document.createElement('p');
      provider.innerHTML = element.provider_name;
      div.appendChild(provider);
      buy.appendChild(div);

      div.style.display = 'inline-flex';
      count += 1;
      return;
      });
    }
    catch{}
    if (count != 0) {
      return;
    }

    try{
      console.log(count);
      response.results.US.flatrate.forEach(element => {
      const div = document.createElement('div');
      const img = document.createElement('img');
      img.src = IMG_PATH + element.logo_path;
      div.appendChild(img);
      img.style.width = '50px';
      img.style.margin = '10px';

      const provider = document.createElement('p');
      provider.innerHTML = element.provider_name;
      div.appendChild(provider);
      buy.appendChild(div);

      div.style.display = 'inline-flex';
      count += 1;
      return;
    });
  }
  catch{}
  if (count != 0) {
    return;
  }

  try{
      response.results.US.rent.forEach(element => {
      const div = document.createElement('div');
      const img = document.createElement('img');
      img.src = IMG_PATH + element.logo_path;
      div.appendChild(img);
      img.style.width = '50px';
      img.style.margin = '10px';

      const provider = document.createElement('p');
      provider.innerHTML = element.provider_name;
      div.appendChild(provider);
      buy.appendChild(div);

      div.style.display = 'inline-flex';
      count += 1;
  });
}
catch{}
if (count != 0) {
  return;
}
  if (count == 0){
    const div = document.createElement('div');
    const para = document.createElement('h3');

    para.innerHTML = 'No information available';
    div.appendChild(para);
    buy.appendChild(div);
  }
})

  function returnMovies(url) {
    let count = 0;
    fetch(url)
      .then(res => res.json())
      .then(function(data) {
        data.results.forEach(element => {
          // 
          console.log(element);
        });
      });
    }