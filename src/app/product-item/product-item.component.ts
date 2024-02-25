import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../products";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrl: "./product-item.component.css",
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

  share(productLink: string) {
    const shareMessage = `Check out: ${productLink}`;
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      shareMessage
    )}`;
    window.location.href = whatsappLink;
    window.alert("The product has been shared trough whatsapp!");
  }

  sharetg(productLink: string) {
    const shareMessage = `Check out this product:  ${productLink}`;
    const tgLink = `https://t.me/share/url?url=${encodeURIComponent(
      shareMessage
    )}`;
    window.location.href = tgLink;
    window.alert("The product has been shared trough telegram!");
  }

  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
  like(product: Product) {
    product.likes = product.likes + 1;
  }
}
