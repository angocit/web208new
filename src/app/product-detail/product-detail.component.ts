import { Component, inject } from '@angular/core';
import { routes } from '../app.routes';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product:any;
  constructor(private routes: ActivatedRoute){
  }
  httpClient = inject(HttpClient);
  ngOnInit(){
    let id = this.routes.snapshot.paramMap.get('id');
    // let id = 0;
    // if (slug==='mac-book-pro'){
    //   id = 6;
    // }
    // else if (slug==='iphone-9'){
    //   id = 1;
    // }
    // else{
    //   id = 5;
    // }
    // console.log(id);
    this.getDetailProductById(Number(id));
  }
  getDetailProductById(id:number){
    // console.log(id);  
    this.httpClient.get(`https://dummyjson.com/products/${id}`)
    .subscribe((response:any)=>{
        // console.log(response);
        this.product = response;
    })  
  }
}
