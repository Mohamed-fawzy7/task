import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filter-search-input',
  templateUrl: './filter-search-input.component.html',
  styleUrls: ['./filter-search-input.component.scss']
})
export class FilterSearchInputComponent implements OnInit {
  @Input('values') values;
  @Input('name') name;

  @Output() sendSelectedValues = new EventEmitter<string[]>();

  sendValue = () => {
    this.sendSelectedValues.emit(this.selectedValues);
  }

  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  selectOpened = false;
  selectedValues = [];

  addValue(e) {
    const value = e.target.innerHTML;
    if(this.selectedValues.indexOf(value) === -1) {
      this.selectOpened = false;
      this.selectedValues.push(value);
    }
    this.selectOpened = false;
    this.sendValue();
  }

  removeValue(value){
    this.selectedValues= this.selectedValues.filter((val) => val !== value);
    this.sendValue();
  }

  toggleSelect = () => {
    this.selectOpened = !this.selectOpened;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
