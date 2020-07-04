import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes', // css element selector
  templateUrl: './heroes.component.html', // component file path
  styleUrls: ['./heroes.component.css'] // private css file path
})
export class HeroesComponent implements OnInit {
  
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnInit(): void { // initialaize logic
  }

}
