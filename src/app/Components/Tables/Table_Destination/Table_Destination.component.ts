import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '../../Header/Header.component';
import { Destino } from '../../../Models/Destino';

@Component({
  selector: 'app-Table_Destination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Table_Destination.component.html',
  styleUrls: ['./Table_Destination.component.scss'],
})
export class Table_DestinationComponent implements OnInit {
  @Input({ required: true })
  destinolist: Destino[] = [];
  constructor() {}

  ngOnInit() {}
}
