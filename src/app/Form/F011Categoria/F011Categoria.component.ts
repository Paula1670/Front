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
import { F011Get_EntrenadoresDto } from '../../Models/Private/DtosF011/F011Get_EntrenadoresDto';
import { NadadorDto } from '../../Models/Private/DtosF011/F011Nadador.dto';

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
  mostrarConfirmacion:boolean=false;
  opcionEntrenador: Opcion[] = [];
  constructor(
    private f011Service: F011Service,
    private router: Router,
    private fb: FormBuilder,

    private route: ActivatedRoute
  ) {
    this.categoriaForm = this.fb.group({
      categoria: ['', [Validators.required]],
      entrenadorasociado: [0],
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.idUser = params['idUser'];
      if (this.idUser) {
        this.Get_User(this.idUser);
      }
    });

    this.findCategorias();
    this.findEntrenadores();
  }

  Get_User(id: number) {
    this.f011Service.Find_Nadador(id).subscribe((data: NadadorDto) => {
      this.categoriaForm.get('categoria')?.patchValue(data.Categoria);

      this.categoriaForm.get('entrenadorasociado')?.patchValue(data.entrenador);
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

  private getUser(id: number): Observable<P009Nadador> {
    return this.f011Service.Get_Nadador(id);
  }

  actualizarCategoria(): Promise<void> {
    if (!this.idUser) {
      return Promise.resolve(); // No hay usuario, retornamos una promesa resuelta.
    }

    return this.getUser(this.idUser)
      .toPromise()
      .then((nadador: P009Nadador | undefined) => {
        if (nadador) {
          return this.f011Service
            .actualizarCategoriaDeNadador({
              idNadador: nadador.Nadador,
              idCategoria: parseInt(this.categoriaForm.value.categoria, 10),
            })
            .toPromise();
        } else {
          return Promise.reject('Nadador no encontrado');
        }
      })
      .then(() => {
        // Aquí puedes agregar lógica adicional si es necesario después de la actualización.
      })
      .catch((error) => {
        console.error('Error al actualizar la categoría:', error);
      });
  }

  actualizarEntrenador(): Promise<void> {
    if (!this.idUser) {
      return Promise.resolve(); // No hay usuario, retornamos una promesa resuelta.
    }

    return this.getUser(this.idUser)
      .toPromise()
      .then((nadador: P009Nadador | undefined) => {
        if (nadador) {
          return this.f011Service
            .actualizarEntrenadorDeNadador({
              idNadador: nadador.Nadador,
              idEntrenador: parseInt(
                this.categoriaForm.value.entrenadorasociado,
                10
              ),
            })
            .toPromise();
        } else {
          // Si nadador es undefined, retornamos una promesa rechazada.
          return Promise.reject('Nadador no encontrado');
        }
      })
      .then(() => {
        // Aquí puedes agregar lógica adicional si es necesario después de la actualización.
      })
      .catch((error) => {
        // Manejo de errores si es necesario.
        console.error('Error al actualizar el entrenador:', error);
      });
  }

  private findEntrenadores() {
    this.f011Service
      .findEntrenadores()
      .subscribe((data: F011Get_EntrenadoresDto[]) => {
        this.opcionEntrenador = data.map(
          (entrenador: F011Get_EntrenadoresDto) => {
            return {
              valor: entrenador.IDEntrenador,
              etiqueta:
                entrenador.nombreUsuario + ' ' + entrenador.apellidoUsuario,
            };
          }
        );
      });
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

  async clickButton() {
    this.actualizarCategoria();
    this.actualizarEntrenador();

    await Promise.all([
      this.actualizarCategoria(),
      this.actualizarEntrenador(),
    ]);
    this.router.navigate(['/users']);
  }

  actualizar() {
    
    this.mostrarConfirmacion = true;
  }

  goBack(){this.mostrarConfirmacion = false;
    this.router.navigate(['/users']);
  }
  notGoBack(){this.mostrarConfirmacion = false}
}
