import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.scss']
})
export class ProgramsListComponent implements OnInit {
  @Input('programs') programs;

  constructor() { }

  ngOnInit(): void {
  }

}
