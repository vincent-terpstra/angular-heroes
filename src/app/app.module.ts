import { BrowserModule }   from '@angular/platform-browser';
import { NgModule }        from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService }           from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { HeroesComponent }  from './hero-list/hero-list.component';
import { FormsModule }      from '@angular/forms';
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
    SpyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
