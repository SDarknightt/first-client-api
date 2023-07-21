import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {Cliente} from "../model/cliente.model";
import {AbstractService} from "./abstract.service";

@Injectable({providedIn: 'root'})
export class PrincipalService extends AbstractService {
  constructor(http: HttpClient) {
    super(http)
  }
  getAllClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.API_URL}/clientes`);
  }

  deletarCliente(cliente: Cliente): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/clientes/${cliente.id}`);
  }

  editarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.API_URL}/clientes/${cliente.id}`, cliente);
  }
  inserirCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.API_URL}/clientes`, cliente);
  }
}
