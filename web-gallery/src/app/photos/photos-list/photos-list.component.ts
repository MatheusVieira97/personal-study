import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Interfaces
import { Photo } from '../photo';

//Services
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos: Photo[] = []

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const userName: string = this.activatedRoute.snapshot.params.userName
    this.photoService.listFromUser(userName)
    .subscribe(
      ((request: Photo[]) => this.photos = request),
      ((error) => console.log(error)),
    )
  }

}
