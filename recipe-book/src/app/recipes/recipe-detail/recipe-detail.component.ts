import {Component, OnInit, OnDestroy} from '@angular/core';
import { Recipes } from '../recipes';
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Router, ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipes;
  private recipeIndex: number;
    private subscription: Subscription;

  constructor(private sls: ShoppingListService, private router: Router, private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
      this.subscription = this.route.params.subscribe(
          (params: any) => {
              this.recipeIndex = params['id'];
              this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
          }
      );
  }
  onAddShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredient);
  }

  onEdit() {
      this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete() {
      this.recipeService.deleteRecipe(this.selectedRecipe);
      this.router.navigate(['/recipes']);
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
