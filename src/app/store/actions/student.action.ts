import { createAction, props } from '@ngrx/store';
import { Student } from 'src/app/student';

export const setStudents = createAction('SET_STUDENT', props<{ students: Student[]}>());

export const loadStudents = createAction('LOAD_STUDENTS');

