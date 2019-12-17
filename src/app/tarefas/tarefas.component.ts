import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../model/tarefa';
//agora importo o serviço que vai conversar com o site
import { ListaWebService } from '../service/lista-web.service';
@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  minhaTarefa: Tarefa[];
//injetando o serviço


  constructor(private servicoLista:ListaWebService) {
    
  }

  ngOnInit() {
    console.log("Chamando a funcao que recupera a lista");
    this.obterTodasTarefas()
    console.log
  }
public obterTodasTarefas(){
  this.servicoLista.obterTarefas().subscribe((resultado:Tarefa[])=>{
    this.minhaTarefa = resultado;
  })
}
}
