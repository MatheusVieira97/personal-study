import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
 
// Interfaces
import { Photo } from '../photo';
@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit, OnDestroy {

  photos: Photo[] = []
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();

  constructor( private activatedRoute: ActivatedRoute ) {}

  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data.photos;

    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
