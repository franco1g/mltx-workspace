import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MltxLibComponent } from './mltx-lib.component';

describe('MltxLibComponent', () => {
  let component: MltxLibComponent;
  let fixture: ComponentFixture<MltxLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MltxLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MltxLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
