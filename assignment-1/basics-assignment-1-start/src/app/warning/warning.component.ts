import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<app-warning>',
  templateUrl: './warning.component.html'
})

export class WarningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // alert("Warning!");  // this is a test. Works.
  }

}

