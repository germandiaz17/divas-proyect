import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem, ShopingCar } from '../../shoping_car/shoping-car_service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'],
})
export class Cart {

  cartItems: CartItem[] = []

  constructor(private shopingCar: ShopingCar, private router: Router) {}

  ngOnInit() {
    this.shopingCar.cart$.subscribe(items => {
      this.cartItems = items;
    })
  }

  remove(id: number) {
    this.shopingCar.removeFromCart(id);
  }

  goToHome() {
    this.router.navigate(['']);
  }

}
