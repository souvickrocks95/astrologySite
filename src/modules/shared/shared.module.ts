import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule, 
  MatTableModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatSelectModule, 
  MatCheckboxModule, 
  MatListModule, 
  MatMenuModule, 
  MatSidenavModule,
  MatFormFieldModule,
  MatPaginatorModule, 
  MatInputModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatSnackBarModule,
  MatAutocompleteModule,
  MatRadioModule,
  MatNativeDateModule
  
}from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTreeModule } from '@angular/material/tree';
import { CdkTableModule} from '@angular/cdk/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import {CdkStepperModule} from '@angular/cdk/stepper';
import { MatStepperModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatGridListModule,
    MatTabsModule,
    MatCardModule,
    MatNativeDateModule, 
    MatDatepickerModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatTreeModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    CdkTableModule,
    MatTooltipModule,
    MatSnackBarModule,
    CdkStepperModule,
    MatStepperModule,
    MatSortModule,
    MatRadioModule,,
	MatRippleModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatDatepickerModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatTreeModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    CdkTableModule,
    MatTooltipModule,
    MatSnackBarModule,
    CdkStepperModule,
    MatStepperModule,
    MatSortModule,
    MatRadioModule,
    MatTabsModule,
	MatRippleModule
  ]
})
export class SharedModule { }
