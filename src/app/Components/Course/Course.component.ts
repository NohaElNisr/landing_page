import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ICourse } from 'src/app/Model/ICourse';
import { Course_ServiceService } from 'src/app/Services/Course_Service.service';
@Component({
  selector: 'app-Course',
  templateUrl: './Course.component.html',
  styleUrls: ['./Course.component.scss']
})
export class CourseComponent implements OnInit{
  
  selectedCatID: number = 1;


  @Input() receivedSelectedCatID: number = 0;
  

 cousrelis:ICourse|undefined
  CourseListofCat: ICourse[] |undefined;
  constructor(private courseservices:Course_ServiceService,private router: Router) { 
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.CourseListofCat = this.courseservices.getcousreByCatID(this.receivedSelectedCatID)
   

  }
 
  ngOnInit() {
 
    this.CourseListofCat = this.courseservices.getcousreByCatID(this.receivedSelectedCatID)

  }
 
}
