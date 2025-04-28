import { Component, OnInit } from '@angular/core';
import { TimeService } from '../services/time.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  showButton: boolean = true;
  

  constructor(
    public time: TimeService
  ) {}

  ngOnInit() {
    setInterval(() => {
      this.time.setTime();
    }, 1000);

    this.time.breakTimerEnded.subscribe(() => {
      this.showButton = true;
    });
  }

  startPomodoroSession() {
    this.time.startWorkTimer();
    this.showButton = false;
  }

}
