import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  wishlist: any[] = [];
  loading: boolean = false;

  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.loading = true;
    this.userService.getWishlist('644de117971b26c4ed6a55f3').subscribe((val) => {
      this.loading = false;
      this.wishlist = val.data;
      console.log(this.wishlist);
      this.wishlist.map((elm) => {
        this.userService.findOne(elm.id).subscribe((val) => {
        })
      })
    });
  }

  onCloseClick(i: number) {
    this.wishlist.splice(i, 1);
  }
}
