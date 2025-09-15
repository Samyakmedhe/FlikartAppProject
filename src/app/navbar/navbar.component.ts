import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  banners = [
    { image: '/assets/10928FA1-AC81-4DC1-9431-7B6EDA86188F_1_201_a.jpeg', alt: 'Banner 1' },
    { image: '/assets/1D9EF9A2-3A82-41B4-8374-69AF3C30F769_1_201_a.jpeg', alt: 'Banner 2' },
    { image: '/assets/8A8A1D51-1062-4D50-A719-8B4BB24D8AB3_1_201_a.jpeg', alt: 'Banner 3' },
    { image: '/assets/8780DB1A-A20D-4945-AB4C-F41E4C3B4A9C_1_201_a.jpeg', alt: 'Banner 3' }
  ];
  currentIndex = 0;
  autoSlideInterval: any;

  constructor() {}

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextBanner();
    }, 3000); // Change banner every 3 seconds
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextBanner(): void {
    this.currentIndex = (this.currentIndex + 1) % this.banners.length;
  }

  prevBanner(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.banners.length) % this.banners.length;
  }

  goToBanner(index: number): void {
    this.currentIndex = index;
  }
  @Input() title!: string;
  @Input() price!: string;
  @Input() image!: string;
  products = [
    { name: 'OnePlus True Wireless Earbuds', originalPrice: 3000, discountedPrice: 1599, image: 'assets/image copy 9.png' },
    { name: 'Best Selling Mobile Speakers', originalPrice: 144900, discountedPrice: 127999, image: 'assets/image copy 10.png' },
    { name: 'Noise Smartwatches', originalPrice:  8999, discountedPrice: 6999, image: 'assets/image copy 11.png' },
    { name: 'Mac Book Pro M2', originalPrice: 99900, discountedPrice: 69999, image: '/assets/image copy 15.png' },
    { name: 'Acer Monitors', originalPrice: 12999, discountedPrice: 9949, image: '/assets/image copy 13.png' },
    { name: 'Lg1 15/8 Kg LG 15/8 kg Washer with Dryer ', originalPrice: 129990, discountedPrice: 119990, image: '/assets/image copy 17.png' },
    { name: 'Canon PIXMA Printer', originalPrice: 26000, discountedPrice: 21000, image: 'assets/image copy 12.png' },
    { name: 'Sony Alpha ILCE-7M3K', originalPrice: 129999, discountedPrice: 110999, image: '/assets/image copy 16.png' },
    { name: 'boAt Smartwatches', originalPrice: 1299, discountedPrice: 999, image: 'assets/image copy 14.png' },
  
  ];
  slideConfig = {
    infinite: true,
    slidesToShow: 4, // Number of items visible
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 500,
    cssEase: 'linear',
    variableWidth: false, // Ensure items stay uniform
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  
  
  
  
  getDiscountPercentage(originalPrice: number, discountedPrice: number): string {
    const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
    return `${Math.round(discount)}% off`;
  }

 
}
