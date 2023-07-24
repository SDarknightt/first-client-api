import { Router } from '@angular/router';
import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import { PrincipalService } from '../../service/principal.service';
import { Cliente } from '../../model/cliente.model';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit, OnDestroy {
  clientes: Cliente[] = [];
  mostrarEditar: boolean = false;
  mostrarInserir: boolean = false;
  mostrarTabela: boolean = true;
  clienteForm = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl(''),
  });
  cliente: Cliente = { id: 0, nome: '' };
  constructor(public route: Router, private principalService: PrincipalService) {
  }

  ngOnInit(): void {
    this.loadClientes();
  }

  ngOnDestroy(): void {}

  loadClientes() {
    this.principalService.getAllClientes().subscribe((clientes) => {
      console.log(clientes);
      this.clientes = clientes;
    });
  }

  deletarCliente(clienteDeletar: Cliente) {
    this.cliente = clienteDeletar;
    this.principalService.deletarCliente(this.cliente).subscribe(() => {
      this.loadClientes();
    });
  }

  editarCliente(clienteEditar: Cliente) {
    this.principalService.editarCliente(clienteEditar).subscribe(() => {
      this.loadClientes();
      this.cliente = { id: 0, nome: '' };
    });
  }

  inserirCliente(clienteInserir: Cliente) {
    this.cliente = clienteInserir;
    this.principalService.inserirCliente(this.cliente).subscribe(() => {
      this.loadClientes();
    });
  }
}
