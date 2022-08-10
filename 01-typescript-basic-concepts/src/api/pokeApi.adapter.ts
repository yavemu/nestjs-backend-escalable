import axios from 'axios';

// Create Interface to use Liskov Substitution Principle
export interface IHttpAdapter {
    get<T>(url: string): Promise<T>;
}

export class PokeApiFetchAdapter implements IHttpAdapter {
    
    //<T> represent the first Generic Type
    async get<T>(url:string): Promise<T> {
        const response = await fetch(url);        
        
        const data: T = await response.json()
        console.log('===get Pokemon with PokeApiFetchAdapter');

        return data
    }
}

export class PokeApiAdapter implements IHttpAdapter {
    
    private readonly HttpClient = axios

    //<T> represent the first Generic Type
    async get<T>(url:string): Promise<T> {
        const { data } = await this.HttpClient.get<T>(url);        
        console.log('===get Pokemon with PokeApiAdapter');

        return data
    }
}