import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppinglistEditComponent } from './shopping-list/shoppinglist-edit/shoppinglist-edit.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppinglistService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    
    AuthComponent,
    HeaderComponent,
    PostComponent,
    RecipesComponent,
    RecipeEditComponent,
    RecipeListComponent,
    RecipeStartComponent,
    DropdownDirective,
    RecipeDetailsComponent,
    ShoppingListComponent,
    ShoppinglistEditComponent,
    FileNotFoundComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ShoppinglistService, RecipeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
