import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Eternity';

  photos: Array<Object> = [
    {
      url: 'https://s2.glbimg.com/EN0M2v4dElPrYaf9Ey-vFh0fDtM=/0x0:900x506/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/U/T/UhqfMrSQCiSQj4eLLXtw/genshin-impact-baal-boss-fight-900x506.jpg',
      description: 'Shogun Raiden',
    },
    // {
    //   url: 'https://i.pinimg.com/564x/cc/66/82/cc66822c71bc482c38c2d93ad5dc76aa.jpg',
    //   description: 'Shogun Laugh',
    // },
    // {
    //   url: 'https://i.pinimg.com/564x/8b/4a/da/8b4adaf5d4aa036308d3ccf086c3ab59.jpg',
    //   description: 'Shogun Cry',
    // },
  ]
}
