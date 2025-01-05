import {Component, ElementRef, input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  }
})
export class ControlComponent {
  // @HostListener('click') onClicked() {
  //   console.log('clicked!');
  // }
  label = input.required<string>();

  constructor(
    private readonly el: ElementRef
  ) {
  }

  onClick() {
    console.log('clicked');
    console.log(this.el);
  }
}
