import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appResponsiveMenu]'
})
export class ResponsiveMenuDirective implements OnInit {

  @Input() sidebar: HTMLElement;
  @Input() blocking: HTMLElement;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.renderer.listen(this.element.nativeElement, 'click', () => {
      if (this.element.nativeElement.classList.contains('is-active')) {
        this.closeMenu();
      } else {
        this.renderer.addClass(this.element.nativeElement, 'is-active');
        this.renderer.addClass(this.sidebar, 'header__sidebar--active');
        this.renderer.addClass(this.blocking, 'header__block');
      }
    });

    this.renderer.listen(this.blocking, 'click',  () => {
      this.closeMenu();
    });
  }

  closeMenu() {
    this.renderer.removeClass(this.element.nativeElement, 'is-active');
    this.renderer.removeClass(this.sidebar, 'header__sidebar--active');
    this.renderer.removeClass(this.blocking, 'header__block');
  }
}
