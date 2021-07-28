import { Professional } from "./claseProfesional";
import { Movie } from "./movie";
import { IMDB } from './claseIMDB';

///*****OBJETOS CLASE PROFESSIONAL*******///

let bradd: Professional = new Professional("William Bradley", "Pitt", 57, "Male", 80, 1.82, "Blond", "Blue",
    false, "EE.UU", 2, "Film Actor - FilmProducer", "Dallas from CBS",
    "Once Upon a Time in Hollywood", "Los Angeles - EE.UU", 60, "Doesn't have");

let quentin: Professional = new Professional("Quentin Jerome ", "Tarantino", 58, "Male", 90, 1.85, "Dark Brown",
    "Dark Brown", false, "EE.UU", 2, "Film Director - Film Writer",
    "Reservoir Dogs", "Once Upon a Time in Hollywood", "Ramat Aviv Gimel - Israel",
    73, "@tarantinoxx");

let zhao: Professional = new Professional("Zhao", "Ting", 39, "Female", 68, 1.70, "Black",
    "Dark Brown", false, "China", 2, "Film Director -  Film Producer",
    "Songs My Brothers Taught Me", "Nomadland", "California - EE.UU",
    25, "@nomadlandfilm");

let sylvester: Professional = new Professional("Sylvester Gardenzio", "Stallone ", 75, "Male", 68, 1.77, "Natural Gray",
    "Dark Brown", true, "EE.UU", 3, "Film Actor -  Film Producer",
    "The Party at Kitty and Stud's ", "Rambo V: Last Blood ", "Los Angeles - EE.UU",
    52, "@officialslystallone");

let reed: Professional = new Professional("Reed ", "Morano", 44, "Male", 68, 1.70, "Brown",
    "Dark Brown", false, "EE.UU", 0, "Film Director - Cinematographer",
    "Off the Grid: Life on the Mesa", "The Rhythm Section", "New York - EE.UU",
    23, "@reedmorano");

let stuart: Professional = new Professional("Charles Stuart", "Kaufman ", 62, "Male", 62, 1.63, "Brown",
    "Brown", true, "EE.UU", 1, "Film Writer",
    "Being John Malkovich", "I'm Thinking of Ending Things", "Pasadena - EE.UU",
    17, "Www.beingcharliekaufman.com");

let polanski: Professional = new Professional("Rajmund Roman Thierry", "Polański", 87, "Male", 62, 1.65, "Natural Gray",
    "Dark Brown", false, "France", 1, "Film Writer - Film Director - Film Actor",
    "Pokolenie", "An oficial and a Spy", "Paris - France",
    42, "Doesn't have");

let darin: Professional = new Professional("Ricardo Alberto ", "Darín ", 64, "Male", 73, 1.72, "Black",
    "Blue", false, "Argentina", 0, "Film Actor -  Film Director",
    "La Culpa", "1985", "Buenos Aires - Argentina",
    91, "@ricardodarinok");

let campanella: Professional = new Professional("Juan José", "Campanella", 62, "Male", 68, 1.70, "Bold",
    "Dark Brown", false, "Argentina", 1, "Film Director -  Film Producer",
    "Prioridad nacional", "Law & Order: Special Victims Unit", "Nueva York - EE.UU",
    32, "www.100bares.com/campanella.htm");

let scott: Professional = new Professional("Seann William", "Scott", 44, "Male", 80, 1.80, "Black",
    "Black", false, "EE.UU", 0, "Film Actor",
    "Unhappily Ever After", "Already Gone", "California - EE.UU",
    52, "Doesn't have");

let rebella: Professional = new Professional("Juan Pablo", "Rebella", 31, "Male", 80, 1.80, "Black",
    "Black", true, "Uruguay", 0, "Film Director",
    "Buenos y santos", "Whisky", "Montevideo - Uruguay",
    5, "Doesn't have");

let deNiro: Professional = new Professional("Robert Anthony", "De Niro", 77, "Male", 70, 1.77, "Natural Gray",
    "Black", false, "EE.UU", 2, "Film Actor - Film Director",
    "Three Rooms in Manhattan", "Killers of the Flower Moon", "New York - EE.UU",
    126, "Doesn't have");

///*****METODO DE CLASE PROFESSIONAL*****///

bradd.valorAtributos();
quentin.valorAtributos();
zhao.valorAtributos();
sylvester.valorAtributos();
reed.valorAtributos();
stuart.valorAtributos();
polanski.valorAtributos();
darin.valorAtributos();
campanella.valorAtributos();
scott.valorAtributos();
rebella.valorAtributos();
deNiro.valorAtributos();

//////// objetos Movie

/// Rocky I

