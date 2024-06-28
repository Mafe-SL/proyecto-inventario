// detail-sale.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailSaleService {
  private productList: Product[] = [];
  private products: BehaviorSubject<Product[]>;

  constructor() {
    this.products = new BehaviorSubject<Product[]>([]);
  }

  getProductSale() {
    return this.products.asObservable();
  }

  addProductSale(product: Product) {
    const existingProduct = this.productList.find(p => p._id === product._id);
    if (existingProduct) {
      existingProduct.amount += 1;
    } else {
      product.amount = 1;
      this.productList.push(product);
    }
    this.products.next(this.productList);
  }

  deleteProductSale(id: string) {
    const index = this.productList.findIndex(p => p._id === id);
    if (index > -1) {
      this.productList.splice(index, 1);
      this.products.next(this.productList);
    }
  }

  clearCart() {
    this.productList = [];
    this.products.next(this.productList);
  }

  getTotalPrice(): number {
    return this.productList.reduce((total, product) => total + (product.price * product.amount), 0);
  }
}
