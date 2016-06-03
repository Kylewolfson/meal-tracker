import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDisplayComponent } from './meal-display.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealDisplayComponent],
  template: `
    <meal-display *ngFor="#currentMeal of mealList"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>
    <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal-details>
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalories: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void{
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: Meal): void{
    this.mealList.push(
      newMeal
    );
  }
  onChange(filterOption){
    this.filterCalories = filterOption;
  }
}
