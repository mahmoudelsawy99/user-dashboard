import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverAnimation]'
})
export class HoverAnimationDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setOpacity(0.5);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setOpacity(1);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setOpacity(0.5);
  }

  private setOpacity(opacity: number) {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', opacity);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'opacity 0.3s');
  }
}
