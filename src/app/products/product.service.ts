import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  //api call to view all products
  viewAllProducts(){
   return this.http.get('http://localhost:3000/ptoducts')
  }

}
