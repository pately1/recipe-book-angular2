import {Component, OnInit, Input} from '@angular/core';
import { Recipes } from '../recipes';
import {ShoppingListService} from "../../shopping-list/shopping-list.service";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipes;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }
  onAddShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredient);
  }
}
