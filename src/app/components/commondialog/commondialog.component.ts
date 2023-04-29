import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-commondialog',
  templateUrl: './commondialog.component.html',
  styleUrls: ['./commondialog.component.scss'],
})
export class CommondialogComponent implements OnInit {
  item: any = {};
  constructor(
    public dialogRef: MatDialogRef<CommondialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.item = this.data;
  }

  close(msg: any) {
    this.dialogRef.close(msg);
  }
}
