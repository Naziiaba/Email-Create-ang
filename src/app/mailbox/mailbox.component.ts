import { Component, OnInit, ViewChild } from '@angular/core';
import { LeftNavComponent } from './left-nav/left-nav.component';

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
