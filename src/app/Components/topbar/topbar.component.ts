import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  menuList: any[] = [];
  @ViewChild("menu") domReference;
  chooseMenu: String;
  constructor(private router: Router) {
    this.menuList = [
      {
        name: 'Home',
        path: 'home'
      },
      {
        name: 'Service',
        path: 'service'
      },
      {
        name: 'Review',
        path: 'review'
      },
      {
        name: 'FAQ',
        path: 'faq'
      },
      {
        name: 'Contact',
        path: 'contact'
      }
    ];
    this.chooseMenu = 'Home';
  }

  ngOnInit(): void {
  }

  menuChange(pathValue: any){
    this.router.navigate(['/layout/' + pathValue.path]);
    this.chooseMenu = pathValue.name;
  }

  onMouseOver(){
    console.log(this.domReference);
  }

}
