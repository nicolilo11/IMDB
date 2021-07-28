import { Movie } from "./movie";
import { Professional } from './claseProfesional';
import * as fs from 'fs';

export class IMDB
{
    public peliculas:Movie[] = new Array();

    constructor (peliculas: Movie[])
    {
        this.peliculas = peliculas;
    }

    escribirEnFicheroJSON(nombreFichero: string)
    {
        let jsonParametro:string = JSON.stringify(this.peliculas, null, 2);

        fs.writeFileSync(nombreFichero, jsonParametro);
    }
}