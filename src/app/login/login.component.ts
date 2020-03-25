import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  formDetalis : FormGroup;

  constructor(public modalRef: MatDialogRef<LoginComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb : FormBuilder,
    public router : Router) { 
    this.formDetalis = this.fb.group({
      userName : [''],
      Password : ['']
    });
  }

  ngOnInit() {
  }

  close(){
    this.modalRef.close();
  }

  register(){
    this.modalRef.close();
    this.router.navigate(['/register']);
  }
 
}
