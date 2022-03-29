import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { QuizService } from 'src/app/quiz/services/quiz.service';
import { AnswerType } from 'src/app/quiz/types/answer.type';
import { QuestionInterface } from 'src/app/quiz/types/question.interface';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './question.component.html',
  styles: [],
})
export class QuestionComponent implements OnInit {
  question$: Observable<QuestionInterface>;
  answer$: Observable<AnswerType[]>;

  constructor(private quizService: QuizService) {
    this.question$ = this.quizService.state$.pipe(
      map((state) => state.questions[state.currentQuestionIndex])
    );
    this.answer$ = this.quizService.state$.pipe(map((state) => state.answers));
  }

  ngOnInit(): void {}
}
