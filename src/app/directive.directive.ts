import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {
  @HostBinding('class.open') isOpen = false;

  constructor() { }

  @HostListener('click') toggleOpen(): void {
     this.isOpen = !this.isOpen;
  }

}
