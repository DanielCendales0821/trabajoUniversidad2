import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario/usuario.component';
import { AgregarUsuarioComponent } from './components/usuario/agregar-usuario/agregar-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EliminarUsuarioComponent } from './components/usuario/eliminar-usuario/eliminar-usuario.component';
import { EditarUsuarioComponent } from './components/usuario/editar-usuario/editar-usuario.component';
import { AnunciosComponent } from './components/anuncios/anuncios/anuncios.component';
import { AgregarAnunciosComponent } from './components/anuncios/agregar-anuncios/agregar-anuncios.component';
import { EditarAnunciosComponent } from './components/anuncios/editar-anuncios/editar-anuncios.component';
import { EliminarAnunciosComponent } from './components/anuncios/eliminar-anuncios/eliminar-anuncios.component';
import { PerfilComponent } from './components/usuario/perfil/perfil.component';
import { RolComponent } from './components/rol/rol/rol.component';
import { AgregarRolComponent } from './components/rol/agregar-rol/agregar-rol.component';
import { EditarRolComponent } from './components/rol/editar-rol/editar-rol.component';
import { EliminarRolComponent } from './components/rol/eliminar-rol/eliminar-rol.component';
import { ActividadesComponent } from './components/actividades/actividades/actividades.component';
import { AgregarActividadesComponent } from './components/actividades/agregar-actividades/agregar-actividades.component';
import { EditarActividadesComponent } from './components/actividades/editar-actividades/editar-actividades.component';
import { EliminarActividadesComponent } from './components/actividades/eliminar-actividades/eliminar-actividades.component';
import { AccionesComponent } from './components/tareas/acciones/acciones.component';
import { AgregarAccionesComponent } from './components/tareas/agregar-acciones/agregar-acciones.component';
import { EditarAccionesComponent } from './components/tareas/editar-acciones/editar-acciones.component';
import { EliminarAccionesComponent } from './components/tareas/eliminar-acciones/eliminar-acciones.component';



const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: '', component: LoginComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'usuario/agregar', component: AgregarUsuarioComponent },
  { path: 'usuario/eliminar/:id', component: EliminarUsuarioComponent },
  { path: 'usuario/editar/:id', component: EditarUsuarioComponent },
  { path: 'anuncios', component: AnunciosComponent },
  { path: 'anuncios/agregar', component: AgregarAnunciosComponent },
  { path: 'anuncios/eliminar/:id', component: EliminarAnunciosComponent },
  { path: 'anuncios/editar/:id', component: EditarAnunciosComponent },
  { path: 'rol', component: RolComponent },
  { path: 'rol/agregar', component: AgregarRolComponent },
  { path: 'rol/eliminar/:id', component: EliminarRolComponent },
  { path: 'rol/editar/:id', component: EditarRolComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'actividades', component: ActividadesComponent },
  { path: 'actividades/agregar', component: AgregarActividadesComponent },
  { path: 'actividades/eliminar/:id', component: EliminarActividadesComponent },
  { path: 'actividades/editar/:id', component: EditarActividadesComponent },
  { path: 'tareas', component: AccionesComponent },
  { path: 'tareas/agregar', component: AgregarAccionesComponent },
  { path: 'tareas/eliminar/:id', component: EliminarAccionesComponent },
  { path: 'tareas/editar/:id', component: EditarAccionesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
