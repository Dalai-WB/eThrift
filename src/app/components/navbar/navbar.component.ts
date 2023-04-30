import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  selected: string = 'home';
  constructor(private router: Router, private routes: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd) {
        this.selected = event.url;
      }
    })
  }

  onItemClick(string: string) {
    this.selected = string;
  }
}
