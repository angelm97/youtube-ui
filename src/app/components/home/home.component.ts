import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { start } from 'repl';
import { VideosServiceService } from 'src/app/services/videos-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  videos: any[];

  constructor(private videoService: VideosServiceService) {}

  ngOnInit(): void {
    this.videos = this.videoService.getVideos();
  }

  filtre(event) {
    var data = event.target.firstChild.data;

    this.videos = this.videoService.getVideos().filter((video) => {
      if (data.toLowerCase().split(' ').join('') === 'all') {
        return this.videoService.getVideos();
      } else {
        return video.category == data.toLowerCase().split(' ').join('') ;
      }
    });
  }
}
