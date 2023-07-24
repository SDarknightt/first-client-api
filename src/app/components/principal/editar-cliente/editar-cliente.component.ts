import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from "../../../model/cliente.model";
import { PrincipalService } from "../../../service/principal.service";

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  cliente: Cliente = { id: 0, nome: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private principalService: PrincipalService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = Number(params['id']);
      if (!isNaN(id)) {//testa se o id passado é um numero
        this.buscarClientePorId(id);
      } else {
        this.router.navigate(['/pagina-de-erro']);
      }
    });
  }

  buscarClientePorId(id: number) {
    this.principalService.buscarCliente(id).subscribe(
      (clienteEncontrado: Cliente) => {
        this.cliente = clienteEncontrado;
      }
    );
  }

  editarCliente(clienteEditar: Cliente) {
    this.principalService.editarCliente(clienteEditar).subscribe(() => {
    });
  }
}
