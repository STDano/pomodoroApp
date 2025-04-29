import { Injectable } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import { Haptics } from '@capacitor/haptics';

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
          channelId: "break-channel",
          sound: "workalarm",
        },
       ],
    });

    await Haptics.vibrate({ duration: 3000 });
  }

  async breakNotification() {
      await LocalNotifications.schedule({
        notifications: [
          {
            title: "Break time completed!",
            body: "Pomodoro Session has concluded",
            id: 2,
            channelId: "break-channel",
            sound: "breakalarm",
          },
        ],
      });

      await Haptics.vibrate({ duration: 3000 });
  }
}
