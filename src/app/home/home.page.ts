import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  currentTime: string = '';

  constructor() {}

  ngOnInit() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const hoursStr = hours.toString().padStart(2, '0');
    this.currentTime = `${hoursStr}:${minutes}:${seconds} ${ampm}`;
    console.log(this.currentTime);
  }

  

}
