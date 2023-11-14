import {Component, inject} from '@angular/core';
import {MatDialogRef, MatDialog} from '@angular/material/dialog';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent} from '@angular/material/chips';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { v4 as uuidv4 } from 'uuid';

export interface CheckBoxType {
  name: string;
  value: boolean;
}

@Component({
  selector: 'question-dialog',
  templateUrl: './add-question.component.html',
})
export class QuestionDialog {

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  checkboxOptions: CheckBoxType[] = [];
  announcer = inject(LiveAnnouncer);
  isCheckbox = false;

  questionForm: FormGroup;
  submitted = false;

  constructor(
    public dialogRef: MatDialogRef<QuestionDialog>,
     private fb: FormBuilder,
     public dataService: DataService,
     public dialog: MatDialog
    ) {}

  ngOnInit() {
    this.questionForm = this.fb.group({
      question: ['', Validators.required],
      types: ['', Validators.required]
    });
  }

  addField(){
    this.questionForm.addControl('checkboxOption', new FormControl(this.checkboxOptions, Validators.required))
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onChangeDemo(event: any){
    if(event === 'checkbox'){
      this.isCheckbox = true;
      this.addField();
    } else {
      this.isCheckbox = false;
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.checkboxOptions.push({name: value, value: false});
    }
    event.chipInput!.clear();
  }

  remove(option: CheckBoxType): void {
    const index = this.checkboxOptions.indexOf(option);
    if (index >= 0) {
      this.checkboxOptions.splice(index, 1);
      this.announcer.announce(`Removed ${option}`);
    }
  }

  get questionFormControl() {
    return this.questionForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (this.questionForm.valid) {
      this.dataService.questions.push({id: uuidv4(),title: this.questionForm.controls['question'].value, inputType: this.questionForm.controls['types'].value, checkboxOption: this.checkboxOptions, answer: '', answered: false});
       this.dataService.questions.forEach((element: any) => {
            if(element.inputType === 'checkbox'){
                element.checkboxOption.push({name: 'Other', value: false});
            }
       });
      this.dataService.enableReviewButton = false;
      this.dialog.closeAll();
    }
  }

}