import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import data from '../../data/progs';

@Component({
  selector: 'app-programs-app',
  templateUrl: './programs-app.component.html',
  styleUrls: ['./programs-app.component.scss']
})
export class ProgramsAppComponent implements OnInit {

  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  constructor() { }
  schoolsHash = {}
  schools = [];
  filteredSchools = [];
  searchedSchoolValue = '';
  showSchoolSelectList = false;

  citiesHash = {};
  cities = [];

  fieldsHash = {};
  fields = [];

  programs = ['Bachelor', 'Master', 'MBA', 'BHD'];
  languages = ['All', 'English', 'French'];
  prices = ['Price: low to high', 'Price: high to low'];



  ngOnInit(): void {
    const programs = data[2].data;
    programs.forEach(prog => {
      this.schoolsHash[prog.school.trim()] = true;
      this.citiesHash[prog.city.trim()] = true;
      this.fieldsHash[prog.type.trim()] = true;

    });
    this.schools = Object.keys(this.schoolsHash);
    this.cities = Object.keys(this.citiesHash);
    this.fields = Object.keys(this.fieldsHash);
    this.filteredSchools = [...this.cities];

    this.visiblePrograms = programs;

  }

  visiblePrograms = [];

  searchedLearnValue = ''

  handleSearch = () =>{

      const programs = data[2].data;
      this.visiblePrograms = programs.filter((program) => {
        if(this.searchedSchoolValue && !program.city.toLowerCase().includes(this.searchedSchoolValue.toLowerCase()) ) return false;

        if(this.searchedLearnValue && !(program.Name.toLowerCase().includes(this.searchedLearnValue.toLowerCase()))) return false;
        return true;
      });

  }

  handleFilter = () => {

    const programs = data[2].data;

    let filteredData = programs.filter(program => {
      const {city, type, school, Language, level} = program;
      if(this.selectedCities.length && this.selectedCities.indexOf(city.trim()) === -1) return false;
      if(this.selectedFields.length && this.selectedFields.indexOf(type.trim()) === -1) return false;
      if(this.selectedSchools.length && this.selectedSchools.indexOf(school.trim()) === -1) return false;
      if(this.type && this.type !== level) return false;
      if(this.language && this.language !== 'All'){
        if(this.language !== Language) return false;
      }
      return true;
    });

    if(this.price){
      if(this.price === 'Price: low to high') {
        this.visiblePrograms = filteredData.sort((a, b)=> parseInt(a.fee.replace(",", '')) - parseInt(b.fee.replace(",", '')))
      } else {
        this.visiblePrograms = filteredData.sort((a, b)=> parseInt(b.fee.replace(",", '')) - parseInt(a.fee.replace(",", '')))
      }
    } else {
      this.visiblePrograms = filteredData
    }



  }

  selectedCities = []
  setSelectedCities = (cities) => {
    this.selectedCities = cities;
  }

  selectedFields = [];
  setSelectedFields = (fields) =>{
    this.selectedFields = fields;
  }

  selectedSchools = [];
  setSelectedSchools = (schools) =>  {
    this.selectedSchools = schools;
  }

  type= '';
  setProgramType = (type) => {
    this.type = type;
  }


  language= '';
  setLanguage = (language) => {
    this.language = language;
  }

  price= '';
  setPrice = (price) => {
    this.price = price;
  }



  handleSchoolsSelectList = (e?) => {
    let searchValue
    if (e) {
      if (!this.showSchoolSelectList) this.openSchoolsListSelect();
      searchValue = e.target.value.toLowerCase();
      this.searchedSchoolValue = searchValue
    } else {
      searchValue = this.searchedSchoolValue.toLowerCase();
    }
    this.filteredSchools = this.cities.filter(school => school.toLowerCase().includes(searchValue));
  }

  closeSchoolsListSelect = (e?) => {
    this.showSchoolSelectList = false;
  }

  openSchoolsListSelect = () => {
    this.showSchoolSelectList = true;
  }

  toggleSchoolsListSelect = () => {
    if (this.showSchoolSelectList) {
      this.closeSchoolsListSelect();
    } else {
      this.openSchoolsListSelect();
    }
  }

  handleSchoolClick = (e) => {
    if (e.target.tagName !== 'LI') return;
    this.searchedSchoolValue = e.target.innerHTML;
    this.closeSchoolsListSelect();
    this.handleSchoolsSelectList();
  }

}
