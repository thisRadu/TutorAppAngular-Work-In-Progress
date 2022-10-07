import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  isTest = true;
  id?: number;
  private sub: any;
  category: Category = {};
  constructor(private categoryService:CategoryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.getById();

  })
}
ngOnDestroy() {
  this.sub.unsubscribe();
}

  getById(){
    
    this.categoryService.getCategory(this.id).subscribe((r:Category)=> this.category = r);
  }
}
