import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewAnswerComponent } from './review-answer/review-answer.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

const routes: Routes = [
  { path: '', component: FormBuilderComponent },
  { path: 'answer', component: ReviewAnswerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
