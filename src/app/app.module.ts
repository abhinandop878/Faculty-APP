import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { ViewfacultyComponent } from './viewfaculty/viewfaculty.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddFacultyComponent,
    ViewfacultyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
