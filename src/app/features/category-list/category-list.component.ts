import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit{
  @Input() categoryCount = 0;
  categories: any[] = [];

  constructor(private categoryService: CategoryService, private spinner:NgxSpinnerService) {}
  ngOnInit(): void {
    this.getCategory(this.categoryCount);
  }

  getCategory(count:number) {
    this.spinner.show();
    this.categoryService.getCategories(count).subscribe({
      next:(res) =>{
        this.spinner.hide();
        this.categories = res;
      },
      error: (err) => {
        this.spinner.hide();
        console.log("Category List", err);
      }
    })
  }
}
