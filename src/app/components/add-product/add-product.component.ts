import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { imageValidator } from 'src/app/validators/image.validator';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm!: FormGroup;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      price: new FormControl(0, [Validators.required, Validators.min(1)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
      image: new FormControl('', [Validators.required, imageValidator]),
      sellersCity: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      sellersPhone: new FormControl('', [Validators.required, Validators.pattern('^[0][5][0-9]{1}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$')]),
    });
  }

  onSumbit(): void {
    if (this.productForm.valid) {
      this.productService.post(new Product(
        this.productForm.controls['name'].value,
        this.productForm.controls['price'].value,
        new Date(),
        this.productForm.controls['description'].value,
        this.productForm.controls['image'].value,
        this.productForm.controls['sellersCity'].value,
        this.productForm.controls['sellersPhone'].value
      )).subscribe(_ => this.router.navigateByUrl("/"));
    }
  }
}
