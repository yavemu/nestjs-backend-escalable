export const ids: number[] = [1,2,3,4] // array of numbers

//objets and interface to validate the object structure 


//An interface allow create rules and conditions to special types like the objects
//An interface is like a class but its used only to validate an object and it can't to be instance
interface IPokemon {
    id: number;
    name: string;
    age?: number; // add ? to end of key if value is optional
}

    //Typescript ERRORbecause is not a class, its a Interface
        // const charmander = new IPokemon()

    //Typescript ERROR because id is required
        // const bulbasaur: IPokemon = {
        //     name: 'bulbasaur',
        // }


//age is optional
const pikachu: IPokemon = {
    id: 1,
    name: 'pikachu',
}

export const pokemons: IPokemon[] = [
    pikachu,
    {
        id: 2,
        name: 'Raichu',
        age: 5
    }
]