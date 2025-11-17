import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import productosData from '../../data/products.json';
import { ShopingCar } from '../../shoping_car/shoping-car.service';
import { CartIcon } from '../cart-icon/cart-icon';
import { Router } from '@angular/router';

interface Producto {
  id: number;
  name: string;
  price: number;
  color: string;
  category: string;
  hair: boolean;
  nails: boolean;
  skin: boolean;
  type: string;
  brand: string;
  filter1: string;
  filter2: string;
  filter3: string;
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, CartIcon],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
})
export class Layout implements OnInit {

  constructor(private shopingCar: ShopingCar, private router: Router) {}

  producto: Producto[] = [];

  ngOnInit(): void {
    this.producto = productosData as Producto[];
  }

  add(product: any) {
    this.shopingCar.addToCart({
      ...product,
      qty: 1
    });
  }

  goToCart() {
    console.log("redirigiendo al carrito")
    this.router.navigate(['/shoping_car']);
  }


}
