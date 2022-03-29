import { Component, OnInit } from '@angular/core';

import { QuizService } from 'src/app/quiz/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styles: [],
})
export class QuizComponent implements OnInit {
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {}
}
