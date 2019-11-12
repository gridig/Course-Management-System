import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cm-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['auth/login']);
  }

}
