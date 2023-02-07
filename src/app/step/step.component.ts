import { ChangeDetectionStrategy, Component,EventEmitter,OnInit,Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Step } from '../models/step.model';
@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
  //changeDetection: ChangeDetectionStrategy.OnPush


})
export class StepComponent implements OnInit {

@Output()  newItemEvent = new EventEmitter<any>();
@Input() step : any;



  constructor(private router: Router){}

  steps : Step[] = [

    { id: 1, title: 'YOUR INFO', isActive: false, isCompleted: false },
    { id: 2, title: 'SELECT PLAN', isActive: false, isCompleted: false },
    { id: 3, title: 'ADD-ONS', isActive: false, isCompleted: false },
    { id: 4, title: 'SUMMARY', isActive: false, isCompleted: false }
  ];

  currentStep: number = 1;


  ngOnInit(){
    this.mapSteps(this.currentStep);
    //console.log(this.currentStep)
  }
  onPrevStep(step: number) {
    this.currentStep = step;
    this.mapSteps(this.currentStep);
  }

  onNextStep(step: number) {
    this.currentStep = step;
    this.mapSteps(this.currentStep);
    //console.log(step)
  }

  goToStep(step: number): void {
    //console.log(step);
    this.currentStep = step;
    this.mapSteps(step);

  }

  mapSteps(step: number) {
    this.steps.map((_step) => {
      if (_step.id === step) {
        _step.isActive = true;
      } else {
        _step.isActive = false;
      }
    });
  }


















}
