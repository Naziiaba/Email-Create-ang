import { Component } from '@angular/core';


/**Component DECORATOR and METADATA
 * 
 * selector: this will act as an element tag to use this component.
 * templateUrl: is a VIEW for my component.
 * styleUrl: css styling
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
 * Data binding
 * 1. interpolation - component class to the view
 * 2. Event - from view to component class data binding
 */
export class AppComponent {
  title = 'Email-Create-ang';
  pageContent: string;

  constructor() {
    this.pageContent = 'The Content goes here';
  }

  /**
   * Lifecycle Hooks
   */
}
