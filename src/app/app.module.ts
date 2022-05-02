import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
//import { TempdrivenFormComponent } from './tempdriven-form/tempdriven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    //TempdrivenFormComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule, use only for template driven approach
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
