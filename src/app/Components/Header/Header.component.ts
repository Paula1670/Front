import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AuthService } from '../../Services/Public/Auth.service';

@Component({
  selector: 'app-Header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  title: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit() {}
  LogOut() {
    this.authService.log_out();
  }
}
