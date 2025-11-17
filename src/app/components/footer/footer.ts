import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class Footer {

  companyName: string = 'Divas Proyect';
  year: number = new Date().getFullYear();
  social = {
    twitter: 'https://twitter.com/divasproyect',
    github: 'https://www.github.com/divasproyect/',
    linkedin: 'https://www.linkedin.com/in/divasproyect',
  }

  links = [
    { label: 'twitter', href: 'https://twitter.com/divasproyect' },
    { label: 'github', href: 'https://www.github.com/divasproyect/' },
    { label: 'linkedin', href: 'https://www.linkedin.com/in/divasproyect' },
  ]
}
