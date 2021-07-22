export class Professional
{
    public name: string;
    public age: number;
    public gender: string;
    public weight: number;
    public height: number;
    public hairColor: string;
    public eyeColor: string;
    public race: string;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;

    constructor(name: string, age: number, gender: string,
        weight: number, height: number, hairColor: string, 
        eyeColor: string, race: string, isRetired: boolean,
        nationality: string, oscarsNumber: number, profession: string)
        {
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.weight = weight;
            this. height = height;
            this.hairColor = hairColor;
            this.eyeColor = eyeColor;
            this.race = race;
            this.isRetired = isRetired;
            this.nationality = nationality;
            this.oscarsNumber = oscarsNumber;
            this.profession = profession;
        }

    valorAtributos()
    {
        let valores = "·" + this.name + "\n" + 
                      "·" + this.age + "\n" +
                      "·" + this.gender + "\n" +
                      "·" + this.weight + "\n" + 
                      "·" + this.height + "\n" + 
                      "·" + this.hairColor + "\n" + 
                      "·" + this.eyeColor + "\n" + 
                      "·" + this.race + "\n" + 
                      "·" + this.isRetired + "\n" + 
                      "·" + this.nationality + "\n" + 
                      "·" + this.oscarsNumber + "\n" + 
                      "·" + this.profession + "\n" 
        console.log(valores);       
    }
}