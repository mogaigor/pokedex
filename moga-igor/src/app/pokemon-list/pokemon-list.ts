import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon.models';
import { PokemonDetail } from '../pokemon-detail/pokemon-detail';
@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonDetail],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
})
export class PokemonList {
  myPokemons: Pokemon[];
  selectedElement?: Pokemon;

  constructor() {
    this.myPokemons = [
    {
      id: 7,
      name: 'Squirtle',
      type: 'Acqua',
      hp: 44,
      imageUrl: 'assets/pokemon-images/squirtle.png',
      description: 'Un Pokémon tartaruga che spara acqua dalla bocca.',
    },
    {
      id: 25,
      name: 'Pikachu',
      type: 'Elettro',
      hp: 35,
      imageUrl: 'assets/pokemon-images/pikachu.png',
      description: 'Accumula elettricità nelle guance e la rilascia in attacco.',
    },
    {
      id: 39,
      name: 'Jigglypuff',
      type: 'Normale',
      hp: 115,
      imageUrl: 'assets/pokemon-images/jiggly.png',
      description: 'Canta una ninna nanna che fa addormentare chi l’ascolta.',
    },
    {
      id: 52,
      name: 'Meowth',
      type: 'Normale',
      hp: 40,
      imageUrl: 'assets/pokemon-images/Meowth.png',
      description: 'Ama gli oggetti luccicanti e le monete.',
    },
    {
      id: 66,
      name: 'Machop',
      type: 'Lotta',
      hp: 70,
      imageUrl: 'assets/pokemon-images/machop.png',
      description: 'Si allena continuamente per diventare sempre più forte.',
    },
    {
      id: 74,
      name: 'Geodude',
      type: 'Roccia',
      hp: 40,
      imageUrl: 'assets/pokemon-images/geodude.png',
      description: 'Vive nelle montagne e si mimetizza tra le rocce.',
    },
    {
      id: 92,
      name: 'Gastly',
      type: 'Spettro',
      hp: 30,
      imageUrl: 'assets/pokemon-images/gastly.png',
      description: 'Un Pokémon fatto di gas che può avvelenare i nemici.',
    },
    {
      id: 133,
      name: 'Eevee',
      type: 'Normale',
      hp: 55,
      imageUrl: 'assets/pokemon-images/evee.png',
      description: 'Ha un DNA instabile che gli permette di evolversi in varie forme.',
    },
    {
      id: 147,
      name: 'Dratini',
      type: 'Drago',
      hp: 41,
      imageUrl: 'assets/pokemon-images/dratini.png',
      description: 'Un raro Pokémon drago che vive vicino all’acqua.',
    },
    {
      id: 150,
      name: 'Mewtwo',
      type: 'Psico',
      hp: 106,
      imageUrl: 'assets/pokemon-images/mew.png',
      description: 'Creato in laboratorio, possiede poteri psichici straordinari.',
    },
  ];
  }

  select(pokemon: Pokemon): void {
    this.selectedElement = pokemon;
  }
}
