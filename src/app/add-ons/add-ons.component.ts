import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AddOn } from 'src/app/models/add-on.model';


@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.css']
})
export class AddOnsComponent {

  @Output() step = new EventEmitter<number>();

  @Output() name = new EventEmitter<string>();
  @Output() price = new EventEmitter<string>();
  @Output() extras = new EventEmitter<any[]>();

  addOnArray: any[] = [];

  // from root-form component
  @Input() monthly!: boolean;





  addOns: AddOn[] = [
    {
      id: 1,
      name: 'Online service',
      description: 'Access to multiplayer games',
      price: 1,
      yearlyPrice: 10,
      isActive: false
    },
    {
      id: 2,
      name: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: 2,
      yearlyPrice: 20,
      isActive: false
    },
    {
      id: 3,
      name: 'Customizable Profile',
      description: 'Custom theme on your profile',
      price: 2,
      yearlyPrice: 20,
      isActive: false
    },
  ];

  isComplete: boolean = false;

  @Input() stepsArray: any;

  constructor() {}

  ngOnInit(): void {}

  onPrevStep(prevStep: number): void {
    this.step.emit(prevStep);
  }

  onNextStep(nextStep: number): void {
    this.step.emit(nextStep);
  }

  pushToExtras(index: number, event: any) {
    const checked = event.target.checked;
   // console.log(checked);
    if (checked) {
      this.addOns.map((_item, i) => {
        if (index === i) {
          this.addOnArray.push({
            name: _item.name,
            price: this.monthly === true ? _item.price : _item.yearlyPrice,
          });
          console.log(this.addOnArray);
          this.extras.emit(this.addOnArray);
        }
      });
    } else {
      this.addOns.map((_item, i) => {
        if (index === i) {
          // delete this.addOnArray[index];

          this.addOnArray.filter((val) => {
            if (val.name !== _item.name) {
              this.addOnArray.splice(index, 1);
            } else {
              this.addOnArray = [];
            }
          })

          this.extras.emit(this.addOnArray);
          //console.log(this.addOnArray)
        }
      });
    }
  }
  completeStep() {
    this.isComplete = true;
    this.stepsArray[2].isCompleted = true;
  }

}
