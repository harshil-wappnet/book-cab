import { LowerCasePipe,DatePipe,UpperCasePipe,CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [LowerCasePipe,DatePipe,UpperCasePipe,CurrencyPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  today: number = Date.now();
}
