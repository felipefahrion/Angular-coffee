import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ReportComponent } from './report/report.component';
import { ListComponent } from './list/list.component';
import { AppCrudComponent } from './app-crud/app-crud.component';
import { HomeComponent } from './home/home.component';
import { GraphicsComponent } from 'src/app/graphics/graphics.component';

const routes: Routes = [
  {path:'report', component: ReportComponent},
  {path:'list', component: ListComponent},
  {path:'app-crud', component: AppCrudComponent},
  {path:'home', component: HomeComponent},
  {path:'graphics', component: GraphicsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
