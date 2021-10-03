import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

  skills = {
    html: "60%",
    css: "60%",
    js: "40%",
    angular: "40%",
    sass: "40%",
    php: "50%",
    mysql: "50%",
    laravel: "30%",
    symfony: "50%"
  }

  constructor() { }

  ngOnInit(): void {
    this.timeOut();
  }

  timeOut() {
    setTimeout(() => {
      document.getElementById("skillsHeader")?.classList.add('show');
    }, 300)

    setTimeout(() => {
      document.getElementById("skillsContainer")?.classList.add('show');
    }, 700)

    setTimeout(() => {
      document.getElementById("contentFront")?.classList.add('show');
    }, 1200)

    setTimeout(() => {
      document.getElementById("contentBack")?.classList.add('show');
    }, 1600)
  }

}
