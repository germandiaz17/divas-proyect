import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import productosData from '../../data/products.json';

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
  imports: [CommonModule],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
})
export class Layout implements OnInit {

  producto: Producto[] = [];

  ngOnInit(): void {
    this.producto = productosData as Producto[];
  }

}
