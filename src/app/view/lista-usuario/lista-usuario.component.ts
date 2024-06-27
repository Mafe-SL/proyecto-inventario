import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/model/user';
import { UsuariosService } from 'src/app/usuarios.service';
import { VentanaUserComponent } from '../ventana-user/ventana-user.component';
import { EliminarUserComponent } from '../eliminar-user/eliminar-user.component';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent {
  userList!: MatTableDataSource<User>;
  columnsHeader=["date","username","name","lastname","email","phone","status","role","opciones"]


constructor(private userService:UsuariosService,
public dialog: MatDialog
) {}

ngOnInit(): void {
this.userListMethod();
}

userListMethod(){
try{
this.userService.getUsers()
.subscribe(item => this.userList= new MatTableDataSource(item))

}catch(error){
console.log(error)
}

}

applyFilter(event: Event) {
const filterValue = (event.target as HTMLInputElement).value;

this.userList.filter=filterValue.trim();

}

 openDialog (){
  const dialogRef = this.dialog.open(VentanaUserComponent, {
    data: null,
  });

   dialogRef.afterClosed().subscribe((result: any) => {
     console.log('The dialog was closed');
     if (result) {
       this.userListMethod();
     }
   });
 }

 deleteDialog(_id:string){
       const dialogRef = this.dialog.open(EliminarUserComponent, {
        data: null,
       });

      dialogRef.afterClosed().subscribe((result: any) => {
        console.log('The dialog was closed');
        if(result){
          this.deleteUser(_id);
        }

       });
     }

    deleteUser(_id:string){
       try{
         this.userService.delete(_id).subscribe(item=>console.log(item))
         this.userListMethod();

        }catch(error){
           console.log(error);
         }
     }


 editDialog (element:User) {
   const dialogRef = this.dialog.open(VentanaUserComponent, {
    data: element,
  });
  dialogRef.afterClosed().subscribe((result: any) => {
     console.log('The dialog was closed');
    if (result) {
      this.userListMethod();     }
  });
}

}
