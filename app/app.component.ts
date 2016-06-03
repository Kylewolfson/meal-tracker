import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal tracker!</h1>
      <h3>{{ meal.description }}</h3>
    </div>
  `
})

export class AppComponent {
  public renames: Rename[];  // Task[] (or Array<Task>) identifies tasks as an array of Task objects
  constructor(){
    this.renames = [
      new Rename("Create To-Do List app.", 0),
      new Rename("Learn Kung Fu.", 1),
      new Rename("Rewatch all the Lord of the Rings movies.", 2),
      new Rename("Do the laundry.", 3)
    ];
  }
}

export class Rename {
  public done: boolean = false;
  constructor(public description: string, public id: number) {

  }
}
