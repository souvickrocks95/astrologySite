import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appHighlightMenu]'
})
export class HighlightMenuDirective {

  constructor(private render: Renderer2, private element: ElementRef, private route: Router) { }

  @HostListener('mouseover') onMouseOver() {
    if (this.route.url.indexOf(this.element.nativeElement.text.toLowerCase()) < 0)
      this.render.setStyle(this.element.nativeElement, 'color', '#c7bd35');
  }

  @HostListener('mouseout') onMouseOut() {
    if (this.route.url.indexOf(this.element.nativeElement.text.toLowerCase()) > 0){
      this.render.setStyle(this.element.nativeElement, 'color', '#c7bd35');
    }else{
      this.render.setStyle(this.element.nativeElement, 'color', 'white');
    }

  }


}
