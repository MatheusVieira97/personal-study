import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { PhotoComponent } from "./wg-photo.component";

@NgModule({
    declarations: [
        PhotoComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    exports: [
        PhotoComponent,
    ]
})
export class PhotoModule { }