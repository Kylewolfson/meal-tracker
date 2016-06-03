import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDisplayComponent } from './meal-display.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriePipe } from './calories.pipe';
import { EditMealDetailsComponent } from './edit-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriePipe],
  directives: [MealDisplayComponent, NewMealComponent, EditMealDetailsComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="All"> Show All</option>
    <option value="High calorie"> Show High Calorie Foods</option>
    <option value="Healthy"> Show Low Calorie Foods</option>
  </select>
    <meal-display *ngFor="#currentMeal of mealList | caloriePipe: filterCalories"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
    `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalories: string = "All";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void{
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(mealArray): void{
    if (mealArray[0] && mealArray[2]){
      var newMeal = new Meal(mealArray[0], mealArray[1], mealArray[2]);
      this.mealList.push(
        newMeal
      );
    } else {
      alert("Meal name and calories must be entered")
    }
  }
  onChange(filterOption){
    this.filterCalories = filterOption;
  }
}
