import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ButtonComponent} from "../../../shared/button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [
    ButtonComponent,
    ControlComponent,
    FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  @Output() add = new EventEmitter<{ title: string, text: string; }>();
  enteredTitle = '';
  enteredText = '';

  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngOnInit(): void {
    console.log('ON INIT');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }

  onSubmit() {
    this.add.emit({title: this.enteredTitle, text: this.enteredText})
    this.enteredTitle = '';
    this.enteredText = '';
    this.form?.nativeElement.reset();
  }
}
