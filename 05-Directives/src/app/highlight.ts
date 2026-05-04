import { Directive, ElementRef, HostListener, inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class Highlight {
  @Input() appHighlight = 'yellow';
  
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(
      this.el.nativeElement, 'backgroundColor', this.appHighlight
    );
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeStyle(
      this.el.nativeElement, 'backgroundColor'
    );
  }

}
