import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
    @Input() id: string = "0"
    @Input() pictureCover: string = ""
    @Input() cardTitle: string = ""

    constructor() { }
}
