import { Movie } from "./movie";
import { Professional } from './claseProfesional';

export class IMDB
{
    public peliculas:Movie[] = new Array();

    constructor (peliculas: Movie[])
    {
        this.peliculas = peliculas;
    }
}