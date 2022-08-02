import { Injectable } from '@angular/core';
import { ICourse } from '../Model/ICourse';

@Injectable({
  providedIn: 'root'
})
export class Course_ServiceService {

private CourseList :ICourse[];
constructor() {
 
  this.CourseList=[
    {ID:1,Date:"1-28 july 2022",Name:"Product Managment Basic",newPrice:380,oldprice:500,Details:"new course It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",Img:'assets/product.jpg',CateogryID:1},
    {ID:2,Date:"1-28 july 2022",Name:"FrontEnd Developer-Basic",newPrice:380,oldprice:500,Details:"new course It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",Img:'assets/front.jpg',CateogryID:2},
    {ID:3,Date:"1-28 july 2022",Name:"Backend Developer-Basic",newPrice:380,oldprice:500,Details:"new course It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",Img:'assets/back.jpg',CateogryID:2}
    ,{ID:4,Date:"1-28 july 2022",Name:"UX Branstorming",newPrice:380,oldprice:500,Details:"new course It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",Img:'assets/ux.jpg',CateogryID:3},
    {ID:5,Date:"1-28 july 2022",Name:" UI-Sketch",newPrice:380,oldprice:500,Details:"new course It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",Img:'assets/ui.png',CateogryID:3},
    {ID:6,Date:"1-28 july 2022",Name:"Graphic Design-Fundamental Design",newPrice:380,oldprice:500,Details:"new courseIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout",Img:'assets/graphic.jpg',CateogryID:4}




  ]
 }
 getAllCourse():ICourse[]{

 return this.CourseList;
}
getcousreByCatID(CateogryID:number):ICourse[]{
 if (CateogryID == 0) {
   return this.CourseList;
 }
 else
  {
 return this.CourseList.filter(course => course.CateogryID ==CateogryID)
  }
}
getCourseByID(courseID:number):ICourse|undefined{
  return this.CourseList.find(course=>course.ID==courseID);
}
getcourseIDsList():number[]{
  return this.CourseList.map(course=>course.ID);
  }
  
}
