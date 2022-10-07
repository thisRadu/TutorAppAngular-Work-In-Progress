import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { SubCategory } from 'src/app/models/subCategory';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];
  subCategories: SubCategory[] = [];
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getSubCategories();
  }
  getCategories(){
  this.categoryService
      .getCategories()
      .subscribe(r=> this.categories = r["value"]);
      

  }
  getSubCategories(){
    this.categoryService
        .getSubCategories()
        .subscribe(r=> this.subCategories = r["value"]);
        
  
    }
}
