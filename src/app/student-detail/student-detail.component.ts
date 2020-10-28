import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectStudent } from '../store/selectors/students.selector';
import { Student } from '../student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.sass'],
})
export class StudentDetailComponent implements OnInit {
  student?: Student;
  errorMessage: string;

  constructor(private route: ActivatedRoute,
    private store: Store) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      const id = Number(paramMap.get('id'));
      this.store.select(selectStudent, {id}).subscribe( student => this.student = student);
    });
  }
}
