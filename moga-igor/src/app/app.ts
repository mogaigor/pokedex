import { Component, signal } from '@angular/core';
import { PokemonList } from './pokemon-list/pokemon-list';

@Component({
  selector: 'app-root',
  imports: [PokemonList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('moga-igor');
}
