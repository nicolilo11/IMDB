import { Movie } from "./movie";
import { IMDB } from "./claseIMDB";
import * as fs from 'fs';
import { InterfacePelicula } from './interfaces';
import { IMDBInterface } from "./interfaces";
import { title } from 'process';

// Esta constante importa del directorio readlineSync la funcionalidad
// Para esto previamente hay que hacer tres pasos: Instalar NPM INIT ; npm install @types/node --save-dev ;
// y npm install readline

const readLine = require("readline");

let rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Introduce movie tittle: ", function(nombre: string){
    rl.question("Introduce the relase year: ", function(año: number){
        rl.question("Introduce the nationality: ", function(nacionalidad: string){
            rl.question("Introduce the movie genre: ", function(genero: string){
                
                let newMovie:Movie = new Movie(nombre, año, nacionalidad,genero);
                let jsonIMDB:string = JSON.stringify(newMovie, null, 2);
                let MovieInterface: InterfacePelicula =  JSON.parse(jsonIMDB);
                let ficheroJson:string = fs.readFileSync("imdbBBDD.json", {encoding:'utf-8'});
                let nuevoObJson: IMDBInterface =  JSON.parse(ficheroJson)
                nuevoObJson.peliculas.push(MovieInterface);
                let JSONConPelicula:string = JSON.stringify(nuevoObJson, null ,2);
                fs.writeFileSync("imdbBBDD.json", JSONConPelicula);
                
                rl.close();
            })
        })
    })    
})

