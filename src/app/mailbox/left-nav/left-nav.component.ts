import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css'],
  encapsulation: ViewEncapsulation.Emulated
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
   * using an event => Output decorator.
   * Communicating independent/unrelational components: by creating Service
   * (rx concepts) to be added in the service session.
   */

  /**
   * Constructor - executes first
   * It wont have data provided by parent.
   * Input properties will be undefined in this phase.
   */
  constructor() { }

  /**
   * This is first method to get called in lifecycle of component.
   * It will again get called whenever parent is changing value of data binding
   * to Input property of component.
   */

  ngOnChanges(changes) {
    if (changes.navData) {
      // this.processData();
    }
  }

  /**
   * Second method in lifecycle hook
   * So write all the execution of logic needed at the beginning of component load.
   */
  ngOnInit() {
    /**
     * process the input data and modify it according to the business requirement.
     */
  }
  /**
   * it detects changes that angular cannot.
   */
  // ngDoCheck() {
  // }
  
  
  /**
   * All external contents are checked for data binding and angular processing.
   */
  ngOnContentInit() {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterContentChecked() {
    
  }
   ngOnViewInit() {

   }

   ngOnViewChecked() {
   }

  /**
   * The last method to get called in component lifecycle.
   * Unsubscribe any events attached to observables.
   * This is required for the performance.
   */

  ngOnDestroy() {

  }

  onLinkClick(linkIndex: number) {
    this.menuSelectionChange.emit(linkIndex);
  }

  processData() {
    this.navData.push('last');
  }
}
