import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private _paragrah: ElementRef) { }

  @HostListener('window:keyup', ['$event']) windowClick($event) {
    switch ($event.key) {
      case 'ArrowUp':
        this._changeColor('red');
        break;
      case 'ArrowRight':
        this._changeColor('yellow');
        break;
      case 'ArrowDown':
        this._changeColor('green');
        break;
      case 'ArrowLeft':
        this._changeColor('blue');
        break;
      default:
        return;
    }
  }

  private _changeColor(color: string): void {
    this._paragrah.nativeElement.style.color = color;
  }
}
