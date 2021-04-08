import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LessonService } from 'src/app/services/lesson.service';
import { MenuItemVO, Newmenuitem } from 'src/app/vo/menu-item.vo';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  lessonDetails: Newmenuitem;
  lessonUrl: string;
  lessonTitle: string;
  lessoncontent: string;
  
  clickCount = 0;
  countColor = 'yellow';

  constructor(private activatedRoute: ActivatedRoute, private lessonService: LessonService) { }

  ngOnInit(): void {
    this.lessonUrl = this.activatedRoute.snapshot.params['lessonUrl'];
    this.lessonDetails = this.lessonService.getLessonFromUrl(this.lessonUrl);
    this.lessonTitle = this.lessonDetails.title;
    this.lessoncontent = this.lessonDetails.content;
    
    this.activatedRoute.params.subscribe((params: Params) => {
      this.lessonUrl = params['lessonUrl'];
      this.lessonDetails = this.lessonService.getLessonFromUrl(this.lessonUrl);
      this.lessonTitle = this.lessonDetails.title;
      this.lessoncontent = this.lessonDetails.content;
     
      
    });
  }

  addCount(): void {
    this.clickCount = this.clickCount + 1;
  }

}
