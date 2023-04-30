import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  wishlist: any[] = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe((val) => {
      this.wishlist = val.data;
      console.log(this.wishlist);
    });
  }
}
