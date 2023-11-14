import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//angular material component imports
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';


// created components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from 'src/shared/data.service';
import { QuestionDialog } from 'src/shared/question-dialog/add-question.component';
import { ReviewAnswerComponent } from './review-answer/review-answer.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';



@NgModule({
  declarations: [
    AppComponent,
    QuestionDialog,
    FormBuilderComponent,
    ReviewAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [
  ],
  providers: [DataService],
  schemas: [
  CUSTOM_ELEMENTS_SCHEMA
],
  bootstrap: [AppComponent],
})
export class AppModule { }
