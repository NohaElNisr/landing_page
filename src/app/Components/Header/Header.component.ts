import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OpencontactusComponent } from '../opencontactus/opencontactus.component';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.scss']
})
export class HeaderComponent implements OnInit {
email:string=""
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
