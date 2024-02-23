import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  APIURL:string = 'http://localhost:8000/products';
  constructor() { }
  getAllProduct(http:any){
      return http.get(this.APIURL);
  }
}
