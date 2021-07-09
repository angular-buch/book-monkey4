import { Directive, OnInit, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[bmDelay]'
})
export class DelayDirective implements OnInit {
  @Input() bmDelay: number = 100;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }, this.bmDelay);
  }

}
