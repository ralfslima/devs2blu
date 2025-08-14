import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[eventoMouse]'
})
export class EventoMouse {

  // Construtor
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Ao passar o mouse, muda a cor de fundo do elemento
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  }

  // Ao retirar o mouse, volta a cor original
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
  }
}
