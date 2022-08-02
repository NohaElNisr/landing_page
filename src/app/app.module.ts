import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './Components/Cart/Cart.component';
import { ContactUsComponent } from './Components/ContactUs/ContactUs.component';
import { CourseComponent } from './Components/Course/Course.component';
import { FooterComponent } from './Components/Footer/Footer.component';
import { HeaderComponent } from './Components/Header/Header.component';
import { HomeComponent } from './Components/Home/Home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import { OpencontactusComponent } from './Components/opencontactus/opencontactus.component';
import { GraduatesComponent } from './Components/Graduates/Graduates.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CourseComponent,
    CartComponent,
    ContactUsComponent,
    GraduatesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
     MatDialogModule
  ],
  entryComponents:[OpencontactusComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
