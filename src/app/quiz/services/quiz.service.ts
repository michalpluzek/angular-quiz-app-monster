import { AnswerType } from './../types/answer.type';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuestionInterface } from 'src/app/quiz/types/question.interface';

import { QuizStateInterface } from 'src/app/quiz/types/quiz-state.interface';
import mockData from '../data';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  state$ = new BehaviorSubject<QuizStateInterface>({
    questions: mockData,
    currentQuestionIndex: 0,
    showResults: false,
    correctAnswerCount: 0,
    answers: this.shuffleAnswers(mockData[0]),
  });

  constructor() {}

  setState(partialState: Partial<QuizStateInterface>): void {
    this.state$.next({ ...this.state$.getValue(), ...partialState });
  }

  getState(): QuizStateInterface {
    return this.state$.getValue();
  }

  nextQuestion(): void {
    const state = this.getState();
    const newShowResults =
      state.currentQuestionIndex === state.questions.length - 1;
    const currentQuestionIndex = newShowResults
      ? state.currentQuestionIndex
      : state.currentQuestionIndex + 1;

    this.setState({
      currentQuestionIndex,
      showResults: newShowResults,
    });
  }

  shuffleAnswers(question: QuestionInterface): AnswerType[] {
    const unshuffledAnswers = [
      ...question.incorrectAnswers,
      question.correctAnswer,
    ];

    return unshuffledAnswers
      .map((unshuffledAnswer) => ({
        sort: Math.random(),
        value: unshuffledAnswer,
      }))
      .sort((a, b) => a.sort - b.sort)
      .map((el) => el.value);
  }
}
