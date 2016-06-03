import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'keg-list',
  inputs: ['kegList']
  // outputs: ['onKegSelect']

  template: `
    <keg-display *ngFor="#currentTask of kegList | done:filterDone | priority:filterPriority"
      (click)="kegClicked(currentTask)"
      [class.selected]="currentTask === selectedTask"
      [keg]="currentTask">
    </keg-display>
    <edit-keg-details *ngIf="selectedTask" [keg]="selectedTask"></edit-keg-details>
    <new-keg (onSubmitNewTask)="createTask($event)"></new-keg>
    `
})
