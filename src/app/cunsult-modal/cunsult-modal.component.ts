import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cunsult-modal',
  templateUrl: './cunsult-modal.component.html',
  styleUrls: ['./cunsult-modal.component.scss']
})
export class CunsultModalComponent implements OnInit {

  formDetalis : FormGroup;

  constructor(public modalRef: MatDialogRef<CunsultModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any,public fb : FormBuilder) { 
    this.formDetalis = this.fb.group({
      fullName : [''],
      email : [''],
      phoneNo : [''],
      appointment_date : [''] 
    });
  }

  ngOnInit() {
  }

  close(){
    this.modalRef.close();
  }

}
