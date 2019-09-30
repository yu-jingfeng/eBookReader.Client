import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmDialogData } from 'src/app/domain/confirm-data.model';

@Component({
  selector: 'app-confirm-dialog',
  template: `
    <h2 mat-dialog-title>{{data.title}}</h2>
    <mat-dialog-content>
      {{data.content}}
    </mat-dialog-content>
    <mat-dialog-actions class="actions-right">
      <button mat-button mat-dialog-close>取消</button>
      <button mat-button mat-raised-button [mat-dialog-close]="true" color="primary">确定</button>
    </mat-dialog-actions>
  `,
  styles: [
    `.actions-right {
        justify-content: flex-end;
      }
    `
  ]
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) { }

  ngOnInit() {
  }

}
