import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';
import { Tag } from 'src/app/shared/model/tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id);
  }

  getAllFoodByTag(tag:string) : Foods[]{
    return tag == 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))
    
  }

  getAllTag():Tag[]{
    return [
      {name:'All', count:8},
      {name:'FastFood', count:6},
      {name:'Pizza', count:3},
      {name:'Lunch', count:1},
      {name:'SlowFood', count:1},
      {name:'Hamburger', count:2},
      {name:'Fry', count:1},
      {name:'Soup', count:1}
    ]
  }

  getAll():Foods[]{
    return[
      {
        id:1,
        name:'Pizza Pepperoni',
        cookTime: '10-20',
        price:10,
        favourite:false,
        origins:['italy'],
        star:4.5,
        imageUrl:'/assets/food-1.jpg',
        tags:['FastFood', 'Pizza']
      },
      {
        id:2,
        name:'Meatballs',
        cookTime: '20-40',
        price:12,
        favourite:true,
        origins:['Italy', 'German', 'Indian'],
        star:4.1,
        imageUrl:'/assets/food-2.jpg',
        tags:['Lunch']
      },
      {
        id:3,
        name:'Burger',
        cookTime: '10-15',
        price:8,
        favourite:true,
        origins:['indian', 'London'],
        star:3.2,
        imageUrl:'/assets/food-3.jpg',
        tags:['FastFood', 'Hamburger']
      },
      {
        id:4,
        name:'French Fries',
        cookTime: '10-20',
        price:5,
        favourite:false,
        origins:['italy', 'America'],
        star:4.5,
        imageUrl:'/assets/food-4.jpg',
        tags:['Fry', 'FastFood']
      },
      {
        id:5,
        name:'Soup',
        cookTime: '30-40',
        price:12,
        favourite:true,
        origins:['italy', 'Chinese'],
        star:3.2,
        imageUrl:'/assets/food-5.jpg',
        tags:['Soup', 'SlowFood']
      },
      {
        id:6,
        name:'Pizza Black Olives',
        cookTime: '10-20',
        price:15,
        favourite:false,
        origins:['italy'],
        star:4.4,
        imageUrl:'/assets/food-6.jpg',
        tags:['FastFood', 'Pizza']
      },
      {
        id:7,
        name:'Beef Burger',
        cookTime: '10-20',
        price:7,
        favourite:false,
        origins:['italy', 'carribean', 'indian'],
        star:3.5,
        imageUrl:'/assets/food-7.jpg',
        tags:['FastFood', 'Hamburger']
      },
      {
        id:8,
        name:'Pizza Mushroom',
        cookTime: '10-20',
        price:10,
        favourite:true,
        origins:['italy'],
        star:4.1,
        imageUrl:'/assets/food-8.jpg',
        tags:['FastFood', 'Pizza']
      }
    ]
  }
}