let RockyI: Movie = new Movie("Rocky I", 1976, "United States", "Sports Film");
let RockyIActores: string[] = ["Sylvester Stallone"];
let RockyIWriters: string[] = ["Sylvester Stallone"];
RockyI.setActors(RockyIActores);
RockyI.setDirector("John G. Avildsen");
RockyI.setLanguage("English");
RockyI.setWriter(RockyIWriters);
RockyI.setPlatform("Hbo");
RockyI.setMainCharacterName("Rocky Balboa");
RockyI.setIsMCU("no");
RockyI.setDistributor("United Artists");
RockyI.setProducer("Irwin Winkler");

//console.log(RockyI);
//RockyI.printall();


//// Ragging Bull

let ToroSalvaje: Movie = new Movie("Raging Bull", 1980, "United Staes", "sports drama")
let ToroSalvajeWriters: string[] = ["Paul Schrader", "Mardik Martin"];
let ToroSalvajeActores: string[] = ["Robert De Niro", "Cathy Moriarty", " Joe Pesci", "Frank Vincent", "Nicholas Colasantoa", "Mario Gallo", "John Turturro", "Frank Adonis", "Martin Scorsese"]
ToroSalvaje.setDirector("Martin Scorsese");
ToroSalvaje.setProducer("United Artists");
ToroSalvaje.setActors(ToroSalvajeActores);
ToroSalvaje.setPremiada("si");
ToroSalvaje.setLanguage("English");
ToroSalvaje.setPlatform("Amazon Prime Video");
ToroSalvaje.setMainCharacterName("Jake la Motta");
ToroSalvaje.setWriter(ToroSalvajeWriters);
ToroSalvaje.setDistributor("United Artists");
console.log(ToroSalvaje);

//// American Pie


let AmericanPie: Movie = new Movie("American Pie", 1999, "United States", "comedy")
let AmericanPieActores: string[] = ["Jason Biggs", "Chris Klein", "Thomas Ian Nicholas", "Alyson Hannigan", "Shannon Elizabeth", "Tara Reid", "Eddie Kaye Thomas", "Seann William Scott", "Eugene Levy", "Natasha Lyonne", "Mena Suvari", "Jennifer Coolidge", "Chris Owen"];
let AmericanPieWriters: string[] = ["Adam Herz"];
AmericanPie.setActors(AmericanPieActores);
AmericanPie.setDirector(" Jon Hurwitz"); // deberia ser un array, increiblemente tiene 5 direcotres
AmericanPie.setDistributor("Universal Pictures");
AmericanPie.setIsMCU
AmericanPie.setLanguage("english");
AmericanPie.setMainCharacterName("Jim Levenstein");
AmericanPie.setPlatform("Amazon Prime Video");
AmericanPie.setPremiada("si");
AmericanPie.setProducer("Universal Pictures");
AmericanPie.setWriter(AmericanPieWriters);

//// 25 Watts

let Watts25: Movie = new Movie("25 Watts", 2001, "Uruguay", "drama");
let Watts25Actores: string[] = ["Daniel Hendler", " Jorge Temponi", " Alfonso Tort"];
let Watts25escritores: string[] = ["Juan Pablo Rebella", "Pablo Stoll"]
Watts25.setActors(Watts25Actores);
Watts25.setDirector("Pablo Stoll") // faltaria Juan Pablo Rebella
Watts25.setDistributor("Cinema Tropical");
Watts25.setLanguage("español");
Watts25.setMainCharacterName("Javi");
Watts25.setPlatform("Amazon Prime Video");
Watts25.setPremiada("si");
Watts25.setProducer("Fernando Epstein");
Watts25.setWriter(Watts25escritores);
console.log(Watts25);

//////// Eternal Sunshine of the Spotless Mind

let eternalSunshineoftheSpotlessMind: Movie = new Movie("Eternal Sunshine of the Spotless Mind", 2004, "United States", "drama");
let eternalSunshineoActores: string[] = ["Jim Carrey", "Kate Winslet", "Kirsten Dunst", "Mark Ruffalo", "Elijah Wood", "Tom Wilkinson"];

let eternalSunshineoEscritores: string[] = ["Charlie Kaufman"];
eternalSunshineoftheSpotlessMind.setActors(eternalSunshineoActores);
eternalSunshineoftheSpotlessMind.setDirector("Michel Gondry");
eternalSunshineoftheSpotlessMind.setWriter(eternalSunshineoEscritores);
eternalSunshineoftheSpotlessMind.setLanguage("english");
eternalSunshineoftheSpotlessMind.setPremiada("si");
eternalSunshineoftheSpotlessMind.setDistributor("Focus Features");
eternalSunshineoftheSpotlessMind.setPlatform("Amazon Prime Video");
eternalSunshineoftheSpotlessMind.setMainCharacterName("Jim Carrey");
eternalSunshineoftheSpotlessMind.setProducer("Steve Golin"); // deberia ser un array, faltan Georges Bermann y Anthony Bregman
console.log(eternalSunshineoftheSpotlessMind);


