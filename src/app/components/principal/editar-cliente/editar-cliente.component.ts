import { Component } from '@angular/core';
import {Cliente} from "../../../model/cliente.model";
import {Router} from "@angular/router";
import {PrincipalService} from "../../../service/principal.service";


@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {
  cliente: Cliente = { id: 0, nome: '' };

  constructor(public route: Router, private principalService: PrincipalService) {
  }

  editarCliente(clienteEditar: Cliente) {
    this.principalService.editarCliente(clienteEditar).subscribe(() => {
    });
  }
}
