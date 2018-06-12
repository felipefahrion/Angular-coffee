import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AppCrudComponent } from './app-crud/app-crud.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCrudComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
