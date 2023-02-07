import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})


export class PersonalInfoComponent implements OnInit {



@Output() step = new EventEmitter<number>();

@Input() localDraft!: string | null | undefined;

@Input() stepsArray: any;

isComplete: boolean = false;

public personalInfoForm!: FormGroup;

constructor(
  private fb: FormBuilder,
  private activatedRoute: ActivatedRoute,
  private router: Router
) {}



ngOnInit(){
    this.personalInfoForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', [
        Validators.required,
       // Validators.pattern(
       //   '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'
       // ),
      ],
    ],

    })
    // checks for value change in local storage
  this.localDraft = localStorage.getItem('STEP_1');
    // if value change, overwrite all values of form
    if (this.localDraft) {
      this.personalInfoForm.setValue(JSON.parse(this.localDraft));
    }

    this.personalInfoForm.valueChanges
      .pipe(filter(() => this.personalInfoForm.valid))
      .subscribe((val) => {
        localStorage.setItem('STEP_1', JSON.stringify(val));
      });
  }

  get fullname() {
    return this.personalInfoForm.get('fullname');
  }

  get email() {
    return this.personalInfoForm.get('email');
  }

  get phone() {
    return this.personalInfoForm.get('phone');
  }



  onNextStep(nextStep: number): void {
    this.step.emit(nextStep);
  }

  // TODO: set boolean property to true when the form is valid and clicked
  completeStep() {
    this.isComplete = true;
    this.stepsArray[0].isCompleted = true;
  }
}
