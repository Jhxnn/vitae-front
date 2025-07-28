// src/app/shared/notification/notification.component.ts
import { Component, OnInit } from '@angular/core';
import { Notification, NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
})
export class NotificationComponent implements OnInit {
  notification: Notification | null = null;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.notification$.subscribe(notification => {
      this.notification = notification;

      setTimeout(() => {
        this.notification = null;
      }, 3000); // some após 3 segundos
    });
  }
}
