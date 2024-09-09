import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ExpensesModel } from './model/expenses-model';

@Injectable({
  providedIn: 'root'
})
export class ExpensesServiceService {

  constructor() { }

  
  expensesUrl = 'assets/data/data.json'
  private http = inject(HttpClient)

  getExpenses(){
    return this.http.get<ExpensesModel[]>(this.expensesUrl)
  }
}
