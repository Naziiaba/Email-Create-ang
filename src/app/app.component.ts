import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from './shared/user.service';
import { HttpClient } from '@angular/common/http';


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
  appUserData: any;

  constructor(
    private http: HttpClient,
    public userService: UserService) {
    // const dataObservable = this.http.get('https://jsonplaceholder.typicode.com/todos/1');
    // dataObservable.subscribe(response => {
    //   console.log(response);
    // });

    console.log('this is one');
    const responseData = this.getDataByXHR('https://jsonplaceholder.typicode.com/todos/1');
    console.log('this is three');
    this.processData(responseData);
  }

  processData(userData) {
    this.appUserData = [ ...userData, ...userData];
  }
  getDataByXHR(url: string) {
    let xhr = new XMLHttpRequest();
    // tslint:disable-next-line: only-arrow-functions
    xhr.onreadystatechange = function() {
      // it will call 4 times in this scenario
      if (this.readyState === 4 && this.status === 200) {
        //console.log(this.responseText);
        return this.responseText;
      }
    };
    xhr.open('GET', url);
    xhr.send();
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
