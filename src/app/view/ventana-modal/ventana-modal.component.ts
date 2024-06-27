import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ListaProductoComponent } from '../lista-producto/lista-producto.component';
import { Product } from 'src/app/model/product';
import { ProductosService } from 'src/app/productos.service';

@Component({
  selector: 'app-ventana-modal',
  templateUrl: './ventana-modal.component.html',
  styleUrls: ['./ventana-modal.component.css']
})
export class VentanaModalComponent implements OnInit{

  formGroup!:FormGroup

  constructor(public dialogRef: MatDialogRef<ListaProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private productService:ProductosService,
    private formBuilder:FormBuilder
  ){

    }

    ngOnInit(): void {
      console.log(this.data);

      this.initForm()
    }

    initForm(){
      if(this.data){

      this.formGroup=this.formBuilder.group({
        name:[this.data.name,Validators.required],
        code:[this.data.code||"",Validators.required],
        category:[this.data.category||"",Validators.required],
        description:[this.data.description||"",Validators.required],
        price:[this.data.price||"",Validators.required],
        amount:[this.data.amount||"",Validators.required]
        });
      }else{
        this.formGroup=this.formBuilder.group({
          name:["",Validators.required],
          code:["",Validators.required],
          category:["",Validators.required],
          description:["",Validators.required],
          price:["",Validators.required],
          amount:["",Validators.required]
          });
      }


      }

      save(): void{
        let request={
          id:this.data!=null?this.data._id:null,
          name: this.formGroup.value.name,
          code: this.formGroup.value.code,
          category: this.formGroup.value.category,
          description: this.formGroup.value.description,
          price: this.formGroup.value.price,
          amount: this.formGroup.value.amount,
        }

        try{
          if(!this.data){
            this.productService.addProduct(request).subscribe(item=>console.log(item))
          }else{
            this.productService.editProduct(request).subscribe(item=>console.log(item)
            )
          }
          this.dialogRef.close(true)
        }catch(error){
          console.log(error);

        }
      }
}
