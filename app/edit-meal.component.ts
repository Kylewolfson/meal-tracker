import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <div class="meal-form">
    <h3>Edit your selected nom:</h3>
      Edit Name:
      <input [(ngModel)]="meal.food" class="input-lg"/>
      Edit Description:
      <input [(ngModel)]="meal.description" class="input-lg"/>
      Edit Calories:
      <input [(ngModel)]="meal.calories" class="input-lg"/>
    </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
