import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-answer',
  templateUrl: './answer.component.html',
  styles: [],
})
export class AnswerComponent implements OnInit {
  @Input('answerText') answerTextProp: string = '';

  constructor() {}

  ngOnInit(): void {}
}
