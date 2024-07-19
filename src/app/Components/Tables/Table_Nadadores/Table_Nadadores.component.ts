import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { P009Service } from '../../../Services/Private/P009.service';
import { CommonModule, DatePipe } from '@angular/common';
import { P009Nadador } from '../../../Models/Private/DtosP009/P009Get_NadadoresDto';

@Component({
  selector: 'app-Table_Nadadores',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './Table_Nadadores.component.html',
  styleUrls: ['./Table_Nadadores.component.scss'],
})
export class Table_NadadoresComponent implements OnInit {
  @Input({ required: true })
  swimerlist: P009Nadador[] = [];
  //member: P009Usuario;

  constructor(private router: Router, private service: P009Service) {}

  ngOnInit() {}
  editarMiembro(id: number) {
    this.router.navigate(['/add_edit_user'], {
      queryParams: { editMode: true, idUser: id },
    });
  }
  Delete_User(id: number) {
    if (id) {
      this.service.Delete_User(id).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
          window.location.reload();
        },
        (error) => {
          console.error('Error al llamar al endpoint:', error);
        }
      );
    }
  }
}
