import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header.component";
import {HeroComponents} from "./components/hero.components";
import {AboutmeCompnent} from "./components/aboutme.compnent";
import {SmartComponent} from "./components/smart.component";
import {SkillComponent} from "./components/skill.component";
import {FutureComponent} from "./components/future.component";
import {FooterComponent} from "./components/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponents,
    AboutmeCompnent,
    SmartComponent,
    SkillComponent,
    FutureComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
