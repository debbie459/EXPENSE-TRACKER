import { Component, OnInit } from '@angular/core';
import { ExpensesServiceService } from '../../../expenses-service.service';
import { ExpensesModel } from '../../../model/expenses-model';

@Component({
  selector: 'app-monthly-total',
  standalone: true,
  imports: [],
  templateUrl: './monthly-total.component.html',
  styleUrl: './monthly-total.component.css'
})
export class MonthlyTotalComponent implements OnInit {

  data : ExpensesModel[] = []
  totalAmount = 0

  constructor(private expensesService : ExpensesServiceService){
    
  }

  ngOnInit(): void {
    this.loadChartData()
  }

  loadChartData(){
    this.expensesService.getExpenses().subscribe({
      next: (dataI) => {
        this.data = dataI
        console.log("Data: ")
        console.log(this.data)
        
        for(let i = 0;  i<this.data.length; i++){
          this.totalAmount += this.data[i].amount
        }
        
        console.log(`Total amount is : ${this.totalAmount}`)
      }
    })

  }

  getTotalAmount(){
    const amountElement = document.getElementById('amount') as HTMLParagraphElement

    if (amountElement){

    }
  }

}
