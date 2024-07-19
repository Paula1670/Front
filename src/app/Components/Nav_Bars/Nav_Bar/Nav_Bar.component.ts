import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-Nav_Bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Nav_Bar.component.html',
  styleUrls: ['./Nav_Bar.component.scss'],
})
export class Nav_BarComponent implements OnInit {
  @Input()
  color: number = 0;

  constructor() {}

  ngOnInit() {}
}
