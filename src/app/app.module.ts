import { BrowserModule }   from '@angular/platform-browser';
import { NgModule }        from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService }           from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { HeroesComponent }  from './hero-list/hero-list.component';
import { FormsModule }      from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

//WARNING AVOID importing the WHOLE library (increases package size)
//import { fas } from '@fortawesome/free-solid-svg-icons';

//RATHER import seperate icons as needed
import { faAngular } from '@fortawesome/free-brands-svg-icons';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent }   from './messages/messages.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { DateComponent } from './date.component';
import { EvilComponent } from './evil.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { ResizeComponent } from './resize/resize.component';
import { SvgComponent } from './svg/svg.component';
import { KeyEventComponent } from './key-event/key-event.component';
import { SpyDirective } from './spy.directive';

import { HeroJobAdComponent } from './dynamic-loader/hero-job-ad.component';
import { HeroProfileComponent } from './dynamic-loader/hero-profile.component';

import { AdDirective } from './dynamic-loader/ad.directive';
import { AdService } from './dynamic-loader/ad.service';

import { AdBannerComponent } from "./dynamic-loader/ad-banner.component";
import { HighlightDirective } from './highlight.directive';
import { ScrolltopComponent } from './scrolltop/scrolltop.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    DateComponent,
    EvilComponent,
    DeleteButtonComponent,
    ResizeComponent,
    SvgComponent,
    KeyEventComponent,
    SpyDirective,
    AdDirective,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdBannerComponent,
    HighlightDirective,
    ScrolltopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    )
  ],
  providers: [AdService],
  entryComponents: [HeroJobAdComponent, HeroProfileComponent],
  bootstrap: [AppComponent],
})

export class AppModule {
  constructor(library: FaIconLibrary){
    //AVOID importing the whole package
    //library.addIconPacks(fas);

    library.addIcons(faAngular);
  }
}
