import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DataService } from 'src/shared/data.service';
import { QuestionDialog } from 'src/shared/question-dialog/add-question.component';

@Component({
    selector: 'app-form-builder',
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.css']
})

export class FormBuilderComponent implements OnInit {

  checked = false;
  indeterminate = false;
  animal = '';
  name = '';
  questions: any = '';

  constructor(
    public dialog: MatDialog,
    public dataServices: DataService
    ) {}

  ngOnInit(){
     this.questions = this.dataServices.questions;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(QuestionDialog, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe((result: any) => {
    //   console.log('The dialog was closed');
      this.animal = result;
    });
  }

  allAnswerGiven(){
    let flag = 0;
    if(this.dataServices.questions && this.dataServices.questions.length){
       this.dataServices.questions.forEach((element: any) => {
           if(!element.answered){
            flag++;
           }
       });
       if(!flag){
            this.dataServices.enableReviewButton = true;
        }
    }
  }

  handleAnswer(event: any, question: any) {
    question.answer = event;
    if(event == ''){
      question.answered = false;
    } else {
        question.answered = true;
    }
    this.allAnswerGiven();
  }

  handleCheckbox(event: any, item: any, question: any){
    if(event.checked){
       item.value = true;
    } else {
      item.value = false;
    }
    question.answered = true;
    this.allAnswerGiven();
  }
}