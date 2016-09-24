import { Component, OnInit } from '@angular/core';
import { Recipes } from './recipes';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipes;
  constructor() { }

  ngOnInit() {
  }

}
