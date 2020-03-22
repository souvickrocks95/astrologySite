import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public pushRightClass: string;
   public radioList;
   opened = false;


  constructor(public router: Router) {
      this.router.events.subscribe(val => {
          if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
              this.toggleSidebar();
          }
      });
  }

  ngOnInit() {
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

  togglesideBar(){
      
  }

}
