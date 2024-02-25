import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  name : String=  "";
  address : String = "";

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({name: '', address: ''});

  constructor(private cartService: CartService,
    private formBuilder: FormBuilder,
    ){
  }

  onSubmit(): void {
    console.log(this.checkoutForm.controls['name']);

    if(this.name != "" && this.address != ""){
      this.items = this.cartService.clearCart();
      console.warn('Your order has been submitted', this.checkoutForm.value);
      this.checkoutForm.reset();
      this.name = '';
      this.address = '';
    }else{
      window.alert('Please fill in your name and address');
    }
  }
}
