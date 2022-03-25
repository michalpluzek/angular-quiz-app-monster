import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AnswerComponent } from 'src/app/quiz/components/answer/answer.component';
import { QuestionComponent } from 'src/app/quiz/components/question/question.component';
import { QuizComponent } from 'src/app/quiz/components/quiz/quiz.component';

const routes: Routes = [
  {
    path: '',
    component: QuizComponent,
  },
];

@NgModule({
  declarations: [QuizComponent, QuestionComponent, AnswerComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class QuizModule {}
