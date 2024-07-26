import { Component, Input, OnInit } from '@angular/core';
import { Time } from '../../../Models/time';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { P006Service } from '../../../Services/Private/p006.service';

@Component({
  selector: 'app-Table_Tiempos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Table_Tiempos.component.html',
  styleUrls: ['./Table_Tiempos.component.scss'],
})
export class Table_TiemposComponent implements OnInit {
  @Input({ required: true })
  timelist: Time[] = [];

  constructor(private router: Router, private service: P006Service) {}

  ngOnInit() {}

  editarTiempo(id: number) {
    this.router.navigate(['/add_edit_tiempo'], {
      queryParams: { editMode: true, idTiempo: id },
    });
  }
  Delete_Tiempo(id: number) {
    if (id) {
      this.service.Delete_Tiempo(id).subscribe(
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