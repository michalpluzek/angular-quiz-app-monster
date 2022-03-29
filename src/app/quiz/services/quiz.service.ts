import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { AnswerType } from 'src/app/quiz/types/answer.type';
import { QuestionInterface } from 'src/app/quiz/types/question.interface';
import { QuizStateInterface } from 'src/app/quiz/types/quiz-state.interface';
import mockData from '../data';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  initialState: QuizStateInterface = {
    questions: mockData,
    currentQuestionIndex: 0,
    showResults: false,
    correctAnswerCount: 0,
    answers: this.shuffleAnswers(mockData[0]),
    correctAnswer: mockData[0].correctAnswer,
  };
  state$ = new BehaviorSubject<QuizStateInterface>({ ...this.initialState });

  constructor() {}

  setState(partialState: Partial<QuizStateInterface>): void {
    this.state$.next({ ...this.state$.getValue(), ...partialState });
  }

  getState(): QuizStateInterface {
    return this.state$.getValue();
  }

  nextQuestion(): void {
    const state = this.getState();
    const showResults =
      state.currentQuestionIndex === state.questions.length - 1;
    const currentQuestionIndex = showResults
      ? state.currentQuestionIndex
      : state.currentQuestionIndex + 1;
    const answers = showResults
      ? []
      : this.shuffleAnswers(state.questions[currentQuestionIndex]);
    const correctAnswer = showResults
      ? null
      : state.questions[currentQuestionIndex].correctAnswer;

    this.setState({
      currentQuestionIndex,
      showResults,
      answers,
      correctAnswer,
    });
  }

  restart(): void {
    this.setState(this.initialState);
  }

  checkAnswer(answer: AnswerType): void {
    const state = this.getState();

    if (answer === state.correctAnswer) {
      this.setState({
        correctAnswerCount: ++state.correctAnswerCount,
      });
    }
    this.nextQuestion();
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
