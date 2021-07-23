export class Movie {

    private title: string;
    private releaseYear: number;
    private actors: string[];
    private nationality: string;
    private director: string;
    private writer: string[];
    private language: string;
    private platform: string;
    private isMCU: string;
    private mainCharacterName: string;
    private producer: string;
    private distributor: string;
    private genre: string;
    private premiada: string;

    constructor(title: string, releaseYear: number, nationality: string, genre: string) {

        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = [];
        this.nationality = nationality;
        this.director = "";
        this.writer = [];
        this.language = "";
        this.platform = "";
        this.isMCU = "";
        this.mainCharacterName = "";
        this.producer = "";
        this.distributor = "";
        this.genre = genre;
        this.premiada = "";
    }

    // get

    public getName(): string {
        return this.title;
    }


    public getPremiada(): string {
        return this.premiada;
    }

    public getReleaseYear(): number {
        return this.releaseYear;
    }

    public getActors(): string[] {
        return this.actors;
    }
    public getNationality(): string {
        return this.nationality;
    }

    public getDirector(): string {
        return this.director;
    }
    public getWriter(): string[] {
        return this.writer;
    }
    public getLanguage(): string {
        return this.language;
    }

    public getProducer(): string {
        return this.producer;
    }

    public getIsMCU(): string {

        return this.isMCU;
    }

    public getDistributor(): string {

        return this.distributor;
    }

    // Set

    public setDistributor(distributor: string): void {

        this.distributor = distributor;
    }

    public setProducer(producer: string): void {
        this.producer = producer;
    }

    public setPremiada(premiada: string): void {
        this.premiada = premiada;
    }

    public setIsMCU(isMCU: string): void {

        this.isMCU = isMCU;
    }

    public setActors(actores: string[]): void {

        this.actors = actores
    }

    public setPlatform(platform: string): void {
        this.platform = platform;
    }
    public setMainCharacterName(mainCharacterName: string): void {
        this.mainCharacterName = mainCharacterName;
    }

    public setDirector(director: string): void {
        this.director = director;
    }

    public setWriter(writer: string[]): void {
        this.writer = writer;
    }
    public setLanguage(language: string): void {
        this.language = language;
    }

    public printall() {

        let nombre: string = this.getName();

        console.log("About the movie: " + "\n" + "Title:" + this.title + "\n"
            + "\t" + "Release Year:" + this.releaseYear + "\n" + "\t" + "Actors:"
            + this.getActors() + "\n" + "\t" + "Nationality:" + this.nationality + "\n"
            + "\t" + "Color:" + this.getDirector() + "\n" + "\t" + "Writer:" + this.getWriter() + "\n"
            + "\t" + "Language: " + this.getLanguage);

    }
}