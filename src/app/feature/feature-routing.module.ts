import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnsSheetEvaluationMainComponent } from './ans-sheet-evaluation-main/ans-sheet-evaluation-main.component';



const routes: Routes = [
  {
    path:'', 
    component: AnsSheetEvaluationMainComponent,
  },
  // {
  //   path:'landing', 
  //   component: LandingMainPageComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
