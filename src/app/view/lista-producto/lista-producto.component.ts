import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/model/product';
import { ProductosService } from 'src/app/productos.service';
import { VentanaModalComponent } from '../ventana-modal/ventana-modal.component';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent {
  
productList!: MatTableDataSource<Product>;
columnsHeader=["date","name","price","amount","status","opciones"]


constructor(private productService:ProductosService,
public dialog: MatDialog
) {}

ngOnInit(): void {
this.productListMethod();
}

productListMethod(){
try{
this.productService.getProducts()
.subscribe(item => this.productList= new MatTableDataSource(item))

}catch(error){
console.log(error)
}

}

applyFilter(event: Event) {
const filterValue = (event.target as HTMLInputElement).value;

this.productList.filter=filterValue.trim();

}

openDialog (){
  const dialogRef = this.dialog.open(VentanaModalComponent, {
    data: null,
  });

  dialogRef.afterClosed().subscribe((result: any) => {
    console.log('The dialog was closed');
    if (result) {
      this.productListMethod();
    }
  });
}

deleteDialog(_id:string){
      const dialogRef = this.dialog.open(ModalEliminarComponent, {
        data: null,
      });

      dialogRef.afterClosed().subscribe((result: any) => {
        console.log('The dialog was closed');
        if(result){
          this.deleteProduct(_id);
        }

      });
    }

    deleteProduct(_id:string){
      try{
        this.productService.delete(_id).subscribe(item=>console.log(item))
        this.productListMethod();

        }catch(error){
          console.log(error);
        }
    }


editDialog (element:Product) {
  const dialogRef = this.dialog.open(VentanaModalComponent, {
    data: element,
  });

  dialogRef.afterClosed().subscribe((result: any) => {
    console.log('The dialog was closed');
    if (result) {
      this.productListMethod();
    }
  });
}
}
