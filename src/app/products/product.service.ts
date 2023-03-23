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

  //api to delete a product
  DeleteProduct(productId:any){

    return this.http.delete('http://localhost:3000/ptoducts/'+productId)

  }

  //api call to add new product

  addNewProduct(productData:any){
    return this.http.post('http://localhost:3000/ptoducts',productData)
  }

  //api call to update product

  updateProduct(productId:any,productData:any){
    return this.http.put('http://localhost:3000/ptoducts/'+productId,productData)
  }

}
