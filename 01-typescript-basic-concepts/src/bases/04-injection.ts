import { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface';
import { PokeApiAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        private readonly httpClient: PokeApiAdapter //Dependency Inyection
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        const data = await this.httpClient.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        console.log( data.moves );
        
        return data.moves;
    }

}

const httpClientInstance = new PokeApiAdapter()
export const charmander = new Pokemon( 4, 'Charmander', httpClientInstance );

charmander.getMoves();