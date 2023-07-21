import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrincipalModule } from './components/principal/principal.module';
import {RouterLink, RouterOutlet} from "@angular/router";
import {PrincipalComponent} from "./components/principal/principal.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
    imports: [
        BrowserModule,
        PrincipalModule,
        RouterOutlet,
        ReactiveFormsModule,
        FormsModule,
        RouterLink,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
