import { Component, Input } from '@angular/core';

@Component({
  selector: 'wg-photo',
  templateUrl: 'wg-photo.component.html',
  styleUrls: ['wg-photo.component.css']
})

export class PhotoComponent {
  @Input() description: string;
  @Input() url: string;

}
