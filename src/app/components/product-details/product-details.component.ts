import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id!: number;
  product: Product | undefined;

  constructor(private route: ActivatedRoute,private router: Router, private productServeice: ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];//parseint
      this.productServeice.getById(this.id).subscribe(data => {
        this.product = data as Product;
      })
    });
  }

  purchaseClick(): void {
    this.productServeice.delete(this.product!.id).subscribe(_ =>
      this.router.navigateByUrl(''));
  }

}