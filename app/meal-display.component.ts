import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <h4>Food: {{meal.food}}<br> Description:{{meal.description}} <br>Calories: {{meal.calories}}</h4>
  `
})
export class MealDisplayComponent{

}
