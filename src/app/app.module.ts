import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnderweightComponent } from './underweight/underweight.component';
import { NormalWeightComponent } from './normal-weight/normal-weight.component';
import { OverweightComponent } from './overweight/overweight.component';
import { ObeseComponent } from './obese/obese.component';
import { FormsModule } from '@angular/forms';
import { HomeComponentComponent } from './home-component/home-component.component'; // Add this import for ngModel

@NgModule({
  declarations: [
    AppComponent,
    UnderweightComponent,
    NormalWeightComponent,
    OverweightComponent,
    ObeseComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Include FormsModule for ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
