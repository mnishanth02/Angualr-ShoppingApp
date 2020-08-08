import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]>  {

  constructor(private dataStorageService: DataStorageService,
              private recipeService: RecipeService) { }

  resolve(route: ActivatedRouteSnapshot, currentRoutingState: RouterStateSnapshot) {

    const recipe = this.recipeService.getRecipeList();
    if (recipe.length === 0) {
      return this.dataStorageService.onFetchData();
    } else {
      return recipe;
    }
  }
}
