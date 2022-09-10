import { NgModule } from "@angular/core";
import { PhotoComponent } from "./wg-photo/wg-photo.component";

@NgModule({
    declarations: [
        PhotoComponent,
    ],
    exports: [
        PhotoComponent,
    ]
}) 

export class PhotosModule {}