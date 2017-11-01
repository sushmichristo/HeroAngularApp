import { Component, OnInit } from '@angular/core';
import { Hero } from 'app/model/hero';
import { HEROES } from 'app/model/mock-heroes';
import { HeroService } from 'app/service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  hero : Hero = {
    id : 1,
    name : 'Sushmi'
  }
  heroes : Hero[];
  selectedHero: Hero;
  constructor(private heroService : HeroService){}
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }

  getHeroes() : void {
   this.heroes = this.heroService.getHeroes();
  }
}

