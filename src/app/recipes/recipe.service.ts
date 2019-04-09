import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'test name',
      'test desc',
      'https://restaurantden.com/wp-content/uploads/2017/09/foodiesfeed.jpg',
      [
        new Ingredient('Egg', 2),
        new Ingredient('Spinach', 2)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {};

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
    alert('Ingredients added to shopping list');
  }
}
