import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { AuthService, AuthState } from '../../Services/Public/Auth.service';
import { Observable } from 'rxjs';

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
  authState$: Observable<AuthState>;

  constructor(private authService: AuthService) {
    this.authState$ = this.authService.authState$;
  }

  ngOnInit() {}
  LogOut() {
    this.authService.log_out();
  }
}