//////// Fight Club

let fightClub: Movie = new Movie("Fight Club", 1999, "United States", "Drama");
let fightClubEscritores: string[] = ["Jim Uhls Kaufman"];
let fightClubActores: string[] = ["Edward Norton", "Brad Pitt", "Helena Bonham Carter", "Meat Loaf", "Jared Leto"];
fightClub.setActors(fightClubActores);
fightClub.setDirector("David Fincher");
fightClub.setDistributor("Twentieth Century Fox");
fightClub.setPlatform("Amazon Prime Video");
fightClub.setPremiada("no");
fightClub.setLanguage("english");
fightClub.setMainCharacterName("Brad Pitt");
fightClub.setProducer("Art Linson") // faltan mas, deberia ser un array


///// Nomadland

let nomadland: Movie = new Movie("Nomadland", 2020, "United States", "English");
let nomadlandActores: string[] = ["Frances McDormand", "David Strathairn", "Linda May,", "Charlene Swankie", "Bob Wells", "Gay DeForest", "Patricia Grier"];
let nomadlandEscritores: string[] = ["Chloé Zhao"]
nomadland.setActors(nomadlandActores);
nomadland.setWriter(nomadlandEscritores);
nomadland.setDirector("Chloé Zhao");
nomadland.setDistributor("Searchlight Pictures");
nomadland.setPlatform("Amazon Prime Video");
nomadland.setPremiada("si");
nomadland.setLanguage("english");
nomadland.setMainCharacterName("Brad Pitt");
nomadland.setProducer("Frances McDormand") // faltan mas, deberia ser un array

//// Pulp Fiction

let pulpFiction: Movie = new Movie("Pulp Fiction", 1994, "United States", "English");
let pulpFictionActores: string[] = ["Frances McDormand", "David Strathairn", "Linda May,", "Charlene Swankie", "Bob Wells", "Gay DeForest", "Patricia Grier"];
let pulpFictionEscritores: string[] = ["Chloé Zhao"]

pulpFiction.setActors(pulpFictionActores);
pulpFiction.setWriter(pulpFictionEscritores);
pulpFiction.setDirector("Quentin Tarantino");
pulpFiction.setLanguage("English");
pulpFiction.setMainCharacterName("John Travolta")
pulpFiction.setPlatform("Starz");
pulpFiction.setDistributor("Miramax");
pulpFiction.setProducer("Danny DeVito");
pulpFiction.setPremiada("si");


///// El Secreto de sus Ojos

let elSecretoDeSusOjos: Movie = new Movie("El Secreto de sus Ojos", 2009, "Argentina", "Spanish");
let elSecretoActores: string[] = ["Ricardo Darín", "Soledad Villamil", "Pablo Rago", "Javier Godino", "Guillermo Francella"];
let elSecretoEscritores: string[] = ["Juan José Campanella", "Eduardo Sacheri"];

elSecretoDeSusOjos.setActors(elSecretoActores);
elSecretoDeSusOjos.setWriter(elSecretoEscritores);
elSecretoDeSusOjos.setDirector("Juan José Campanella");
elSecretoDeSusOjos.setMainCharacterName("Ricardo Darín");
elSecretoDeSusOjos.setPlatform("HBO");
elSecretoDeSusOjos.setDistributor("Distribution Company");
elSecretoDeSusOjos.setProducer("Juan José Campanella");
elSecretoDeSusOjos.setPremiada("si");


//// El Pianista

let elPianista: Movie = new Movie("El Pianista", 2002, "United States", "English");
let elPianistaActores: string[] = [];
let elPianistaWriters: string[] = [];
elPianista.setActors(elPianistaActores);
elPianista.setWriter(elPianistaWriters);
elPianista.setPlatform("Amazon Prime Video");
elPianista.setMainCharacterName("Władysław 'Władek' Szpilman");
elPianista.setPlatform("Netflix");
elPianista.setDistributor("Universal");
elPianista.setProducer("Roman Polanski")
elPianista.setPremiada("si");






///****IMPLEMENTACION DE CLASE IMDB****///

let objetoIMDB: IMDB = new IMDB([nomadland, fightClub, eternalSunshineoftheSpotlessMind, Watts25])


let peliculas: Movie[] = [elPianista, elSecretoDeSusOjos, pulpFiction, nomadland];
let objetoIMDB2: IMDB = new IMDB(peliculas);

console.log(objetoIMDB2);


////****CONVERTIR A JSON OBJETO TIPO IMDB****////

let jsonIMDB:string = JSON.stringify(objetoIMDB, null, 2);

console.log(jsonIMDB);

// var fs = require("fs");
import * as fs from "fs";

fs.writeFileSync("imdbBBDD.json", jsonIMDB)



