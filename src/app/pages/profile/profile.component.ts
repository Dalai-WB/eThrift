import { Component, Inject } from '@angular/core';
import { Dialog, DIALOG_DATA } from '@angular/cdk/dialog';
import { AddDialogComponent } from 'src/app/components/add-dialog/add-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(private dialog: MatDialog) {}
  showOrder(orderId: any) {
    let dialogRef = this.dialog.open(AddDialogComponent, {
      height: 'auto',
      width: '1200px',
      data: { data: 'panda' },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
