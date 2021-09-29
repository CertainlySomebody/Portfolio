import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.timeOut();
  }

  timeOut() {
    setTimeout(() => {
      document.getElementById("skillsContainer")?.classList.add('show');
    }, 500)
  }

}
