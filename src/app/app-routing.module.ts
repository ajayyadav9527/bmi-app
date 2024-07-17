import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnderweightComponent } from './underweight/underweight.component';
import { NormalWeightComponent } from './normal-weight/normal-weight.component';
import { OverweightComponent } from './overweight/overweight.component';
import { ObeseComponent } from './obese/obese.component';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to default path
  { path: 'home', component: HomeComponentComponent },
  { path: 'underweight', component: UnderweightComponent },
  { path: 'normal-weight', component: NormalWeightComponent },
  { path: 'overweight', component: OverweightComponent },
  { path: 'obese', component: ObeseComponent },
  { path: '**', redirectTo: '/home' } // Redirect to default path for unmatched routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
