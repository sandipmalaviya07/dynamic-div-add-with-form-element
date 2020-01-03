import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateComponent } from './template.component';
 

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent
  ],
  imports: [ 
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {



 }
 
