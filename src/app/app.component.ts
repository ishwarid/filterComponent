import { Component , ViewEncapsulation, OnInit} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {ThemePalette} from '@angular/material/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
interface Options {
  value: string;
  viewValue: string;
}
interface Days {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  color: ThemePalette = 'primary'
  panelOpenState = false;
  showSingleDate: boolean = false;
  showRangeDate: boolean = false;
  showSingleInput: boolean = false;
  showRangeInput: boolean = false;
  isShowData: boolean = false;
  filterData: FormGroup;
isDays:boolean= false
 
options:Options[] = [
    {value: 'empty', viewValue: 'Is Empty'},
    {value: 'between', viewValue: 'In between'},
    {value: 'grater', viewValue: 'Is Grater Than'},
    {value: 'equal', viewValue: 'Is Equal To'},
    {value: 'less', viewValue: 'Is Less Than'},
    {value: 'last', viewValue: 'Is In The Last'},
  ];
 
days:Days[] = [
    {value: 'day', viewValue: 'days'},
    {value: 'month', viewValue: 'months'},
    {value: 'year', viewValue: 'years'},
   
  ];
 
constructor(private formBuilder:FormBuilder){

}
ngOnInit(){
  // console.log(this.selectedDate);
  this.filterData =  this.formBuilder.group({
    dateType: ['empty', null],
    firstDate:[new Date()],
    secondDate:[new Date()],
    amountType:['empty',null],
    daysInput:['', [ Validators.pattern('^[0-9]*$') ]],
    daysType:['day', null],
    firstAmt: ['', [ Validators.pattern('^[0-9]*$') ],],
    secondAmt:['', [ Validators.pattern('^[0-9]*$') ],],
    timeZone:['', null]
 })
  
}

selectDate(value:string) {
  if(value === 'grater' || value === 'equal' || value === 'less'){
    this.showSingleDate = true;
    this.showRangeDate = false;
    this.isDays = false;
  } else if(value === 'between'){
    this.showRangeDate = true
    this.showSingleDate = true;
    this.isDays = false;
  }else if(value === 'empty'){
    this.showSingleDate = false;
    this.showRangeDate = false;
    this.isDays = false;
  }else if(value === 'last'){
    this.showSingleDate = false;
    this.showRangeDate = false;
    this.isDays = true;
  }
}
selectAmount(value:string) {
 
  if(value === 'grater' || value === 'equal' || value === 'less'){
    this.showSingleInput = true;
    this.showRangeInput = false;
  } else if(value === 'between'){
    this.showRangeInput = true
    this.showSingleInput = true;
  }else if(value === 'empty'){
    this.showSingleInput = false;
    this.showRangeInput = false;
  }
}

getErrorMessage() {
  if(this.filterData.controls['secondAmt'].hasError('pattern') ||this.filterData.controls['daysInput'].hasError('pattern') ) {
    return 'Please enter only number'
  }
  return (this.filterData.controls['firstAmt'].hasError('pattern')) ?  'Please enter only number':''
}

filterSubmit(){
  if(this.filterData.touched){
    this.isShowData = !this.isShowData
  }
  
 
  
}
clearForm(){
  this.isShowData = !this.isShowData
  this.showSingleInput = false;
  this.showRangeInput = false;
  this.isDays = false;
  this.showSingleInput = false;
  this.showRangeInput = false;
  this.filterData.reset()
  this.filterData.patchValue({
    dateType: 'empty',
    amountType:'empty',
    daysType:'day',
  })
  
  
}
}
