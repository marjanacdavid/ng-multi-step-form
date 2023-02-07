import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, Validators } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepComponent } from './step/step.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { AddOnsComponent } from './add-ons/add-ons.component';
import { SummaryComponent } from './summary/summary.component';
import { SwitchToggleComponent } from './switch-toggle/switch-toggle.component';
import { RootFormComponent } from './root-form/root-form.component';
import { ThankYouComponent } from './thank-you/thank-you.component';


import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    StepComponent,
    PersonalInfoComponent,
    SelectPlanComponent,
    AddOnsComponent,
    SummaryComponent,
    SwitchToggleComponent,
    RootFormComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
