import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { P010Contrato } from '../../../Models/Private/DtosP010/P010Get_contratosDto';

@Component({
  selector: 'app-Table_Contratos',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './Table_Contratos.component.html',
  styleUrls: ['./Table_Contratos.component.scss'],
})
export class Table_ContratosComponent implements OnInit {
  @Input({ required: true })
  contratolist: P010Contrato[] = [];

  constructor() {}

  ngOnInit() {}
}
