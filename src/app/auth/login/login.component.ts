import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  mess="";
  constructor(private http:HttpClient){}
  formlogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  ngOnInit() {
    // let login:any = localStorage.getItem('user');
    //   login = JSON.parse(login);
    //   console.log(login.user.id);
      
  }
  onSubmit(){
    // Lấy thông tin đăng nhập
    const email = this.formlogin.controls.email.value;
    const password = this.formlogin.controls.password.value;
    // gửi request post đến api json-server-auth
    this.http.post('http://localhost:3000/login',{email,password}).subscribe(data => {
      if (data!==null) {
        console.log(data);   
        localStorage.setItem('user',JSON.stringify(data));     
        this.mess="Login thành công";
      }   
    },err=>{
      this.mess="Sai tên đăng nhập hoặc mật khẩu";
    });
  }
}
