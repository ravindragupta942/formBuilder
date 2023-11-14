import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  questions: any = [];
  enableReviewButton = false;

  constructor() { }
  
}