import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { P009Usuario } from '../../../Models/Private/DtosP009/P009Get_UsersDto';
import { Router } from '@angular/router';
import { P009Service } from '../../../Services/Private/P009.service';

@Component({
  selector: 'app-Table',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './Table.component.html',
  styleUrls: ['./Table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input({ required: true })
  memberlist: P009Usuario[] = [];
  @Input({ required: true })
  usuariosActivos: boolean = true;

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

  activar_User(id: number) {
    if (id) {
      this.service.Activate_User(id).subscribe(
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