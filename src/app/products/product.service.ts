import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import behaviour subject
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //object create for behaviour subject
  search=new BehaviorSubject("")

  constructor(private http:HttpClient) { }

  //api call to view all products
  viewAllProducts(){
   return this.http.get('http://localhost:3000/ptoducts')
  }

  //api call to view single product
  viewProduct(productId:any){
    return this.http.get('http://localhost:3000/ptoducts/'+productId)
  }

}
