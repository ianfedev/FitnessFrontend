import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appResponsiveMenu]'
})
export class ResponsiveMenuDirective implements OnInit {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    // const element = this.element.nativeElement.getElementById('header');

    this.renderer.listen(this.element.nativeElement, 'click', () => {
      if (this.element.nativeElement.classList.contains('is-active')) {
        this.renderer.removeClass(this.element.nativeElement, 'is-active');
      } else {
        this.renderer.addClass(this.element.nativeElement, 'is-active');
      }
    });
  }
}
