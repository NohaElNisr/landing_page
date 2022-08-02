import { Component, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Model/ICategory';
import { Course_ServiceService } from 'src/app/Services/Course_Service.service';
import { CourseComponent } from '../Course/Course.component';

@Component({
  selector: 'app-Cart',
  templateUrl: './Cart.component.html',
  styleUrls: ['./Cart.component.scss']
})
export class CartComponent implements OnInit {
  selectedcatID: number = 0;
  catList: ICategory[];
  CourseListofCat: any;

  constructor(private courseservices:Course_ServiceService) {
    this.catList = [{ ID: 1, Name: "Product Managment" }, { ID: 2, Name: "Web Development" },{ID:3,Name:"UI/UX Design"},{ID:4,Name:"Branding Design"}]

   }

  ngOnInit() {
    
  }
 webdevelopment( ID:number){
    this.CourseListofCat = this.courseservices.getcousreByCatID(ID)

  }
}
