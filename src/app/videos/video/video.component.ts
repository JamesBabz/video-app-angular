import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../shared/video.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input()
  video: Video;
  constructor() {
  }

  ngOnInit() {
  }

}
