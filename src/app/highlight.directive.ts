import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

    constructor(private el: ElementRef) {
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.highlightMe(true);
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.highlightMe(false);
    }

    highlightMe(highlight: boolean) {
        if (highlight) {
            this.el.nativeElement.style.backgroundColor = 'lightyellow';
        } else {
            this.el.nativeElement.style.backgroundColor = 'white';
        }
    }


}
