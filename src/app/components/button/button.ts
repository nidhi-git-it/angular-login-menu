import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.html',
  styleUrls: ['./button.css'],
})
export class Button {
  @Input() text: string = '';
  @Input() bgColor: string = '';
  @Input() color: string = '';

  @Output() clicked = new EventEmitter<void>();

  onClick(){
    this.clicked.emit();
  }
}
