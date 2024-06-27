import { Component } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent {

  cartItems: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

}
