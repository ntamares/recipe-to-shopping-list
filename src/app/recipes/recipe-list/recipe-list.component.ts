import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test name', 'test desc', 'https://restaurantden.com/wp-content/uploads/2017/09/foodiesfeed.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
