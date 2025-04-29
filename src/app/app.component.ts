import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { App } from '@capacitor/app';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private platform: Platform) {
  }

  ngOnInit() {
    this.setupNotificationChannels();
    this.exitApp();
  }

  exitApp() {
    this.platform.ready().then(() => {
      App.addListener('backButton', ({ canGoBack }) => {
        if (!canGoBack) {
          App.exitApp();
        }
      });
    });
  }

  setupNotificationChannels = async () => {
    await LocalNotifications.createChannel({
      id: "work-channel",
      name: "Work Channel Notification",
      sound: "workalarm",
      importance: 5,
      visibility: 1,
    });
  
    await LocalNotifications.createChannel({
      id: "break-channel",
      name: "Break Channel Notification",
      sound: "breakalarm",
      importance: 4,
      visibility: 1,
    });
  };
}
