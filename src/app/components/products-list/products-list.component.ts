import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products!: Product[];

  constructor(private productServeice: ProductService) { }

  ngOnInit(): void {
    this.productServeice.get().subscribe(data => {
      this.products = data as Product[];
    });
  }

  deleteProduct(product: Product): void {
    this.productServeice.delete(product.id).subscribe(_ => {
      this.products.splice(this.products.indexOf(product), 1);
    });
  }

  orderByDate(): void {
    this.products.sort((a, b) => a.date < b.date ? 1 : -1);
  }

  orderByPrice(): void {
    this.products.sort((a, b) => a.price - b.price);
  }
}
