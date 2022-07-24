import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnsSheetEvaluationMainComponent } from './feature/ans-sheet-evaluation-main/ans-sheet-evaluation-main.component';

const routes: Routes = [
  {
    path:'', 
    component: AnsSheetEvaluationMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
