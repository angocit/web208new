import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  mess="";
    constructor(private http:HttpClient){}
    formregister = new FormGroup({
      hoten: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
    onSubmit(){
      // Lấy thông tin đăng ký
      const hoten = this.formregister.controls.hoten.value;
      const email = this.formregister.controls.email.value;
      const password = this.formregister.controls.password.value;
      // gửi request post đến api json-server-auth
      this.http.post('http://localhost:3000/register',{hoten,email,password}).subscribe(data => {
        if (data!==null) {
          this.mess="Đăng ký thành công";
        }   
      },err=>{
        this.mess="Có lỗi khi đăng ký";
      });
    }
}
