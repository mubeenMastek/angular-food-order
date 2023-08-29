import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/model/food';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {
  food!:Foods;

  constructor(private fs:FoodService, 
    private activatedRoute:ActivatedRoute, 
    private cartService:CartService,
    private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.food = fs.getFoodById(params.id);
    })
   }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
