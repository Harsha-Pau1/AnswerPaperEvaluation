import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnsSheetEvaluationMainComponent } from './feature/ans-sheet-evaluation-main/ans-sheet-evaluation-main.component';
import { UploadButtonsComponent } from './feature/upload-buttons/upload-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    AnsSheetEvaluationMainComponent,
    UploadButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
