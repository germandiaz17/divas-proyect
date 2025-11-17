import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ShopingCar } from '../../shoping_car/shoping-car_service';

@Component({
  selector: 'app-cart-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-icon.html',
  styleUrls: ['./cart-icon.css'],
})
export class CartIcon {
  totalQty = 0;

  constructor(private cartService: ShopingCar) {}

  ngOnInit() {
    this.cartService.totalQty$.subscribe(qty => {
      this.totalQty = qty;
    });
  }
}
