import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appFont]'
})
export class FontDirective {

  
  constructor(private elmnt : ElementRef, private rndr : Renderer) {}


  @HostListener('mouseover') onMouseOvr(){
   this.rndr.setElementStyle(this.elmnt.nativeElement,'color','#80bfff');
   this.rndr.setElementStyle(this.elmnt.nativeElement,'text-decoration','underline');
}

@HostListener('mouseout') onMouseOut(){
  this.rndr.setElementStyle(this.elmnt.nativeElement,'color','white');
  this.rndr.setElementStyle(this.elmnt.nativeElement,'text-decoration','blink');
}

}
