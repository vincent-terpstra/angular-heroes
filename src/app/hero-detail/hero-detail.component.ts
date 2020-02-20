import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})



export class HeroDetailComponent implements OnInit, OnChanges {
  @Input() hero : Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    if(this.hero == null)
      this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
    .subscribe(()=> this.goBack());
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }
  oldHeroName:string;
  changeDetected: boolean;
  noChangeCount: number;
  ngDoCheck() {
    if(this.hero === undefined) return;
    if (this.hero.name !== this.oldHeroName) {
      this.changeDetected = true;
      console.log(`DoCheck: Hero name changed to "${this.hero.name}" from "${this.oldHeroName}"`);
      this.oldHeroName = this.hero.name;
    }
  
    if (this.changeDetected) {
        this.noChangeCount = 0;
    } else {
        // log that hook was called when there was no relevant change.
        let count = this.noChangeCount += 1;
        let noChangeMsg = `DoCheck called ${count}x when no change to hero or power`;
        if (count === 1) {
          // add new "no change" message
          console.log(noChangeMsg);
        }
    }
  
    this.changeDetected = false;
  }
}
