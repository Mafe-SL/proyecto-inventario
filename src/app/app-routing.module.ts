import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductoComponent } from './view/lista-producto/lista-producto.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ListaUsuarioComponent } from './view/lista-usuario/lista-usuario.component';
import { ProductoComponent } from './view/producto/producto.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path: 'inicio', component: DashboardComponent},
  {path: 'productos', component: ListaProductoComponent, canActivate:[AuthGuard]},
  {path: 'usuarios', component: ListaUsuarioComponent, canActivate:[AuthGuard]},
  {path: 'tienda', component: ProductoComponent, canActivate:[AuthGuard]},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
