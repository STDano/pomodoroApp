import { Injectable } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor() { }

  async workNotification() {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: "Work time completed!",
          body: "Break time starting now",
          id: 1,
          schedule: { at: new Date(Date.now() + 1000) },
          sound: "workalarm.mp3",
        },
      ],
    })

    await Haptics.impact({ style: ImpactStyle.Heavy });
  }

  async breakNotification() {
    await LocalNotifications.schedule({
      notifications: [
        {
          title: "Break time completed!",
          body: "Pomodoro Session has concluded",
          id: 1,
          schedule: { at: new Date(Date.now() + 1000) },
          sound: "breakalarm.mp3",
        },
      ],
    })

    await Haptics.impact({ style: ImpactStyle.Heavy });
  }
}
