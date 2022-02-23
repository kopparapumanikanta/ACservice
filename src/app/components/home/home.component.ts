import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component'
import { NavhomeComponent } from '../navhome/navhome.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router){}
  afterlogout(pageName:string):void{
  this.router.navigate([`${pageName}`]);
  }
  ngOnInit(): void {
  }
}
