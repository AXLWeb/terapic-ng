/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CentroComponent } from './centro.component';

describe('CentroComponent', () => {
  let component: CentroComponent;
  let fixture: ComponentFixture<CentroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
