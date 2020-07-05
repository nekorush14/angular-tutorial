import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // This method returns Observable which can output the hero array
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fatched heroes');
    return of(HEROES);
  }
}
