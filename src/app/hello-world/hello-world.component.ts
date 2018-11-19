import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  // template: '<h1> Hello from Component </h1>',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  message = 'hello there';
  constructor() { }

  ngOnInit() {
  }

}
