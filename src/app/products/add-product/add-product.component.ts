import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private fb: FormBuilder, private ps: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  addProductForm = this.fb.group({

    id: [""],
    productName: [""],
    categoryId: [""],
    discription: [""],
    price: [""],
    isAvailable: [""],
    productImage: [""],
    rating: [""],
    review: [""],
    vendorName: [""],
    warrenty: [""]

  })

  addProduct() {
    let Pdata = {
      id: this.addProductForm.value.id,
      productName: this.addProductForm.value.productName,
      categoryId: this.addProductForm.value.categoryId,
      discription: this.addProductForm.value.discription,
      price: this.addProductForm.value.price,
      isAvailable: this.addProductForm.value.isAvailable,
      productImage: this.addProductForm.value.productImage,
      rating: this.addProductForm.value.rating,
      review: this.addProductForm.value.review,
      vendorName: this.addProductForm.value.vendorName,
      warrenty: this.addProductForm.value.warrenty
    }

    this.ps.addNewProduct(Pdata).subscribe((item: any) => {
      alert('new Product added success')
      this.router.navigateByUrl("products")
    })

  }
}
