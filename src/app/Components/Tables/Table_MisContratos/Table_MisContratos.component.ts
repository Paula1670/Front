import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Table_MisContratos',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './Table_MisContratos.component.html',
  styleUrls: ['./Table_MisContratos.component.scss'],
})
export class Table_MisContratosComponent implements OnInit {
  // @Input({ required: true })
  // contratolist: Contrato[] = [];
  constructor() {}

  ngOnInit() {}
}
