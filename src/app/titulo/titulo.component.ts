import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  usuario: string
  constructor() {
    this.usuario = "Victoria";
  }

  ngOnInit() {
  }

}
