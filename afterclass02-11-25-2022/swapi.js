import axios from "axios";

class Character {
  constructor(name, gender, hair_color) {
    this.name = name;
    this.gender = gender;
    this.hair_color = hair_color;
  }
}

class Planet {
  constructor(name, terrain, gravity, diameter, population) {
    this.name = name;
    this.terrain = terrain;
    this.gravity = gravity;
    this.diameter = diameter;
    this.population = population;
  }
}

class Film {
  constructor(title) {
    this.title = title;
    this.planets = [];
    this.characters = [];
  }
}

async function getMovies() {
  try {
    const films = [];
    const movies = (await axios.get("https://swapi.dev/api/films/")).data.results;
    for await (const movie of movies) {
      const { title, characters, planets } = movie;
      const film = new Film(title);
      for await (const characterURL of characters) {
        const character = (await axios.get(characterURL)).data;
        const { name, gender, hair_color } = character;
        const newCharacter = new Character(name, gender, hair_color);
        film.characters.push(newCharacter);
        console.log(newCharacter);
      }
      for await (const planetURL of planets) {
        const planet = (await axios.get(planetURL)).data;
        const { name, terrain, gravity, diameter, population } = planet;
        const newPlanet = new Planet(name, terrain, gravity, diameter, population);
        film.planets.push(newPlanet);
        console.log(newPlanet);
      }
      films.push(film);
    }
    console.log(films);
  } catch (error) {
    console.log(error);
  }
}

getMovies();
