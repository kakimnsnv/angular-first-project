import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];


  share(productLink: string) {
    const shareMessage = `Check out: ${productLink}`;
    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    window.location.href = whatsappLink;
    window.alert('The product has been shared trough whatsapp!');
  }

  sharetg(productLink: string) {
    const shareMessage = `Check out this product:  ${productLink}`;
    const tgLink = `https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`;
    window.location.href = tgLink;
    window.alert('The product has been shared trough telegram!');
  }

  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/