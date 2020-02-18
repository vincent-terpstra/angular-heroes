import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

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

  @ViewChild(HeroDetailComponent, {static:false}) viewChild: HeroDetailComponent;

  ngAfterViewInit(){
    console.log("After View Created");
  }
  prevHero: string;
  ngAfterViewChecked(){
    if(this.viewChild == undefined) return;
    let name = this.viewChild.hero.name;
    if(this.prevHero === name){
      console.log('AfterViewChecked (no change)');
    } else {
      console.log(`AfterViewChecked ${this.prevHero} => ${name}`);
      this.prevHero = this.viewChild.hero.name;
      
    }
  }
}