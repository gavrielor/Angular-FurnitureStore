import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {

  @Input() product!: Product;
  @Output() onDelete: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  purchaseClick(): void {
    this.onDelete.emit(this.product);
  }

  detailsClick(): void {
    this.router.navigateByUrl('/details/' + this.product.id);
  }
}