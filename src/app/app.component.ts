import {Component} from '@angular/core';
import {Video} from './videos/shared/video.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  videos: Video[];

  constructor() {
    this.videos = [
      {name: 'Video One', price: 100},
      {name: 'Video Two', price: 200},
      {name: 'Video Three', price: 300}
    ];
  }
}


