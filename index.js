// &offset=0&orderBy=focDate
// fetch("https://gateway.marvel.com/v1/public/comics?apikey=a6943ab77d6617d4958a73abab2a9b91") // hago un fetch para buscar todos los comics

const conseguirDataPersonajeComic = () => {
  fetch(
    `https://gateway.marvel.com/v1/public/comics/${comic.dataset.id}/characters?apikey=a6943ab77d6617d4958a73abab2a9b91`
  )
    .then((res) => res.json()) // proceso la info y la convierto en json
    .then((dataComicPersonaje) => {
      // una vez que tenga eso voy a mostrar la data en la consola
      console.log("personajes de un comic", dataComicPersonaje);
      // pongo la info aca de comic
      // y aca el html del personaje
    });
};

conseguirDataComic = () => {
  fetch(
    `https://gateway.marvel.com/v1/public/comics/${comic.dataset.id}?apikey=a6943ab77d6617d4958a73abab2a9b91`
  )
    .then((res) => res.json())
    .then((dataComic) => {
      // en este momento limpio toda la lista de comics de la pagina principal
      // y agrego la info de este comic en particular

      console.log("un solo comic", dataComic);
      conseguirDataPersonajeComic();
    });
};

const conseguirDataComics = () => {
  fetch(
    "https://gateway.marvel.com/v1/public/comics?apikey=a6943ab77d6617d4958a73abab2a9b91"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("todos los comics", data);
      const comics = data.data.results;
      const container = document.querySelector("div");

      comics.map((comic) => {
        container.innerHTML += `<p class="comic" data-id="${comic.id}">${comic.title}</p> `;
      });

      const comicsHTML = document.querySelectorAll(".comic");
      // console.log(comicsHTML);

      comicsHTML.forEach((comic) => {
        comic.onclick = () => {
          console.log(comic.dataset.id);
          conseguirDataComic();
        };
      });
    });
};

conseguirDataComics();
