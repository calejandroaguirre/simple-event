import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from "app/shared/shared.module";
import { HeaderComponent } from "app/home/header.component";
import { AboutComponent } from "app/home/about.component";
import { ServicesComponent } from "app/home/services.component";
import { CallOutComponent } from "app/home/callout.component";
import { PortfolioComponent } from "app/home/portfolio.component";
import { CallToAction } from "app/home/call-to-action";
import { MapComponent } from "app/home/map.component";

@NgModule({
  declarations: [
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    CallOutComponent,
    PortfolioComponent,
    CallToAction,
    MapComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
