import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FIFACards';

  constructor(private router: Router) {
  }

  clickButton(path: string) {
        this.router.navigate([path]);
    }
  
}
