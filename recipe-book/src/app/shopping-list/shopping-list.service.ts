import {Ingredient} from "../shared/ingredient";

export class ShoppingListService {
private items: Ingredient[] = [];
  constructor() { }
    getItems() {
        return this.items;
    }

    addItems(item : Ingredient[]) {
        Array.prototype.push.apply(this.items, item);
    }
}
