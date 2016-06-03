import { Component } from 'angular2/core';
import { MealListComponent } from './meal-list.component'
import { Meal } from './meal.model'

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal tracker!</h1>
      <meal-list [mealList] = "meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Bacon and Eggs", "Part of a healthy breakfast", 500),
      new Meal("Pho", "I can't find the proper accent mark", 450),
      new Meal("Burrito", "It was huge!", 800),
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}
