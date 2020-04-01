import { Component, OnInit, ViewChild } from '@angular/core';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { Router, ActivationEnd } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-mailbox',
  templateUrl: 'mailbox.component.html',
  styleUrls: ['mailbox.component.css']
})
export class MailboxComponent {
  @ViewChild(LeftNavComponent) leftNavComponent: LeftNavComponent;
  navLinks = [
    'Compose',
    'Inbox',
    'Sent Items'
  ];

  constructor(private router: Router,
              public userService: UserService) {
    this.router.events.subscribe((event: ActivationEnd) => {
      if (event.snapshot && event.snapshot.params) {
        const paramID = event.snapshot.params;
      // load content for paramID
      }
    });
  }

  onSelectionChange(event) {

  }
  changeData() {
    this.navLinks = [
    'Compose1',
    'Inbox2',
    'Sent Items3'];
    setTimeout(() => {

    this.leftNavComponent.processData();
    }, 100);
  }
}
