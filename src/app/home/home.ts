import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { Layout } from '../components/layout/layout';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [Header, Layout, Footer],
})
export class Home {

}
