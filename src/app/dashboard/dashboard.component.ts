import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  selected: Hero;
  fontSizePx: number;
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.fontSizePx = 12;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes.slice(0, 4)
        this.selected = heroes[0];
      });
  }

  onSelect(hero:Hero): void {
    this.selected = hero;
  }
}