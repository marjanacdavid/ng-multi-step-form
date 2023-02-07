import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepComponent } from './step/step.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';
import { AddOnsComponent } from './add-ons/add-ons.component';
import { SummaryComponent } from './summary/summary.component';
import { RootFormComponent } from './root-form/root-form.component';
import { ThankYouComponent } from './thank-you/thank-you.component';


const routes: Routes = [


  // {
  //   path: '', redirectTo: 'form', pathMatch: 'full'

  // },
  // {
  //       path: 'form',
  //       component: RootFormComponent
  //     },

  // {
  //   path: 'select-plan', pathMatch: 'full',
  //   component: SelectPlanComponent
  // },
  // {
  //   path: 'add-ons', pathMatch: 'full',
  //   component: AddOnsComponent
  // },
  // {
  //   path: 'summary', pathMatch: 'full',
  //   component: SummaryComponent
  // },
  // {
  //   path: 'thank-you', pathMatch: 'full',
  //   component: ThankYouComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
