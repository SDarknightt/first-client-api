import { Component } from '@angular/core';
import {Cliente} from "../../../model/cliente.model";
import {Router} from "@angular/router";
import {PrincipalService} from "../../../service/principal.service";
import {FormControl, FormGroup} from '@angular/forms';
import {appRoutes} from "../../../app-routing.module";


@Component({
  selector: 'app-inserir-cliente',
  templateUrl: './inserir-cliente.component.html',
  styleUrls: ['./inserir-cliente.component.css']
})
export class InserirClienteComponent {
  cliente: Cliente = { id: 0, nome: '' };

  constructor(public route: Router, private principalService: PrincipalService) {
  }

  inserirCliente(clienteInserir: Cliente) {
    this.cliente = clienteInserir;
    this.principalService.inserirCliente(this.cliente).subscribe(() => {
    });
  }

}
