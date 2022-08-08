//constructor default method
export class Pokemon {
    public readonly id: number;
    public name: string;

    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }   
}

export const Ivysaur = new Pokemon(4, "Ivysaur")

// constructor short method 
export class Trainer {
    constructor(
        public readonly id: number, 
        public name: string,
        public lastname: string
    ){}   
}

export const Ask = new Trainer(1, 'Ask', 'ketchum')