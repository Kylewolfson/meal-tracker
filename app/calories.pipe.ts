import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "caloriePipe",
  pure: false
})
export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], args) {
    var filterString = args[0];
    if (filterString === "Healthy")
      return input.filter(function(meal) {
        return meal.calories <= 500;
      });
    else if (filterString === "High calorie")
      return input.filter(function(meal){
        return meal.calories > 500;
      });
    else return input;
  }
}
