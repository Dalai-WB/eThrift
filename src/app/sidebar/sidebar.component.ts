import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {

  constructor(private userService: UserServiceService) {

  }
  ngOnInit(): void {
    this.userService.findOne("644cb46ace8b59cb2b0f1844").subscribe(
      (val: any) => {
        console.log(val)
      }
    );
  }



}
