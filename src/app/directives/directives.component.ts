import { NgClass,NgStyle } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgClass,NgStyle],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DirectivesComponent implements OnInit, OnDestroy {
  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}
  isActive: boolean = false;
  isVisible: boolean = true;
  timeInSecond: number = 1;
  name: string[] = ['harshil', 'rahul', 'naitik', 'jeet', 'jay'];
  isRed: boolean = true;
  private timerInterval: any;
  changeActiveStatus() {
    this.isActive = !this.isActive;
  }

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  startTimer() {
    debugger;
    this.ngZone.runOutsideAngular(() => {
      this.timerInterval = setInterval(() => {
        this.ngZone.run(() => {
          this.timeInSecond = (this.timeInSecond + 1) % 13;
          this.cdr.markForCheck(); // Manually trigger change detection
        });
      }, 1000);
    });
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  getTrafficLightColor(index: number): string {
    if (index === 0 && this.timeInSecond < 5) return 'red';
    if (index === 1 && this.timeInSecond >= 10) return 'yellow';
    if (index === 2 && this.timeInSecond >= 5 && this.timeInSecond < 10)
      return 'green';
    return 'black';
  }

  changeColor(){
    this.isRed = !this.isRed;
  }
}
