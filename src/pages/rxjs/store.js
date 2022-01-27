import { BehaviorSubject } from 'rxjs';
import { request } from 'umi';

export const modalVisit$ = new BehaviorSubject(false);
export const type$ = new BehaviorSubject('add');
export const initialValues$ = new BehaviorSubject({});

export const dataSource$ = new BehaviorSubject([]);

export const doQuery = () => {
  request('/api/todos').then(({ data }) => {
    dataSource$.next(data);
  });
};
doQuery();
