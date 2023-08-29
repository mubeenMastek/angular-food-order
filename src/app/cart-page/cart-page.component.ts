import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/model/cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../shared/model/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
  constructor(private cartService:CartService) { 
    this.setCart();
  }
  ngOnInit(): void {    
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem, quntityInString:string){
    const quantity = parseInt(quntityInString);
    console.log(quantity);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

}
