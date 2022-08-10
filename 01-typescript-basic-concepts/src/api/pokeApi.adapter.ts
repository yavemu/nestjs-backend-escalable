import axios from 'axios';

export class PokeApiAdapter {
    
    private readonly HttpClient = axios

    //<T> represent the first Generic Type
    async get<T>(url:string): Promise<T> {
        const { data } = await this.HttpClient.get<T>(url);        

        return data
    }
}