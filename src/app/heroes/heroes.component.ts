import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes', // css element selector
  templateUrl: './heroes.component.html', // component file path
  styleUrls: ['./heroes.component.css'] // private css file path
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  selectedHero: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit(): void { // initialaize logic
  }

}
