import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AppCrudComponent } from './app-crud/app-crud.component';
import { ListComponent } from './list/list.component';
import { ReportComponent } from './report/report.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { GraphicsComponent } from './graphics/graphics.component';

@NgModule({
  declarations: [
    AppComponent,
    AppCrudComponent,
    ListComponent,
    ReportComponent,
    HomeComponent,
    GraphicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
