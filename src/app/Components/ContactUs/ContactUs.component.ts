import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpencontactusComponent } from '../opencontactus/opencontactus.component';

@Component({
  selector: 'app-ContactUs',
  templateUrl: './ContactUs.component.html',
  styleUrls: ['./ContactUs.component.scss']
})
export class ContactUsComponent implements OnInit {
email:string="";
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

opendialog(): void {
  const dialogRef = this.dialog.open(OpencontactusComponent, {
    width: '250px',
    data: {email: this.email},
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
 
  });
}
}
