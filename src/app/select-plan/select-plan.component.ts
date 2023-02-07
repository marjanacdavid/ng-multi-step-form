import { Component, OnInit, AfterContentInit, Output, EventEmitter, Input } from '@angular/core';
import { Plan } from 'src/app/models/plan.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IMAGE_CONFIG, NgOptimizedImage } from '@angular/common';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styleUrls: ['./select-plan.component.css']
})
export class SelectPlanComponent implements OnInit {



  @Output() step = new EventEmitter<number>();

  // data
  @Output() plan = new EventEmitter<string>();
  @Output() monthlyPrice = new EventEmitter<number>();
  @Output() yearlyPrice = new EventEmitter<number>();
  @Output() monthly = new EventEmitter<string>();
  @Output() yearly = new EventEmitter<string>();
  // check if monthly is true or false for add-on component
  @Output() checkMonthly = new EventEmitter<boolean>();



  plans : Plan[] = [
    {
      id: 1,
      iconUrl: '../../assets/images/icon-arcade.svg',
      name: 'Arcade',
      monthlyPrice: 9,
      yearlyPrice: 90,
      monthlyPlan: '(Monthly)',
      yearlyPlan: '(Yearly)',
      isActive: false,
    },
    {
      id: 2,
      iconUrl: '../../assets/images/icon-advanced.svg',
      name: 'Advanced',
      monthlyPrice: 12,
      yearlyPrice: 120,
      monthlyPlan: '(Monthly)',
      yearlyPlan: '(Yearly)',
      isActive: false,
    },
    {
      id: 3,
      iconUrl: '../../assets/images/icon-pro.svg',
      name: 'Pro',
      monthlyPrice: 15,
      yearlyPrice: 150,
      monthlyPlan: '(Monthly)',
      yearlyPlan: '(Yearly)',
      isActive: false,
    },
  ];

  currentPlan: number = 1;

  isMonthly: boolean = true;
  isYearly: boolean = false;
  setActive: boolean = false;

  isComplete: boolean = false;

  @Input() stepsArray: any;



  constructor() {}

  ngOnInit(): void {

  }

  changeSubscription(event: any){
    //console.log(event);
    if(event.value === true){
      this.setYearly();
      //this.isMonthly = false;
      //this.isYearly = true;
    } else if(event.value === false){
      //this.isMonthly = true;
      //this.isYearly = false;
   this.setMonthly()
  }
  }

  onPrevStep(prevStep: number): void {
    //console.log(prevStep);
    this.step.emit(prevStep);
  }

  onNextStep(nextStep: number): void {
    this.step.emit(nextStep);
  }

  goToPlan(plan: number): void {
    this.currentPlan = plan;
    this.mapPlans(plan);
  }

  emitData(name: string, monthlyPrice: number, yearlyPrice: number, monthlyPlan: string, yearlyPlan: string) {

    if (this.isMonthly === true) {
      this.yearly.emit('');
      this.monthly.emit(monthlyPlan);
      this.monthlyPrice.emit(monthlyPrice);
      this.plan.emit(name);
      this.checkMonthly.emit(this.isMonthly);
      return;
    }

    if (this.isYearly === true) {
      this.monthly.emit('');
      this.yearly.emit(yearlyPlan);
      this.yearlyPrice.emit(yearlyPrice);
      this.plan.emit(name);
      this.checkMonthly.emit(this.isMonthly);
      return;
    }


  }

  mapPlans(plan: number) {
    this.plans.map((_plan) => {
      if (_plan.id === plan) {
        _plan.isActive = true;
        this.setActive = true;
      } else {
        _plan.isActive = false;
      }
    });
  }

  setMonthly() {
    this.isMonthly = true;
    this.isYearly = false;
  }

  setYearly() {
    this.isYearly = true;
    this.isMonthly = false;
  }

  completeStep() {
    this.isComplete = true;
    this.stepsArray[1].isCompleted = true;
  }

}
