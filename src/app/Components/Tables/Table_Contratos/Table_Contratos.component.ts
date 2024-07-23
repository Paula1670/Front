import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { P010Service } from '../../../Services/Private/P010.service';
import { P010ContratoDto } from '../../../Models/Private/DtosP010/P010Get_contratosDto';

@Component({
  selector: 'app-Table_Contratos',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './Table_Contratos.component.html',
  styleUrls: ['./Table_Contratos.component.scss'],
})
export class Table_ContratosComponent implements OnInit {
  @Input({ required: true })
  contratolist: P010ContratoDto[] = [];

  constructor(private router: Router, private service: P010Service) {}

  ngOnInit() {}

  editarContrato(id: number) {
    this.router.navigate(['/add_edit_contratos'], {
      queryParams: { editMode: true, id },
    });
  }
  Delete_Contrato(id: number) {
    if (id) {
      this.service.Delete_Contrato(id).subscribe(
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
