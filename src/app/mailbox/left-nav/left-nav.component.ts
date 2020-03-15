import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})

export class LeftNavComponent {
  @Input() navData: Array<string>;

  // constructor() { }

  // ngOnInit() {
  // }

}
