import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipes } from '../recipes';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
    recipes: Recipes[] = [];
    //recipe = new Recipes("Dummy", "dummy", "https://pbs.twimg.com/profile_images/1620149654/avatar.jpg");
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
      this.recipes = this.recipeService.getRecipes();
  }
}
