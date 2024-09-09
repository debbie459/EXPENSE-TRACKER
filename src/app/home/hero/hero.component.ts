import { Component } from '@angular/core';
import { ChartComponent } from "./chart/chart.component";
import { MonthlyTotalComponent } from "./monthly-total/monthly-total.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ChartComponent, MonthlyTotalComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
