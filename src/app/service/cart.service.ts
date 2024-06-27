import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemsSubject = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  addToCart(product: Product): void {
    const currentCartItems = this.cartItemsSubject.value;
    this.cartItemsSubject.next([...currentCartItems, product]);
  }

  getCartItems(): Product[] {
    return this.cartItemsSubject.value;
  }

  clearCart(): void {
    this.cartItemsSubject.next([]);
  }
}
