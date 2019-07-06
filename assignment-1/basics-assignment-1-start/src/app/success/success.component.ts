import { Component } from '@angular/core';

@Component({
  selector: '<app-success>',
  templateUrl: './success.component.html'
})

export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    alert("Success.");
  }

}

