import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from './shared/user.service';


/**
 * Component DECORATOR and METADATA
 * selector: this will act as an element tag to use this component.
 * templateUrl: is a VIEW for my component.
 * styleUrl: css styling
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  userTitle: string;
  constructor(
    private http: HttpClient,
    private userService: UserService) {
    // this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe
    // (response => {
    //   console.log(response);
    // });
    this.userTitle = this.userService.userData.title;
  }
}
/**
 * Data binding
 * 1. interpolation - component class to the view
 * 2. Event - from view to controller data binding
 * 3. Two-way data binding
 * *ngFor - iterates the array list and render the data on UI.
 * *ngIf - dynamically showing and hiding elements depending on variable
 *  value or expression output
 * *ngIf - dynamically adding/removing elements from DOM depending on
 * variable value or expression output
 */

export class AppComponent {
}
