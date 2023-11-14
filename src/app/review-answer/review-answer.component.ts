import { Component } from "@angular/core";
import { DataService } from "src/shared/data.service";

@Component({
    selector: 'app-review-answer',
    templateUrl: './review-answer.component.html',
    styleUrls: ['./review-answer.component.css']
})

export class ReviewAnswerComponent {

    constructor(public dataService: DataService){}
}