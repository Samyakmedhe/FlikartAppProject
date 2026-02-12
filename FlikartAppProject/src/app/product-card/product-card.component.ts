import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() title!: string;
  @Input() price!: string;
  @Input() image!: string;
}
