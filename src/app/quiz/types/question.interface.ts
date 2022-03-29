import { AnswerType } from 'src/app/quiz/types/answer.type';

export interface QuestionInterface {
  question: string;
  correctAnswer: AnswerType;
  incorrectAnswers: AnswerType[];
}
