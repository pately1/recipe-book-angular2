import { Component, OnInit } from '@angular/core';
import { Recipes } from './recipes';
import { RecipeService } from "./recipe.service";

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  providers: [ RecipeService ]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipes;
  constructor() { }

  ngOnInit() {
  }

}
