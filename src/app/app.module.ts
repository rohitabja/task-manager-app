import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewTaskComponent } from './view-task/view-task.component';

import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { SearchTaskComponent } from './search-task/search-task.component';
import { MatSliderModule } from '@angular/material/slider'
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { SearchTaskPipe } from './search-task.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ViewTaskComponent,
    HeroesComponent,
    HeroDetailComponent,
    AddTaskComponent,
    SearchTaskComponent,
    HeaderComponent,
    FooterComponent,
    SearchTaskPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatDatepickerModule,
    MatInputModule,
    MatMomentDateModule,
    NgxBootstrapSliderModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
