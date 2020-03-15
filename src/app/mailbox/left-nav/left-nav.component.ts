import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})

export class LeftNavComponent implements OnInit {
  @Input() navData: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
