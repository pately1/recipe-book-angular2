import { Ingredient } from '../shared/ingredient';

export class Recipes {
    constructor(public name: string, public description: string, public imagePath: string, public ingredient: Ingredient[]){
    }
}
