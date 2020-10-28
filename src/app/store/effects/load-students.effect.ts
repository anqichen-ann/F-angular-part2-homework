import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { StudentService } from 'src/app/student.service';
import { loadStudents, setStudents } from '../actions/student.action';

@Injectable()
export class LoadStudentsEffect {
    loadStudentsEffect$ = createEffect( () => {
        return this.actions$.pipe(
            ofType(loadStudents),
            mergeMap( () => this.studentService.getStudents().pipe(
                map( students => setStudents({ students })),
                catchError( () => EMPTY),
            ))

        );
    });

    constructor(private actions$: Actions,
        private studentService: StudentService) {

    }

}