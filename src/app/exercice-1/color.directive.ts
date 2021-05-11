import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private paragrah: ElementRef) { }

  @HostListener('window:keyup', ['$event']) windowClick($event) {
    switch ($event.key) {
      case 'ArrowUp':
        this.changeColor('red');
        break;
      case 'ArrowRight':
        this.changeColor('yellow');
        break;
      case 'ArrowDown':
        this.changeColor('green');
        break;
      case 'ArrowLeft':
        this.changeColor('blue');
        break;
      default:
        return;
    }
  }

  private changeColor(color: string): void {
    this.paragrah.nativeElement.style.color = color;
  }
}
