import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppHover]'
})
export class AppHoverDirective {

  
  constructor(private elmnt : ElementRef, private rndr : Renderer) {

  }


  @HostListener('mouseover') onMouseOvr(){
   this.rndr.setElementStyle(this.elmnt.nativeElement,'backgroundColor',' #003366');
  // this.rndr.setElementStyle(this.elmnt.nativeElement,'color','black');
   this.rndr.setElementStyle(this.elmnt.nativeElement,'border-color',' rgba(0, 0, 0, 0.7)');

}

@HostListener('mouseout') onMouseOut(){
 this.rndr.setElementStyle(this.elmnt.nativeElement,'background-color','Transparent');
 this.rndr.setElementStyle(this.elmnt.nativeElement,'background-repeat','no-repeat');
 this.rndr.setElementStyle(this.elmnt.nativeElement,'color','#fff');
 this.rndr.setElementStyle(this.elmnt.nativeElement,'border-color','#ccc');
}

}
