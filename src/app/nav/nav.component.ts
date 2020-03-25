import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public pushRightClass: string;
   public radioList;
   public navMenu ;
   opened = false;


  constructor(public router: Router, public modal : MatDialog) {
      this.router.events.subscribe(val => {
          if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
              this.toggleSidebar();
          }
      });
  }

  ngOnInit() {
      this.navMenu = [{
          name : "Home",
          url : "home"
      },{
        name : "Articles",
        url : "articles"
      },{
        name : "Consultation",
        url : "consultation"
      },{
        name : "Reviews",
        url : "reviews"
      },{
        name : "FAQs",
        url : "faq"
      },{
        name : "Contact Us",
        url : "contact"
      },{
        name : "My Account",
        url : "account"
      }];
      this.radioList = [{
        name : "Home",
        icon : "home",
        url : ""
    },{
        name : "Article",
        icon : "font_download",
        url : ""
    },{
        name : "Consultation",
        icon : "supervisor_account",
        url : ""
    },{
        name : "Contact us",
        icon : "contact_support",
        url : ""
    }];
      this.pushRightClass = 'push-right';
  }

  isToggled(): boolean {
      const dom: Element = document.querySelector('body');
      return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
      const dom: any = document.querySelector('body');
      dom.classList.toggle(this.pushRightClass);
  }

  onLoggedout() {
      localStorage.removeItem('isLoggedin');
      this.router.navigate(['/login']);
  }

  adminlogin(){
      //localStorage.setItem('isLoggedin','true');
      this.router.navigate(['/admin']);
  }

  onMenuClick(url){
    if (url == 'account'){
        this.modal.open(LoginComponent, {
            height: '50%',
            width: '33%',
            disableClose: false
         });
    }
  }

}
