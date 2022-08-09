import axios from 'axios'
import { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface';
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

    //async method
    async getMoves(): Promise<Move[]>{
        const {data} = await axios.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        
        const moves: Move[] = data.moves

        return moves
    }
}

export const Ivysaur = new Pokemon(2, "Ivysaur")
Ivysaur.speak()
//Ivysaur.scream() Error, its private method
Ivysaur.getMoves()

// constructor short method 
export class Trainer {
    constructor(
        public readonly id: number, 
        public name: string,
        public lastname: string
    ){}   
}

export const Ask = new Trainer(1, 'Ask', 'ketchum')