import { Component, OnInit } from '@angular/core';
import { VideosServiceService } from 'src/app/services/videos-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css'],
})
export class WatchComponent implements OnInit {
  id: number;
  videoplay: any;
  videos: any[];
  users: string[];

  constructor(
    private videoService: VideosServiceService,
    private route: ActivatedRoute,
    private userService: UsersServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.users = this.userService.getAll();

    this.videos = this.videoService.getVideos();

    this.videoplay = this.videos.filter((vid) => {
      return vid.id == this.id;
    });

    this.videoplay = this.videoplay[0];
  }

  otherVideo(id) {
    this.router.navigateByUrl('/watch/' + id).then((re) => {
      this.ngOnInit();
    });
  }
}
