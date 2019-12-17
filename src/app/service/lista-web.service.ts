import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaWebService {
  //chamamos de injeção de Dependência
  
  constructor(private http: HttpClient) { }

  public obterTarefas() {
    return this.http.get("http://www.professorisidro.com.br/tarefas.php");
  }

}
