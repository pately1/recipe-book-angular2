import { Injectable } from '@angular/core';
import { Recipes } from "./recipes";
import { Ingredient } from "../shared";

@Injectable()
export class RecipeService {

 private recipes: Recipes[] = [
    new Recipes('Schnitzel', 'Very tasty', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg', [
        new Ingredient('French Fries', 2),
        new Ingredient('Pork Meat', 1)
    ]),
    new Recipes('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];

  constructor() { }
    getRecipe() {
        return this.recipes;
    }
}
