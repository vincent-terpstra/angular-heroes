import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
    heroes$: Observable<Hero[]>;
    level: number = 0;
    size: number = 0;
    heroId: number = 0;
  
  private searchTerms = new Subject<string>();

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  search(term: string): void{
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

  onKey(delta: number){
    this.level = Math.max(0, Math.min(this.level + delta, this.size));
  }
  
  getClass(id: number, heroId: number): string {
    if(id === 0 || id > this.size)
      this.size = id;
    if(id === this.level){
      this.heroId = heroId;
      return 'highlight';
    } else {
      return '';
    }
  }

  redirect(){
    if(this.heroId != 0)
      this.router.navigate(['/detail/' + this.heroId]);
  }
}
