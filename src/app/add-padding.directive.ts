import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appAddPadding]'
})
export class AddPaddingDirective {

    constructor(private el: ElementRef) {
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.togglePadding(true);
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.togglePadding(false);
    }

    togglePadding(addPadding: boolean) {
        if (addPadding) {
            this.el.nativeElement.style.padding = '1rem';
        } else {
            this.el.nativeElement.style.padding = '0';
        }
    }

}
