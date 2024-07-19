import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../Components/Header/Header.component';

@Component({
  selector: 'app-F005Contratos',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './F005Contratos.component.html',
  styleUrls: ['./F005Contratos.component.scss'],
})
export class F005ContratosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
