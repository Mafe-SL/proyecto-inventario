import { Component, Inject, OnInit, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ListaUsuarioComponent } from '../lista-usuario/lista-usuario.component';
import { User } from 'src/app/model/user';
import { UsuariosService } from 'src/app/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ventana-user',
  templateUrl: './ventana-user.component.html',
  styleUrls: ['./ventana-user.component.css']
})
export class VentanaUserComponent implements OnInit{

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide);
    event.stopPropagation();
  }

  formGroup!:FormGroup

  constructor(public dialogRef: MatDialogRef<ListaUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private userService:UsuariosService,
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
        username:[this.data.username,Validators.required],
        name:[this.data.name,Validators.required],
        lastName:[this.data.lastName,Validators.required],
        email:[this.data.email||"",[Validators.required, Validators.email]],
        phone:[this.data.phone||"",Validators.required],
        password:[this.data.password||"",Validators.required],
        role:[this.data.role||"",Validators.required]
        });
      }else{
        this.formGroup=this.formBuilder.group({
          username:["",Validators.required],
          name:["",Validators.required],
          lastName:["",Validators.required],
          email:["",Validators.required],
          phone:["",Validators.required],
          password:["",Validators.required],
          role:["",Validators.required]
          });
      }


      }

      save(): void{
        let request={
          id:this.data!=null?this.data._id:null,
          username: this.formGroup.value.username,
          name: this.formGroup.value.name,
          lastName: this.formGroup.value.lastName,
          email: this.formGroup.value.email,
          phone: this.formGroup.value.phone,
          password: this.formGroup.value.password,
          role: this.formGroup.value.role,
        }

        try{
          if(!this.data){
            this.userService.addUser(request).subscribe(item=>console.log(item))
          }else{
            this.userService.editUser(request).subscribe(item=>console.log(item)
            )
          }
          this.dialogRef.close(true)
        }catch(error){
          console.log(error);

        }
      }

}
