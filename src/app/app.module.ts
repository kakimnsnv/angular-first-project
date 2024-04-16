import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./_pages/top-bar/top-bar.component";
import { ProductListComponent } from "./_pages/product-list/product-list.component";
import { ProductAlertsComponent } from "./_pages/product-alerts/product-alerts.component";
import { ProductDetailsComponent } from "./_pages/product-details/product-details.component";
import { ShippingComponent } from "./_pages/shipping/shipping.component";
import { CartComponent } from "./_pages/cart/cart.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductItemComponent } from "./_pages/product-item/product-item.component";
import { CategoryComponent } from "./_pages/category/category.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: CategoryComponent },
      { path: "products", component: ProductListComponent },
      { path: "products/:productId", component: ProductDetailsComponent },
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    ProductItemComponent,
    CategoryComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
