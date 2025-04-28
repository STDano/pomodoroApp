import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  currentTime: string = '';
  timerDisplay: string = '';
  private intervalId: any;
  private endTime: number = 0;
  private timeLeftInMilliseconds: number = 0;

  breakTimerEnded = new Subject<void>();

  constructor(
  ) { }

  setTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const hoursStr = hours.toString().padStart(2, '0');
    this.currentTime = `${hoursStr}:${minutes} ${ampm}`;
    console.log(this.currentTime);
  }


  startWorkTimer() {
    this.endTime = new Date().getTime() + 25.033333333333335 * 60 * 1000;

    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      this.timeLeftInMilliseconds = this.endTime - now;

      if (this.timeLeftInMilliseconds > 0) {
        this.updateTimer(Math.floor(this.timeLeftInMilliseconds / 1000));
      } else {
        clearInterval(this.intervalId);
        this.startBreakTimer();
      }
    }, 1000);
  }

  startBreakTimer() {
    this.endTime = new Date().getTime() + 5.033333333333335 * 60 * 1000;

    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      this.timeLeftInMilliseconds = this.endTime - now;

      if (this.timeLeftInMilliseconds > 0) {
        this.updateTimer(Math.floor(this.timeLeftInMilliseconds / 1000));
      } else {
        clearInterval(this.intervalId);
        this.breakTimerEnded.next();
      }
    }, 1000);
  }

  updateTimer(timeLeftInSeconds: number) {
    const minutes = Math.floor(timeLeftInSeconds / 60);
    const seconds = timeLeftInSeconds % 60;

    this.timerDisplay = `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}
