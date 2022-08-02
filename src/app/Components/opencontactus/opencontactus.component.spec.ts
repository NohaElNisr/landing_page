/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OpencontactusComponent } from './opencontactus.component';

describe('OpencontactusComponent', () => {
  let component: OpencontactusComponent;
  let fixture: ComponentFixture<OpencontactusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpencontactusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpencontactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
