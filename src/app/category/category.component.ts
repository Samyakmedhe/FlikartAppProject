import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  category: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the category from the route parameter
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || ''; // Default to empty if no category is found
    });
  }
 

}
