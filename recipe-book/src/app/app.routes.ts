import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RECIPE_ROUTES} from "./recipes/recipe.routes";
/**
 * Created by Yash on 9/28/2016.
 */
const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES },
    { path: 'shopping-list', component: ShoppingListComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);