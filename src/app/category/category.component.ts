import { Component } from "@angular/core";
import { Category, categories } from "../categories";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrl: "./category.component.css",
})
export class CategoryComponent {
  categories = [...categories];
  activeCategory: Category | undefined;

  changeCategory(category: Category) {
    this.activeCategory = category;
  }
}
