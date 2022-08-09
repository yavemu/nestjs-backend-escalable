//constructor default method
export class Pokemon {
    public readonly id: number;
    public name: string;

    // get method
    get imageUrl(): string{
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`
    }

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }

    //custom private method
    private scream(){
        console.log(`${this.name.toUpperCase()}!!!`)
    }

    //custom public method
    speak(){
        console.log(`${this.name}, ${this.name}`)
        this.scream()
    }
}

export const Ivysaur = new Pokemon(2, "Ivysaur")
Ivysaur.speak()
//Ivysaur.scream() Error, its private method

// constructor short method 
export class Trainer {
    constructor(
        public readonly id: number, 
        public name: string,
        public lastname: string
    ){}   
}

export const Ask = new Trainer(1, 'Ask', 'ketchum')