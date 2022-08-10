import { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface';
import { PokeApiAdapter, PokeApiFetchAdapter, IHttpAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        private readonly httpClient: IHttpAdapter //Dependency Inyection + Liskov Substitution Principle
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        const data = await this.httpClient.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        console.log(`${this.name} moves:`, data.moves);
        
        return data.moves;
    }

}

const httpClientInstance = new PokeApiAdapter()
const fetchClientInstance = new PokeApiFetchAdapter()

export const charmander = new Pokemon( 4, 'Charmander', httpClientInstance );
export const charmeleon = new Pokemon( 5, 'Charmeleon', fetchClientInstance );

charmander.getMoves();
charmeleon.getMoves();