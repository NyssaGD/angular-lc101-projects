import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Raccoon Photos';
  image1 = 'https://www.skedaddlewildlife.com/wp-content/uploads/2019/06/raccoon-1024x853.jpg';
  image2 = 'https://64.media.tumblr.com/7119eb2a6b8cf061127002fb67a4ef9f/tumblr_oisf7koWBj1ueus7io1_500.jpg';
  image3 = 'https://www.ladbible.com/cdn-cgi/image/width=1200,quality=70,format=jpeg,fit=contain,dpr=1/https%3A%2F%2Fs3-images.ladbible.com%2Fs3%2Fcontent%2Fca17d8185f2b86f41e798a36bfe657c6.png';

  constructor() { }

  ngOnInit() {
  }

}