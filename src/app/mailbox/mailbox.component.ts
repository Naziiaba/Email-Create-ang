import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mailbox',
  templateUrl: 'mailbox.component.html',
  styleUrls: ['mailbox.component.css']
})
export class MailboxComponent {
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
  }
}
