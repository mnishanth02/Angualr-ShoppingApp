import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();
  recipeEmitter = new Subject<Recipe>();
  constructor(private slService: ShoppinglistService) { }

  private recipes: Recipe[] = [];
  // private recipes: Recipe[] = [
  //   new Recipe('Tasty Schnitzel',
  //     'A suber tasty Schnitzel - just Awsome  ',
  //     'https://www.jocooks.com/wp-content/uploads/2017/10/chicken-schnitzel-1-8.jpg',
  //     [
  //       new Ingredient('Meat', 1),
  //       new Ingredient('French Fries', 20)
  //     ]
  //   ),
  //   new Recipe('Big fat Recipe',
  //     'Whatelse you need to say ?',
  //     'https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary.jpg',
  //     [
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Meat', 4)
  //     ])
  // ];

  getRecipeList() {
    return this.recipes.slice();
  }

  setRecipeList(recipess: Recipe[]) {
    this.recipes = recipess;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  sentToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);

  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }



}
