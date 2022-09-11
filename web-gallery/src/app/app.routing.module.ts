import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { PhotosFormComponent } from "./photos/photos-form/photos-form.component";
import { PhotosListComponent } from "./photos/photos-list/photos-list.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";

// Resolvers
import { PhotoListResolver } from "./photos/photos-list/photo-list.resolver";

const routes: Routes = [
    { path: 'user/:userName', component: PhotosListComponent, resolve: { photos: PhotoListResolver}},
    { path: 'photo/add',   component: PhotosFormComponent},
    { path: '**',          component: NotFoundComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }