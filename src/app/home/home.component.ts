import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  element: any;

  ngOnInit(): void {
    this.timeOut();
  }

  timeOut() {
    setTimeout(() => {
      document.getElementById("presentationImage")?.classList.add('show');
    }, 600);
  }


}
