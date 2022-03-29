import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { AnswerType } from 'src/app/quiz/types/answer.type';

@Component({
  selector: 'app-quiz-answer',
  templateUrl: './answer.component.html',
  styles: [],
})
export class AnswerComponent implements OnInit {
  @Input('answerText') answerTextProps!: string;
  @Input('index') indexProps!: number;
  @Output('selectAnswer') selectAnswerEvent = new EventEmitter<AnswerType>();
  answerLetter: string[] = ['a', 'b', 'c', 'd'];
  @HostListener('click') onClick() {
    this.selectAnswer();
  }

  constructor() {}

  ngOnInit(): void {
    if (!this.answerTextProps || this.indexProps === undefined) {
      throw new Error('Inputs in answer are not correct');
    }
  }

  selectAnswer(): void {
    this.selectAnswerEvent.emit(this.answerTextProps);
  }
}
