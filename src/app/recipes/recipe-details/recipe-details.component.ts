import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  finalRecipeSelected: Recipe;
  id: number;


  constructor(private recipeService: RecipeService,
              private activRoute: ActivatedRoute,
              private route: Router) { }

  ngOnInit() {
    this.activRoute.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.finalRecipeSelected = this.recipeService.getRecipe(this.id);
    });
  }

  displaySelectedItem(selectedItem: Recipe) {
    console.log('selectedItem details' + selectedItem);
  }

  sentToShoppingList(recipeToShopList: Ingredient[]) {
    this.recipeService.sentToShoppingList(recipeToShopList);

  }
  deleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.route.navigate(['/recipes']);
  }
}
