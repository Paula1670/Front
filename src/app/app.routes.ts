import { Routes } from '@angular/router';
import { ErrorComponent } from './Errores/error/error.component';
import { P001Principal_SiteComponent } from './Pages/Private/p001Principal_Site/p001Principal_Site.component';
import { Log_InComponent } from './Pages/Public/Log_In/Log_In.component';
import { P001Principal_publicComponent } from './Pages/Public/p001Principal_public/p001Principal_public.component';
import { P002EquipoComponent } from './Pages/Public/p002Equipo/p002Equipo.component';
import { P003GaleriaComponent } from './Pages/Public/p003Galeria/p003Galeria.component';
import { P006TiemposComponent } from './Pages/Private/P006Tiempos/P006Tiempos.component';
import { P007MinimasComponent } from './Pages/Private/P007Minimas/P007Minimas.component';
import { F009MiembroComponent } from './Form/F009Miembro/F009Miembro.component';
import { P009UsuariosComponent } from './Pages/Private/P009Usuarios/P009Usuarios.component';
import { F005ContratosComponent } from './Form/F005Contratos/F005Contratos.component';
import { P010ContratosComponent } from './Pages/Private/P010Contratos/P010Contratos.component';
import { P004Cuotas_PosiblesComponent } from './Pages/Public/P004Cuotas_Posibles/P004Cuotas_Posibles.component';
import { P005DocumentacionComponent } from './Pages/Public/P005Documentacion/P005Documentacion.component';
import { F006TiempoComponent } from './Form/F006Tiempo/F006Tiempo.component';
import { F007MinimaComponent } from './Form/F007Minima/F007Minima.component';
import { P006RecordsComponent } from './Pages/Public/P006Records/P006Records.component';
import { F012GaleriaComponent } from './Form/F012Galeria/F012Galeria.component';
import { F005DocumentacionComponent } from './Form/F005Documentacion/F005Documentacion.component';
import { FFooterComponent } from './Form/FFooter/FFooter.component';
import { F004CuotasPosiblesComponent } from './Form/F004CuotasPosibles/F004CuotasPosibles.component';
import { F003JuntaComponent } from './Form/F003Junta/F003Junta.component';
import { F011CategoriaComponent } from './Form/F011Categoria/F011Categoria.component';
import { roleGuard } from './Core/Guards/role.guard';
import { authGuard } from './Core/Guards/auth.guard';
import { F014ActualizarContrasenaComponent } from './Form/F014ActualizarContrasena/F014ActualizarContrasena.component';

export const routes: Routes = [
  {
    path: 'logged',
    component: P001Principal_SiteComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['nadador', 'entrenador'] },
  },
  { path: 'cuotas', component: P004Cuotas_PosiblesComponent },
  { path: 'documentacion', component: P005DocumentacionComponent },
  { path: 'login', component: Log_InComponent },
  { path: '', component: P001Principal_publicComponent },
  { path: 'equipo', component: P002EquipoComponent },
  { path: 'galeria', component: P003GaleriaComponent },
  {
    path: 'tiempos',
    component: P006TiemposComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['nadador', 'entrenador'] },
  },
  {
    path: 'minimas',
    component: P007MinimasComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['nadador', 'entrenador'] },
  },
  {
    path: 'add_edit_user',
    component: F009MiembroComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['miembroPuesto'] },
  },
  {
    path: 'add_edit_tiempo',
    component: F006TiempoComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['entrenador'] },
  },
  {
    path: 'add_edit_minima',
    component: F007MinimaComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['entrenador'] },
  },
  {
    path: 'users',
    component: P009UsuariosComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['juntaDirectiva', 'socio', 'entrenador', 'nadador'] },
  },
  {
    path: 'contratos',
    component: P010ContratosComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['juntaDirectiva', 'socio'] },
  },
  {
    path: 'add_edit_contratos',
    component: F005ContratosComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['miembroPuesto'] },
  },
  { path: 'records', component: P006RecordsComponent },
  {
    path: 'add_edit_galeria',
    component: F012GaleriaComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['miembroPuesto'] },
  },
  {
    path: 'add_edit_documento',
    component: F005DocumentacionComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['miembroPuesto'] },
  },
  {
    path: 'add_edit_contacto',
    component: FFooterComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['miembroPuesto'] },
  },
  {
    path: 'add_edit_cuota',
    component: F004CuotasPosiblesComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['miembroPuesto'] },
  },
  {
    path: 'add_edit_miembroJunta',
    component: F003JuntaComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['miembroPuesto'] },
  },
  {
    path: 'add_edit_categoria',
    component: F011CategoriaComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['entrenador'] },
  },
  {
    path: 'edit_contrasena',
    component: F014ActualizarContrasenaComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['entrenador','socio','nadador'] },
  },

  { path: '**', component: ErrorComponent },
];
