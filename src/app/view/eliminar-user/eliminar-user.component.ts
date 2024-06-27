import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-eliminar-user',
  templateUrl: './eliminar-user.component.html',
  styleUrls: ['./eliminar-user.component.css']
})
export class EliminarUserComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<EliminarUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    

}
}