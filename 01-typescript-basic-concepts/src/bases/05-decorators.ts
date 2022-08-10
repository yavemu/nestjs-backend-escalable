class BadPokemon {

    constructor(
        public readonly id: number,
        public name: string
    ){}

    hello(){
        console.log(`Hello!!! I am ${this.name}`);
    }

    scream(){
        console.log(`I don't want to scream!`);
    }

    speak(){
        this.hello()
        console.log(`I don't want to speak!`);
        this.scream()
    }
}

const MyFirstDecorator = () => {
    
    const otherFunction = (target: Function) => {
        console.log(`otherFunction target:`, target);
        return BadPokemon
        
    }

    return otherFunction
}



@MyFirstDecorator()
export class Pokemon {

    constructor(
        public readonly id: number,
        public name: string
    ){}

    scream(){
        console.log(`${this.name.toUpperCase()}!!`);
    }

    speak(){
        console.log(`${this.name}!, ${this.name}!`);
        this.scream()
    }
}


export const psyduck = new Pokemon(54,"Psyduck")

psyduck.speak()