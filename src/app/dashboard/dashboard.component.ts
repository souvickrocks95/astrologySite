import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CunsultModalComponent } from '../cunsult-modal/cunsult-modal.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openConsult(){
    this.dialog.open(CunsultModalComponent, {
      height: '67%',
      width: '33%',
      disableClose: false
   });
  }

}
