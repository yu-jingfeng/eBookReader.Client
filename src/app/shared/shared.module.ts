import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatCardModule,
  MatTreeModule,
  MatMenuModule,
  MatInputModule,
  MatSnackBarModule,
  MatDialogModule,
  MatListModule,
  MatRippleModule
} from '@angular/material';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTreeModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatListModule,
    MatRippleModule,
    DragDropModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTreeModule,
    MatMenuModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatListModule,
    MatRippleModule,
    DragDropModule
  ],
  entryComponents: [
    ConfirmDialogComponent,
  ]
})
export class SharedModule { }
