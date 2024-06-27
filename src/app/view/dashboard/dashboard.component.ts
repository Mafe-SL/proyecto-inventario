import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  backgroundUrl: string = '';

  formGroup!:FormGroup;

  constructor(private formBuilder:FormBuilder,
    private authService:AuthService) {}

    ngOnInit(): void {
      this.initForm()
    }

    initForm(){
      this.formGroup=this.formBuilder.group({
        username:["",Validators.required],
        password:["",Validators.required]
        })
    }

  onLogin(){
    let login={
      username: this.formGroup.value.username,
      password: this.formGroup.value.password
    }
    this.authService.login(login)
    .subscribe(item=>console.log(item.token));
  }

  login(event: Event) : any{

  }


}
