import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { Layout } from '../components/layout/layout';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  imports: [Header, Layout],
})
export class Home {

}
