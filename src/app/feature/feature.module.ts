import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FeatureRoutingModule } from './feature-routing.module';
import { AnsSheetEvaluationMainComponent } from './ans-sheet-evaluation-main/ans-sheet-evaluation-main.component';
import { UploadButtonsComponent } from './upload-buttons/upload-buttons.component';


@NgModule({
  declarations: [
    AnsSheetEvaluationMainComponent,
    UploadButtonsComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    HttpClientModule
  ]
})
export class FeatureModule { }
