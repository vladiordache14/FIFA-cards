import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{
  
  
  constructor(private router: Router) {
  }

  clickButton(path: string) {
        this.router.navigate([path]);
    }

    
    

}
