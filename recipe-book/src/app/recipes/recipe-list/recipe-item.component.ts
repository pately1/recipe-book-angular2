import {Component, OnInit, Input} from '@angular/core';
import { Recipes } from '../recipes';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input()recipe: Recipes;
  constructor() { }

  ngOnInit() {
  }

}
