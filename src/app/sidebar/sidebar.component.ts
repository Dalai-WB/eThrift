import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  imagePath: any;
  name: any;

  constructor(private userService: UserServiceService,
    private domSanitizer: DomSanitizer) {
  }
  ngOnInit(): void {
    this.userService.findOne("644cc7389206578cd161bf02").subscribe(
      (val: any) => {
        console.log(val);
        if (val.data) {
          const data = val.data;
          this.imagePath = this.domSanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
            + data.picture);
          this.name = data.fname;
        }
      }
    );
  }



}
