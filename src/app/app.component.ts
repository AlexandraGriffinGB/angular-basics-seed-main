import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  message!: string;
  newMessage!: string;
  // ngOnInit is used instead of a constructor to say this.message = 'Hello World!'
  ngOnInit() {
    this.message = 'Hello World!';
  }

  handleClick(event: Event) {
    console.log(event);
  }
}
