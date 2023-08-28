import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { CheckboxQuestion } from './question-checkbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {
  // TODO: get from a remote source of question metadata
  getQuestions() {
    const questions: QuestionBase<string>[] = [
      new CheckboxQuestion({
        key: 'jobs',
        label: 'Checkbox quiz',
        options: [
          { key: 'archit', value: 'Architetto' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 're', value: 'resta' },
        ],
        correct: [{ key: 'great' }],
        order: 0,
      }),

      new DropdownQuestion({
        key: 'job',
        label: 'label lavoro',
        options: [
          { key: 'archit', value: 'Architetto' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 1,
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1,
      }),

      new TextboxQuestion({
        key: 'Surname',
        label: 'Surname name',
        value: 'Ts',
        required: true,
        order: 1,
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
