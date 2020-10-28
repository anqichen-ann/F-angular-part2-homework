import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { studentReducer } from './store/reducers/students.reducer';


@NgModule({
  imports: [StoreModule.forRoot({students: studentReducer})],
  exports: [StoreModule]
})
export class AppStoreModule { }
