import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { COURSES } from '../../db-data';
import { Course } from '../../app/model/course';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { FaLayersComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('CourseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log("card component - button clicked");
    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner';
    }
  }

  cardStyles() {
    return {
      'background-image': 'url(' + this.course.iconUrl + ')',

    };
  }

}
