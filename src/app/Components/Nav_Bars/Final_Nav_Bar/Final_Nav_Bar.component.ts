import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, AuthState } from '../../../Services/Public/Auth.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-Final_Nav_Bar',
  imports: [AsyncPipe, JsonPipe],
  standalone: true,
  templateUrl: './Final_Nav_Bar.component.html',
  styleUrls: ['./Final_Nav_Bar.component.scss'],
})
export class Final_Nav_BarComponent implements OnInit {
  @Input()
  color: number = 0;
  authState$: Observable<AuthState>;

  constructor(private authService: AuthService) {
    this.authState$ = this.authService.authState$;
  }

  ngOnInit() {}
}
