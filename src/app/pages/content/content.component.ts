import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
    private id: string | null = "0"
    contentTitle: string = ""
    contentDescription: string = ""
    pictureCover: string = ""

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(value => this.id = value.get("id"))

        this.setValuesToComponent(this.id)
    }

    setValuesToComponent(id: string | null) {
        const result = dataFake.filter(article => article.id == id)[0]

        this.contentTitle = result.title
        this.contentDescription = result.description
        this.pictureCover = result.picture
    }
}
