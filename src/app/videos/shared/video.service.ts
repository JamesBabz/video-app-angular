import { Injectable } from '@angular/core';
import {Video} from './video.model';
import {Http} from "@angular/http";

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

  constructor(private http: Http) { }

  getVideos(): Video[]{
    return [
      {name: 'Video One', price: 100},
      {name: 'Video Two', price: 200},
      {name: 'Video Three', price: 300}
    ];
  }
}
