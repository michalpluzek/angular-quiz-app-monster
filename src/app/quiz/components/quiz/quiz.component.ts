import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { QuizService } from 'src/app/quiz/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styles: [],
})
export class QuizComponent implements OnInit {
  questionLength$: Observable<number>;
  currentQuestionIndex$: Observable<number>;
  showResults$: Observable<boolean>;
  correctAnswerCount$: Observable<number>;

  constructor(private quizService: QuizService) {
    this.questionLength$ = this.quizService.state$.pipe(
      map((state) => state.questions.length)
    );
    this.currentQuestionIndex$ = this.quizService.state$.pipe(
      map((state) => state.currentQuestionIndex + 1)
    );
    this.showResults$ = this.quizService.state$.pipe(
      map((state) => state.showResults)
    );
    this.correctAnswerCount$ = this.quizService.state$.pipe(
      map((state) => state.correctAnswerCount)
    );
  }

  ngOnInit(): void {}

  nextQuestion(): void {
    this.quizService.nextQuestion();
  }

  restart(): void {
    this.quizService.restart();
  }
}
