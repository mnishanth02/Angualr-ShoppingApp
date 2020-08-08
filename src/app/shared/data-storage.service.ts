import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  onSaveData() {
    const recipe = this.recipeService.getRecipeList();
    this.http.put('https://ng-course-shoppingapp.firebaseio.com/recipes.json', recipe).subscribe(responce => {
      console.log(responce);
    });
  }

  onFetchData() {

    return this.http.get<Recipe[]>('https://ng-course-shoppingapp.firebaseio.com/recipes.json')
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
        tap(recipe => {
          this.recipeService.setRecipeList(recipe);
        })
      );
  }

}
