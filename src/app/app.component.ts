import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';
  name: string;
  password: string;
  error: string;
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  submit() {
    if (this.name !== 'admin') {
      this.error = 'Username is wrong';
    }

    if (this.password !== 'admin') {
      this.error = 'Username is wrong';
    }

    this.router.navigateByUrl('/home');
  }
}

// Login page with fields
// Validate the fields
// On right data, redirect to another page
