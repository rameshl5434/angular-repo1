import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaheshComponent } from './mahesh/mahesh.component';
import { RamanaComponent } from './ramana/ramana.component';
import { SrinuComponent } from './srinu/srinu.component';
import { Srinu2Component } from './srinu2/srinu2.component';
import { HttpClientModule } from  '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MaheshComponent,
    RamanaComponent,
    SrinuComponent,
    Srinu2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
