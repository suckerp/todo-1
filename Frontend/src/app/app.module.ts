import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { TodofilterPipe } from './pipes/todofilter.pipe';

import { FormsModule } from '@angular/forms'
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodolistComponent } from './todolist/todolist.component';
import { DbService } from './services/db.service';
import { PersonComponent } from './person/person.component';
import { ViewDirective } from './directives/view.directive';
import { StatusPipe } from './pipes/status.pipe';
import { GetNamePipe } from './pipes/get-name.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    TodofilterPipe,
    TodolistComponent,
    PersonComponent,
    ViewDirective,
    StatusPipe,
    GetNamePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
