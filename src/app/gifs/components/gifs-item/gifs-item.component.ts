import { Component, input } from '@angular/core';

@Component({
  selector: 'app-gifs-item',
  imports: [],
  templateUrl: './gifs-item.component.html',
})
export class GifsItemComponent {
  imageUrl = input.required<string>();
}
