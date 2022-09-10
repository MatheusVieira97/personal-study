import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { PhotoComponent } from "./wg-photo/wg-photo.component";

@NgModule({
    declarations: [
        PhotoComponent,
    ],
    exports: [
        PhotoComponent,
    ],
    imports: [
        HttpClientModule,
    ]
}) 

export class PhotosModule {}