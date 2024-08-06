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
  idNadador: number = 0;
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
      this.editMode = params['editMode'];
      this.idNadador = params['idNadador'];
      if (this.editMode && this.idNadador) {
        this.findCategorias();
      }
    });
  }

  /*  Get_User(id: number) {
    this.f011Service
      .getCategoria(id)
      .subscribe((data: ActualizarCategoriaDeNadadorDto) => {
        this.categoriaForm.get('idCategoria')?.patchValue(data.idCategoria);

        this.idNadador = data.idNadador;
      });
  }*/

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

  actualizarCategoria(): void {
    this.f011Service.actualizarCategoriaDeNadador({
      idNadador: this.idNadador,
      idCategoria: this.categoriaForm.value.categoria,
    });
    this.router.navigate(['/users']);
  }
}
