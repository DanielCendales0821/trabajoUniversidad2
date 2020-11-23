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
  { path: 'perfil', component: PerfilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
