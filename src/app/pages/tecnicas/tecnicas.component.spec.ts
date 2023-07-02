import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicasComponent } from './tecnicas.component';

describe('TecnicasComponent', () => {
  let component: TecnicasComponent;
  let fixture: ComponentFixture<TecnicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TecnicasComponent]
    });
    fixture = TestBed.createComponent(TecnicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
