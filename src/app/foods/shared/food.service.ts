import { Injectable } from '@angular/core';
import { Food } from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  menu: Food[]=[
    {
      id: 1,
      name: 'Pizza',
      description: 'Hawaiana',
      category:'Food',
      image:'https://cdn2.cocinadelirante.com/sites/default/files/images/2019/11/como-hacer-pizza-hawaiana.jpg',
      price:230
    },
    {
      id: 2,
      name: 'Pizza',
      description: 'Hawaiana',
      category:'Food',
      image:'https://cdn2.cocinadelirante.com/sites/default/files/images/2019/11/como-hacer-pizza-hawaiana.jpg',
      price:230
    },
    {
      id: 3,
      name: 'Pizza',
      description: 'Hawaiana',
      category:'Food',
      image:'https://cdn2.cocinadelirante.com/sites/default/files/images/2019/11/como-hacer-pizza-hawaiana.jpg',
      price:230
    },
    {
      id: 4,
      name: 'Pizza',
      description: 'Hawaiana',
      category:'Food',
      image:'https://cdn2.cocinadelirante.com/sites/default/files/images/2019/11/como-hacer-pizza-hawaiana.jpg',
      price:230
    },
    {
      id: 5,
      name: 'Pizza',
      description: 'Hawaiana',
      category:'Food',
      image:'https://cdn2.cocinadelirante.com/sites/default/files/images/2019/11/como-hacer-pizza-hawaiana.jpg',
      price:230
    },
  ]
  constructor() { }

  public getAllFoods():Food[]{
    return this.menu;
  }

  //Añadir nueva comida 
  public addFood(food:Food){
    this.menu.push(food);
  }

  //Actualizar comida
  public updateFood(newFood:Food){
    this.menu.forEach((food, index)=>{
      if(food.id == newFood.id){
        food = newFood;
      }
    })
  }

  //Eliminar comida
  public deleteFood(deleteFood:Food){
    this.menu.forEach((food, index)=>{

      if (food.id == deleteFood.id){
        this.menu.splice(index,1)
      }

    })
  }
}
