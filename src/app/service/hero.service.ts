import { Injectable } from '@angular/core';
import { Hero } from 'app/model/hero';
import { HEROES } from 'app/model/mock-heroes';

@Injectable()
export class HeroService {
   
  constructor(){
  }
getHeroes() : Hero[]{
  return HEROES;
}
}
