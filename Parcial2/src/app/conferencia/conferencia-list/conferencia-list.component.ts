import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Conferencia } from '../conferencia';
import { ConferenciaService } from '../conferencia.service';

@Component({
  selector: 'app-conferencia-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conferencia-list.component.html',
  styleUrl: './conferencia-list.component.css'
})
export class ConferenciaListComponent implements OnInit{

  conferencias: Array<Conferencia> = [];
  conferenciasFuturas!:number;

  constructor(private ConferenciaService:ConferenciaService) {}

  getConferencias(): void
  {
    this.ConferenciaService.getConferencias().subscribe((conferencias)=> {this.conferencias=conferencias})
  }
  getConferenciasPorVenir(): number
  {
    let conteo=0;
    for (const con of this.conferencias) {
      let fecha = new Date(con.starts);
      if (fecha > new Date()) {
        conteo++;
      }
    }
    return conteo;
  }
  ngOnInit(): void {
    this.getConferencias();
    this.conferenciasFuturas=this.getConferenciasPorVenir();
  }
}
