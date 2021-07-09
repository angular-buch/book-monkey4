import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[bmZoom]'
})
export class ZoomDirective {
  // ⚠️ Unterschied zum Buch: Initialwert angeben. Andernfalls muss das Property optional sein.
  @HostBinding('class.small') isZoomed: boolean = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isZoomed = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.isZoomed = false;
  }
}
