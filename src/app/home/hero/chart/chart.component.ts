import { AfterViewInit, Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'chart.js'
import { ExpensesServiceService } from '../../../expenses-service.service';
import { ExpensesModel } from '../../../model/expenses-model';
Chart.register(...registerables)

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
 })
 
export class ChartComponent implements OnInit, AfterViewInit{

  chartData : ExpensesModel[] = [];
  chartInstance : Chart | undefined
  

  constructor(private expensesService : ExpensesServiceService){
    
  }

  ngOnInit(): void {
   this.loadChartData()
  }

  ngAfterViewInit(): void {
    this.renderChart()
  }
  
  loadChartData(){
    this.expensesService.getExpenses().subscribe({
      next: (data) => {
        this.chartData = data
        console.log("Chart Data: ")
        console.log(this.chartData)
      }
    })

  }

  
  renderChart(){
    const chartElement = document.getElementById('myChart') as HTMLCanvasElement | null
    const chartLabels = this.chartData.map((data)=> data.day) //chartLabels is now an array that holds the values of the days
    const chartAmount = this.chartData.map((data)=>data.amount) //chartAmpunt is now an array that holds the values of the amounts
    if (chartElement){
      this.chartInstance = new Chart(chartElement, {
        type: 'bar',
        data: {
          labels: chartLabels,
          datasets : [{
            label: 'Expenses',
            
            data: chartAmount,
            backgroundColor : 'hsl(10, 79%, 65%)',
            hoverBackgroundColor : 'hsl(186, 34%, 60%)',
            borderWidth : 1,
            borderRadius: 4,
            barPercentage: 1
            
          }]
        },

        options: {
          responsive: true,             // Ensure the chart is responsive
          maintainAspectRatio: false,   // Allow the aspect ratio to be adjusted
          aspectRatio: 2,           
          scales: {
            x: {
              
              grid: {
                display: false, // Removes grid lines on the x-axis
              },
              border:{
                display: false
              },
              
            },


            y: {
              grid: {
                display: false, // Removes grid lines on the y-axis
              },
              border:{
                display: false
              },
              ticks : {
                display: false
              }
            }
          },

          plugins:{
            legend:{
              display:false
            }
          }
        }
      })
    }

    
    
   }
 }


