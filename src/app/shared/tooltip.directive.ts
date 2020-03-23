import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appTooltip]'
})

export class AppTooltipDirective {
    constructor(private elementRef: ElementRef) {
        console.log(elementRef.nativeElement);
    }
}
