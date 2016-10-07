import {Injectable, EventEmitter} from '@angular/core';
import { Recipes } from "./recipes";
import { Ingredient } from "../shared";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {

    recipesChanged = new EventEmitter<Recipes[]>();
 private recipes: Recipes[] = [
    new Recipes('Schnitzel', 'Very tasty', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg', [
        new Ingredient('French Fries', 2),
        new Ingredient('Pork Meat', 1)
    ]),
    new Recipes('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];

  constructor(private http: Http) { }
    getRecipes() {
        return this.recipes;
    }

    getRecipe(id: number){
        return this.recipes[id];
    }
    deleteRecipe(recipe: Recipes){
        this.recipes.splice(this.recipes.indexOf(recipe),1);
    }
    addRecipe(recipe: Recipes) {
        this.recipes.push(recipe);
    }
    editRecipe(oldRecipe: Recipes, newRecipe: Recipes) {
        this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
    }

    storeData() {
        const body = JSON.stringify(this.recipes);
        console.log(body);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.put('https://recipebook-6407d.firebaseio.com/recipes.json', body, {headers: headers});
    }

    fetchData() {
        return this.http.get('https://recipebook-6407d.firebaseio.com/recipes.json')
            .map((response: Response) => response.json())
            .subscribe(
                (data: Recipes[]) => {
                    this.recipes = data;
                    this.recipesChanged.emit(this.recipes);
                }
            );
    }
}
