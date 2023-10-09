import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { PhotoModule } from "./photo/photo.module";
import { PhotoListModule } from "./photos-list/photo-list.module";
import { PhotoFormModule } from "./photos-form/photo-form.module";

@NgModule({
    imports: [
        CommonModule,
        PhotoModule,
        PhotoListModule,
        PhotoFormModule,
    ]
}) 

export class PhotosModule {}