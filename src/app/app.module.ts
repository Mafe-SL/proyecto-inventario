import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MenuComponent } from './view/menu/menu.component';
import { ListaProductoComponent } from './view/lista-producto/lista-producto.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { VentanaModalComponent } from './view/ventana-modal/ventana-modal.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { ModalEliminarComponent } from './view/modal-eliminar/modal-eliminar.component';
import { ListaUsuarioComponent } from './view/lista-usuario/lista-usuario.component';
import { VentanaUserComponent } from './view/ventana-user/ventana-user.component';
import { EliminarUserComponent } from './view/eliminar-user/eliminar-user.component';
import { InicioSesionComponent } from './view/inicio-sesion/inicio-sesion.component';
import { MatCardModule } from '@angular/material/card';
import { CardProductoComponent } from './view/card-producto/card-producto.component';
import { CarritoCompraComponent } from './view/carrito-compra/carrito-compra.component';
import { ProductoComponent } from './view/producto/producto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListaProductoComponent,
    VentanaModalComponent,
    DashboardComponent,
    ModalEliminarComponent,
    ListaUsuarioComponent,
    VentanaUserComponent,
    EliminarUserComponent,
    InicioSesionComponent,
    CardProductoComponent,
    CarritoCompraComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
