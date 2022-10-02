import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Object> {
    return this.httpClient.get("http://localhost:4100/products");
  }

  getById(id: number): Observable<Object> {
    return this.httpClient.get("http://localhost:4100/products/" + id);
  }

  delete(id: number): Observable<Object> {
    return this.httpClient.delete("http://localhost:4100/products/" + id);
  }

  put(product: Product): Observable<Object> {
    return this.httpClient.put("http://localhost:4100/products/" + product.id, product);
  }

  post(product: Product): Observable<Object> {
    return this.httpClient.post("http://localhost:4100/products", product);
  }
}