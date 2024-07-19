import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Nav_Bar_public',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Nav_Bar_public.component.html',
  styleUrls: ['./Nav_Bar_public.component.scss'],
})
export class Nav_Bar_publicComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
