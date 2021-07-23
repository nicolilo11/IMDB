export class Professional
{
    public name: string;
    public age: number;
    public surname: string;
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
    public firstProject: string;
    public lastProject: string;
    public currentlyResidesIn : string;
    public numberOfProductions: number;
    public socialMedia: string;

    constructor
        (name: string, surname:string, age: number, gender: string,
        weight: number, height: number, hairColor: string, 
        eyeColor: string, isRetired: boolean,nationality: string,
        oscarsNumber: number,profession: string, firstProject: string,
        lastProject:string, currentlyResidesIn:string, 
        numberOfProductions: number, socialMedia
        )
        {
            this.name = name;
            this.surname = surname;
            this.age = age;
            this.gender = gender;
            this.weight = weight;
            this.height = height;
            this.hairColor = hairColor;
            this.eyeColor = eyeColor;
            this.isRetired = isRetired;
            this.nationality = nationality;
            this.oscarsNumber = oscarsNumber;
            this.profession = profession;
            this.firstProject = firstProject;
            this.lastProject = lastProject;
            this.currentlyResidesIn = currentlyResidesIn;
            this.numberOfProductions = numberOfProductions;
            this.socialMedia = socialMedia;
        }

    public valorAtributos()
    {
        let valores = "•" + this.name + "\n" +
                      "•" + this.surname + "\n" + 
                      "•" + this.age + "\n" +
                      "•" + this.gender + "\n" +
                      "•" + this.weight + "\n" + 
                      "•" + this.height + "\n" + 
                      "•" + this.hairColor + "\n" + 
                      "•" + this.eyeColor + "\n" + 
                      "•" + this.race + "\n" + 
                      "•" + this.isRetired + "\n" + 
                      "•" + this.nationality + "\n" + 
                      "•" + this.oscarsNumber + "\n" + 
                      "•" + this.profession + "\n" +
                      "•" + this.firstProject + "\n" +
                      "•" + this.lastProject + "\n" +
                      "•" + this.currentlyResidesIn + "\n" +
                      "•" + this.numberOfProductions + "\n" 
                      
        console.log(valores);       
    }
}