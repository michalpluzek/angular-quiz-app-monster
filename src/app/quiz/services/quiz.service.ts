import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuizStateInterface } from 'src/app/quiz/types/quiz-state.interface';
import mockData from '../data';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  state$ = new BehaviorSubject<QuizStateInterface>({
    questions: mockData,
  });

  constructor() {}
}
