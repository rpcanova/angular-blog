import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
    @Input() id: string = "0"
    @Input() pictureCover: string = ""
    @Input() cardTitle: string = ""
    @Input() cardDescription: string = ""

    constructor() { }
}
