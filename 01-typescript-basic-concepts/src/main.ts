import { age, name } from './bases/01-types'
import { ids, pokemons } from './bases/02-objects'
import { Ask, Ivysaur } from './bases/03-classes'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>TYPES</h2>
    <p>Hello ${name} ${age}</p>

    <h2>OBJECTS</h2>
    <p>object array numbers: ${ids.join(',')}</p>
    <p>first pokemon name: ${pokemons[0].name}</p>

    <h2>CLASSES</h2>
    <p>Ivysaur id: ${Ivysaur.id}</p>
    <img src="${Ivysaur.imageUrl}"/>
    <p>${Ask.name} ${Ask.lastname}</p>
  </div>
`