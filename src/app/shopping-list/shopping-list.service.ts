import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppinglistService {

  slEmitter = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Banana', 6),
  ];

  getIngredientsList() {
    return this.ingredients.slice();

  }

  getIngredient(id: number) {
    return this.ingredients[id];
  }

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.slEmitter.next(this.ingredients.slice());
  }
  addIngredients(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient.slice());
    this.slEmitter.next(this.ingredients.slice());
  }
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.slEmitter.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.slEmitter.next(this.ingredients.slice());

  }

}
