import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  alert:boolean=false
  constructor() { }
  ngOnInit(): void {
    this.alert=false
  }
  onsubmit(){
    this.alert=true
  }
}