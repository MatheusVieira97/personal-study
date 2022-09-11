import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { PhotoComponent } from "./wg-photo/wg-photo.component";
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosFormComponent } from './photos-form/photos-form.component';
import { PhotosComponent } from './photos-list/photos/photos.component';
import { FilterByDescription } from "./photos-list/filterByDescription.pipe";

@NgModule({
    declarations: [
        PhotoComponent,
        PhotosListComponent,
        PhotosFormComponent,
        PhotosComponent,
        FilterByDescription,
    ],
    exports: [
    ],
    imports: [
        HttpClientModule,
        CommonModule,
    ]
}) 

export class PhotosModule {}