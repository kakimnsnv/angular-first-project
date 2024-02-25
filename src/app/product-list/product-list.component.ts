import { Component, Input } from "@angular/core";

import { Product, products as allProducts } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
  @Input() products: Product[] = allProducts;
  removeItem(item: Product) {
    this.products = this.products.filter((product) => product !== item);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
