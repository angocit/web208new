import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-home-product-component',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './home-product-component.component.html',
  styleUrl: './home-product-component.component.css'
})
export class HomeProductComponentComponent {
   products: any;
   httpClient = inject(HttpClient);
    ngOnInit() {
      let login = localStorage.getItem('login');
      console.log(login);
      
      this.getProudctData();
    }
   getProudctData(){
    this.httpClient.get('http://localhost:3000/products')
    .subscribe((response:any)=>{
        // console.log(response);
        this.products = response;
    })
   }
   addToCart(pid:any,name:any,image:any,price:any){
    const product = {
      pid: pid,
      name:name,
      image:image,
      price:price,
      quantity:1
    }
      const cart = localStorage.getItem('cart');
      //Ktra tồn tại giỏ hàng hay không. nếu tồn tại thì cập nhật giỏ hàng. không thì khởi tạo giỏ hàng mới
      if (cart ==null){
        console.log(`chuwa tồn tại`);        
        localStorage.setItem('cart',JSON.stringify([product]));
      }
      if (cart !==null){
        console.log(`đã tồn tại`);
          // - Kiểm tra sản phẩm đã tồn tại trong giỏ hàng chưa.
          //  -  nếu có rồi thì chỉ thay đổi số lượng
          //  -  nếu chưa thì bổ sung thêm sản phẩm vào giỏ hàng
         const products = JSON.parse(cart);
         console.log(products);    
        let ktra = false;   
        let vitri = -1;
        for (let i = 0; i < products.length; i++){
           if (products[i].pid == pid){
            ktra=true;
            vitri = i;
           }
        }
        if (ktra){
          products[vitri].quantity = products[vitri].quantity+1;
        }
        else {
          products.push(product);
        }
        localStorage.setItem('cart',JSON.stringify(products));
      }    
   }
}
