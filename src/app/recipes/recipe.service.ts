import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Fried Egg with Spinach',
      'Seriously... just a fried egg and spinach',
      'https://restaurantden.com/wp-content/uploads/2017/09/foodiesfeed.jpg',
      [
        new Ingredient('Egg', 1),
        new Ingredient('Spinach', 2)
      ]),
    new Recipe(
      'Cheeseburger',
      'That is a tasty burger',
      'https://images.unsplash.com/photo-1508737027454-e6454ef45afd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Hamburger patty', 1),
        new Ingredient('Cheddar cheese slice', 1),
        new Ingredient('Tomato slice', 2)
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

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
