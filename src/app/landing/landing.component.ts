
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  launch(){
    if(sessionStorage.getItem('keyname')){
      this.router.navigate(['dashboard']);
    }else{
      this.router.navigate(['register']);
    }
    
  }
}
