import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from "./components/principal/principal.component";
import { EditarClienteComponent } from "./components/principal/editar-cliente/editar-cliente.component";
import { InserirClienteComponent } from "./components/principal/inserir-cliente/inserir-cliente.component";

export const appRoutes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full' },
  { path: 'principal', component: PrincipalComponent },
  { path: 'editar', component: EditarClienteComponent },
  { path: 'inserir', component: InserirClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
