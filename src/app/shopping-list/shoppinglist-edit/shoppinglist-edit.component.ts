import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list.service';

@Component({
  selector: 'app-shoppinglist-edit',
  templateUrl: './shoppinglist-edit.component.html',
  styleUrls: ['./shoppinglist-edit.component.css']
})
export class ShoppinglistEditComponent implements OnInit {

  
  @ViewChild('form', { static: false }) formInput: NgForm;

  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;


  constructor(private shoppingService: ShoppinglistService) { }

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing.subscribe(index => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingService.getIngredient(index);
      this.formInput.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAdd() {
    const name = this.formInput.form.value.name;
    const amount = this.formInput.form.value.amount;
    console.log('name :  ' + name);
    console.log('amount :  ' + amount);
    const ingredient = new Ingredient(name, amount);
    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editedItemIndex, ingredient);
    } else {
      this.shoppingService.addNewIngredient(ingredient);

    }
    this.editMode = false;
    this.formInput.reset();
  }

  onClear() {
    this.formInput.reset();
    this.editMode = false;
  }
  onDelete() {
    this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.formInput.reset();
    this.editMode = false;
  }


}
