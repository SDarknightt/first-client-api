import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, RouterOutlet} from '@angular/router';
import { InserirClienteComponent } from './inserir-cliente/inserir-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import {appRoutes} from "../../app-routing.module";


@NgModule({
  declarations: [
    InserirClienteComponent,
    EditarClienteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [PrincipalComponent]
})
export class PrincipalModule { }
