import { Component } from '@angular/core';
import { Photo } from './photos/photo';
import { PhotoService } from './photos/photo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Eternity';
  photos: Photo[] = []

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.listFromUser('flavio')
    .subscribe(
      ((request: Photo[]) => this.photos = request),
      ((error) => console.log(error)),
    )
  }
}
