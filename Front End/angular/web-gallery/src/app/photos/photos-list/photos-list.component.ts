import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
// Interfaces
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';
@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  photos: Photo[] = []
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor( 
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
  ) {}

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data.photos;
  }

  load() {
    this.photoService.listFromUserPaginated(this.userName, this.currentPage++)
    .subscribe((photos) => {
      this.filter = '';
      this.photos = this.photos.concat(photos);
      if(!photos.length) this.hasMore = false;
    })
  }

}
