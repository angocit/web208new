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
      this.getProudctData();
    }
   getProudctData(){
    this.httpClient.get('https://dummyjson.com/products')
    .subscribe((response:any)=>{
        // console.log(response);
        this.products = response.products;
    })
   }
}
