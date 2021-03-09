import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-program',
  templateUrl: './single-program.component.html',
  styleUrls: ['./single-program.component.scss']
})
export class SingleProgramComponent implements OnInit {
  @Input('program') program;
  constructor() { }

  ngOnInit(): void {
  }

}
