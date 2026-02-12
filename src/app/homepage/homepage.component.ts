import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  electronics = [
    { title: 'Best Selling Mobile', price: 'From ₹499', image: 'mobile.jpg' },
    { title: 'Monitors', price: 'From ₹7949', image: 'monitor.jpg' },
    { title: 'Smartwatches', price: 'From ₹1099', image: 'watch.jpg' },
  ];
  

}
