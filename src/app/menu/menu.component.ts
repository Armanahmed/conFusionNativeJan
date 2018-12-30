import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';

@Component({
	selector: 'app-menu',
	moduleId: module.id,
	templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {
	
	dishes: Dish[];
	errMsg: string;

	constructor(private dishService: DishService,
    @Inject('baseURL') private baseURL) { }

  ngOninit() {
  	this.dishService.getDishes()
  	.subscribe(dishes => this.dishes = dishes, errmess => this.errMess = <any>errmess);
  }

}