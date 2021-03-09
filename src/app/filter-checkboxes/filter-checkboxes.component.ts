import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-checkboxes',
  templateUrl: './filter-checkboxes.component.html',
  styleUrls: ['./filter-checkboxes.component.scss']
})
export class FilterCheckboxesComponent implements OnInit {
  @Input('name') name;
  @Input('values') values;

  @Output() sendSelectedValues = new EventEmitter<string>();

  checkedValue = '';

  sendValue = ()=>{
    this.sendSelectedValues.emit(this.checkedValue);
  }




  radios = ['paris', 'mansoura', 'cairo']
  constructor() { }

  ngOnInit(): void {
  }

}
