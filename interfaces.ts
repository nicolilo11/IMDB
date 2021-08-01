export interface IMDBInterface{
    peliculas: InterfacePelicula[]  
}
export interface InterfacePelicula{
    
    title: string,
    relaseyear: number,
    actors: string[],
    nationality: string,
    director: string,
    writer: string[],
    languaje: string,
    platform: string,
    isMCU: string,
    mainCharacterName: string,
    producer: string,
    distributor: string,
    genre: string,
    premiada: string
}
