import { Component } from '@angular/core';
import {RecipeService} from "./recipes/recipe.service";
import {error} from "util";

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

    constructor(private recipeService: RecipeService) {}

    onStore() {
        this.recipeService.storeData().subscribe(
            (data: any) => console.log(data),
            error => console.error(error)
        );
    }

    onGet() {
        this.recipeService.fetchData();
    }
}
