import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes', // css element selector
  templateUrl: './heroes.component.html', // component file path
  styleUrls: ['./heroes.component.css'] // private css file path
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  // Constructor should only write parameter initialization
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void { // initialaize logic
    this.getHeroes(); // Don't write on constructor
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }

  // Observable.subscribe() an be handled asynchronously
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
