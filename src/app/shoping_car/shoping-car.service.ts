import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ShopingCarService {
  id: number;
  name: string;
  price: number;
  qty: number;
  image?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ShopingCar {
  
  private cart: ShopingCarService[] = [];

  // Estado observable para el carrito
  private cartSubject = new BehaviorSubject<ShopingCarService[]>([]);
  cart$ = this.cartSubject.asObservable();

  private totalQtySubject = new BehaviorSubject<number>(0);
  totalQty$ = this.totalQtySubject.asObservable();

  private updateState() {
    this.cartSubject.next([...this.cart]);
    this.totalQtySubject.next(this.getTotalQuantity());
  }

  constructor() {}

  // Agregar producto
  addToCart(item: ShopingCarService) {
    const exist = this.cart.find(p => p.id === item.id);

    if (exist) exist.qty += item.qty;
    else this.cart.push(item);

    this.updateState();
  }

  // Eliminar producto por ID
  removeFromCart(id: number) {
    this.cart = this.cart.filter(item => item.id !== id);
    this.updateState();
  }

  // Limpiar carrito (opcional)
  clearCart() {
    this.cart = [];
    this.updateState();
  }

  // Obtener cantidad total de productos en el carrito
  getTotalQuantity() {
  return this.cart.reduce((acc, item) => acc + item.qty, 0);
}
}
