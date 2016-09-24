import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipes } from '../recipes';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
    recipes: Recipes[] = [];
    @Output() recipeSelected = new EventEmitter();
    recipe = new Recipes("Dummy", "dummy", "https://pbs.twimg.com/profile_images/1620149654/avatar.jpg");
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipes){
    this.recipeSelected.emit(recipe);
  }

}
