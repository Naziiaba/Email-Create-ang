import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appTooltip]'
})

export class AppTooltipDirective {
    @Input() appTooltip;
    currentElement;
    tooltipElem;
    constructor(private elementRef: ElementRef) {
        elementRef.nativeElement.style.color = 'red';
        this.currentElement = elementRef.nativeElement;
    }

    @HostListener('mouseenter', ['$event.target']) onMouseEnter(event) {
        this.tooltipElem = document.createElement('span');
        this.tooltipElem.setAttribute('class', 'tooltip');
        this.tooltipElem.innerHTML = this.appTooltip;
        this.elementRef.nativeElement.appendChild(this.tooltipElem);
    }
    @HostListener('mouseleave', ['$event.target']) onMouseLeave(event) {
        this.elementRef.nativeElement.removeChild(this.tooltipElem);
    }
}
