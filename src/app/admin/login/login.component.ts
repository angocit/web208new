import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private http: HttpClient){
    
  }
    loginform = new FormGroup({
        username: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]d*$/)]),
        password: new FormControl('', [Validators.required,Validators.pattern(/^0[0-9]{9}$/)])
        // email: new FormControl('', [Validators.required,Validators.email])
        // phone: new FormControl('', [Validators.required,Validators.pattern('0+[0-9]+')])
    });
    mess = '';  
    router = inject(Router);  
    onSubmit(){
       let u = this.loginform.controls.username.value;
       let p = this.loginform.controls.password.value
      //  const data = {username: u, password: p};
       const body = {username: u,password: p};
       this.http.post<any>('http://localhost:8000/api/checklogin',body).subscribe((response:any) => {
          // console.log(response);  
          if (response.login)  {
              this.mess = "Đăng nhập thành công";
              localStorage.setItem('login','ok');
              this.router.navigate(['dashboard']);
             }
             else {
              this.mess = "Sai tên đăng nhập hoặc mật khẩu";
             }        
       });
      //  if ((u=='admin')&&(p=='123456'))  {
      //   this.mess = "Đăng nhập thành công";
      //   localStorage.setItem('login','ok');
      //   this.router.navigate(['dashboard']);
      //  }
      //  else {
      //   this.mess = "Sai tên đăng nhập hoặc mật khẩu";
      //  }
    }
}
