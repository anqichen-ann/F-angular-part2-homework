import { createReducer, on } from '@ngrx/store';
import { Student } from '../../student';
import { setStudents} from '../actions/student.action';

const initState: Student[] = [];

export const studentReducer = createReducer(
    initState,
    on(setStudents, ( (state, props) => props.students)),
)