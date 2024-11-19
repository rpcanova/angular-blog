import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
    @Input() pictureCover: string = ""
    @Input() cardTitle: string = ""
    @Input() cardDescription: string = ""

    constructor() { }
}
