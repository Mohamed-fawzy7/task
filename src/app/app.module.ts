import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgramsListComponent } from './programs-list/programs-list.component';
import { SingleProgramComponent } from './single-program/single-program.component';
import { ProgramsAppComponent } from './programs-app/programs-app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { FilterSearchInputComponent } from './filter-search-input/filter-search-input.component';
import { FilterCheckboxesComponent } from './filter-checkboxes/filter-checkboxes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramsListComponent,
    SingleProgramComponent,
    ProgramsAppComponent,
    FilterSearchInputComponent,
    FilterCheckboxesComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
