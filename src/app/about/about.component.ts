import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.timeOut();
  }


  timeOut() {
    setTimeout(() => {
      document.getElementById("aboutContainer")?.classList.add('show');
    }, 100);

    setTimeout(() => {
      document.getElementById("aboutHeader")?.classList.add("show");
    }, 300);

    setTimeout(() => {
      document.getElementById("aboutContent")?.classList.add("show");
    }, 700);

    setTimeout(() => {
      document.getElementById("aboutBio")?.classList.add("show");
    }, 1200);

    setTimeout(() => {
      document.getElementById("aboutContact")?.classList.add("show");
    }, 1600);

  }

}
