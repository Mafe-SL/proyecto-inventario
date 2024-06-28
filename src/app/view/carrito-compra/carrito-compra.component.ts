// carrito-compra.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { DetailSaleService } from 'src/app/service/detail-sale.service';

@Component({
  selector: 'app-carrito-compra',
  templateUrl: './carrito-compra.component.html',
  styleUrls: ['./carrito-compra.component.css']
})
export class CarritoCompraComponent implements OnInit {
  cartItems: Product[] = [];
  totalPrice: number = 0;

  constructor(private detailSaleService: DetailSaleService) {}

  ngOnInit(): void {
    this.detailSaleService.getProductSale().subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.detailSaleService.getTotalPrice();
    });
  }

  clearCart(): void {
    this.detailSaleService.clearCart();
  }

  removeFromCart(id: string): void {
    this.detailSaleService.deleteProductSale(id);
    this.totalPrice = this.detailSaleService.getTotalPrice();
  }
}
