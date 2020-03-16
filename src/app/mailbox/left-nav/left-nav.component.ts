import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})

export class LeftNavComponent implements OnInit {

  /**
   * Parent to child comm: To send data from parent to child we can use Input decorator
   * Example:
   * <app-mailbox> (navLinks)
   *    <app-left-nav [navData] = "navLinks"><app-left-nav>
   * </app-mailbox>
   */
  @Input() navData: Array<string>;

  /**
   * Child --> Paretn comm:
   * <app-mailbox> (navLinks)
   *    <app-left-nav [navData] = "navLinks" (menuSelectionChange)
   * = "handleFunction()"><app-left-nav>
   * </app-mailbox>
   */
  @Output() menuSelectionChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onLinkClick(linkIndex: number) {
    this.menuSelectionChange.emit(linkIndex);
  }

}
