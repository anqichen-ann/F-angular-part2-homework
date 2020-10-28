import { Student } from 'src/app/student';

interface AppState {
    students: Student[]
}
export const selectStudents = (state: AppState) => state.students;

export const selectStudent = (state : AppState, props : {id: number}) => {
    return state.students.find( student => student.id === props.id) || {id: 0, name: "not found", age: 0};
}