import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  private ingredientSubject: Subscription;

  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppinglistService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredientsList();
    this.ingredientSubject = this.shoppingService.slEmitter.subscribe((ingre: Ingredient[]) => {
      this.ingredients = ingre;
    });

  }

  onEdit(index: number) {
    this.shoppingService.startedEditing.next(index);
  }

  ngOnDestroy(): void {

    this.ingredientSubject.unsubscribe();
  }

}
