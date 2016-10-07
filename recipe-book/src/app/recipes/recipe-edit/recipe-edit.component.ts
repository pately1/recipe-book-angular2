import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import { Subscription } from "rxjs/Rx";
import {FormArray, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {Recipes} from "../recipes";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: []
})
export class RecipeEditComponent implements OnInit, OnDestroy {
    private isNew = true;
    private recipe:Recipes;
    recipeForm: FormGroup;
    private recipeIndex: number;
    private subscription: Subscription;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
        (params: any) => {
            if (params.hasOwnProperty('id')) {
                this.isNew = false;
                this.recipeIndex = +params['id'];
                this.recipe = this.recipeService.getRecipe(this.recipeIndex);
               // console.log(this.recipe);
            }
            else {
                this.isNew = true;
                this.recipe = null;
            }
            this.initForm();
        }
    );
  }

  onSubmit() {
      const newRecipe = this.recipeForm.value;
      //console.log(newRecipe);
      if (this.isNew) {
        this.recipeService.addRecipe(newRecipe);
      }
      else {
          this.recipeService.editRecipe(this.recipe, newRecipe);
      }
      this.navigateBack();
  }
  private navigateBack() {
      this.router.navigate(['../']);
  }
  onCancel() {
      this.navigateBack();
  }

  onRemoveItem(index: number) {
      (<FormArray>this.recipeForm.controls['ingredient']).removeAt(index);
  }

  onAddItem(name: string, amount: string) {
      (<FormArray>this.recipeForm.controls['ingredient']).push(
          new FormGroup({
              name: new FormControl(name, Validators.required),
              amount: new FormControl(amount, [
                  Validators.required,
                  Validators.pattern("\\d+")
              ])
          })
      );
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  private initForm() {
      let recipeName = '';
      let recipeImage = '';
      let recipeContent = '';
      let recipeIngredient: FormArray = new FormArray([]);

      if (!this.isNew) {
          if (this.recipe.hasOwnProperty('ingredient')) {
              for (let i = 0; i < this.recipe.ingredient.length; i++) {
                  recipeIngredient.push(
                      new FormGroup({
                          name: new FormControl(this.recipe.ingredient[i].name, Validators.required),
                          amount: new FormControl(this.recipe.ingredient[i].amount, [
                              Validators.required,
                              Validators.pattern("\\d+")
                          ])
                      })
                  );
              }
          }
          recipeName = this.recipe.name;
          recipeImage = this.recipe.imagePath;
          recipeContent = this.recipe.description;
      }
      this.recipeForm = this.formBuilder.group({
         name: [recipeName, Validators.required],
          imagePath: [recipeImage, Validators.required],
          description: [recipeContent, Validators.required],
          ingredient: recipeIngredient
      });
  }
}
