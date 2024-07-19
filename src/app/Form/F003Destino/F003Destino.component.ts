import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../Components/Header/Header.component';

@Component({
  selector: 'app-F003Destino',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './F003Destino.component.html',
  styleUrls: ['./F003Destino.component.scss'],
})
export class F003DestinoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
