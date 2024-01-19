import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    loginform = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', [Validators.required,Validators.minLength(6)])
    });
    mess = '';
    onSubmit(){
       let u = this.loginform.controls.username.value;
       let p = this.loginform.controls.password.value
       if ((u=='admin')||(p=='123456'))  {
        this.mess = "Đăng nhập thành công";
       }
       else {
        this.mess = "Sai tên đăng nhập hoặc mật khẩu";
       }
    }
}
