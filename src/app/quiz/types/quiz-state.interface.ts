import { QuestionInterface } from 'src/app/quiz/types/question.interface';

export interface QuizStateInterface {
  questions: QuestionInterface[];
  currentQuestionIndex: number;
  showResults: boolean;
  correctAnswerCount: number;
}
