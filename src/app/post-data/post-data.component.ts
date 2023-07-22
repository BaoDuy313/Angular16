import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {

  constructor(
    private httpServerServices : HttpServerService 
    ) {}

  public ngOnInit(): void {
    const payload ={body:'Đây là message số 4 ', postId: 1};
    this.httpServerServices.postComments(payload).subscribe(data=>{console.log('postComment',data)})
  }

}
