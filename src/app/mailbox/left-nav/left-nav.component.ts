import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

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
  /**
   * Parent to child Data Binding => parent has some data and child can receive it
   * and use that to bind in views => Input.
   * Parent to child -Listener => action is happening in parent and child should
   *  listen it => use Lifecycle Hook called - ngOnChanges
   * Parent to child - Listener => take reference of child class in parent 
   * component and access required methods - ViewChild.
   * Child to Parent => child has some action, parent will get notified
   * using an event => Output decorator
   */
  constructor() { }

  ngOnChanges(changes) {
    if (changes.navData) {
      //this.processData();
    }
  }
  ngOnInit() {
    /**
     * process the input data and modify it according to the business requirement.
     */
    this.navData.push('middle');
  }

  onLinkClick(linkIndex: number) {
    this.menuSelectionChange.emit(linkIndex);
  }

  processData() {
    this.navData.push('last');
  }
}
