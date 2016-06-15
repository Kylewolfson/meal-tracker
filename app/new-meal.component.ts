import { Component, EventEmitter} from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Add a new nom:</h3>
    <input placeholder="Food" class="input-lg" #foodInput>
    <input placeholder="Description" class="input-lg" #descriptionInput>
    <input placeholder="Calories" class="input-lg" #calorieInput>
    <button (click)="buildMealArray(foodInput, descriptionInput, calorieInput)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})
export class NewMealComponent{
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  buildMealArray(foodInput: HTMLInputElement, descriptionInput: HTMLInputElement, calorieInput: HTMLInputElement){
    // var mealArray = [];
    // mealArray.push(foodInput.value, descriptionInput.value, parseInt(calorieInput.value));
    if (foodInput.value && calorieInput.value){
      var newMeal = new Meal(foodInput.value, descriptionInput.value, parseInt(calorieInput.value));
    } else {
      alert("Meal name and calories must be entered");
    }

    this.onSubmitNewMeal.emit(newMeal);
    foodInput.value="";
    descriptionInput.value="";
    calorieInput.value="";
  }

}
