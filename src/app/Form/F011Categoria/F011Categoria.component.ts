import { Component, OnInit } from '@angular/core';
import { Opcion } from '../../Models/Desplegable/Opcion';
import { HeaderComponent } from '../../Components/Header/Header.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { F011Service } from '../../Services/Private/F011.service';
import { ActivatedRoute, Router } from '@angular/router';
import { F011GetCategoriasDto } from '../../Models/Private/DtosF011/F011Get_CategoriasDto';
import { ActualizarCategoriaDeNadadorDto } from '../../Models/Private/DtosF011/F011actualizarCategoriaDeNadador.dto';
import { P009Nadador } from '../../Models/Private/DtosP009/P009Get_NadadoresDto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-F011Categoria',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './F011Categoria.component.html',
  styleUrls: ['./F011Categoria.component.scss'],
})
export class F011CategoriaComponent implements OnInit {
  opcionCategoria: Opcion[] = [];
  categoriaForm: FormGroup;
  editMode?: boolean;
  idUser?: number;
  constructor(
    private f011Service: F011Service,
    private router: Router,
    private fb: FormBuilder,

    private route: ActivatedRoute
  ) {
    this.categoriaForm = this.fb.group({
      categoria: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.idUser = params['idUser'];
    });
    console.log(this.idUser);
    this.findCategorias();
  }

  /*  Get_User(id: number) {
    this.f011Service
      .getCategoria(id)
      .subscribe((data: ActualizarCategoriaDeNadadorDto) => {
        this.categoriaForm.get('idCategoria')?.patchValue(data.idCategoria);

        this.idNadador = data.idNadador;
      });
  }*/

  private getUser(id: number): Observable<P009Nadador> {
    console.log('getUser');
    console.log(id);
    console.log(this.f011Service.Get_Nadador(id));
    return this.f011Service.Get_Nadador(id);
  }

  actualizarCategoria(): void {
    if (this.idUser) {
      this.getUser(this.idUser).subscribe((nadador: P009Nadador) => {
        this.f011Service
          .actualizarCategoriaDeNadador({
            idNadador: nadador.Nadador,
            idCategoria: parseInt(this.categoriaForm.value.categoria),
          })
          .subscribe();
        this.router.navigate(['/users']);
      });
    }
  }

  private findCategorias() {
    this.f011Service
      .findCategorias()
      .subscribe((data: F011GetCategoriasDto[]) => {
        this.opcionCategoria = data.map((categoria: F011GetCategoriasDto) => {
          return {
            valor: categoria.IDCategoria,
            etiqueta: categoria.NombreCategoria + '-' + categoria.Genero,
          };
        });
      });
  }
}
