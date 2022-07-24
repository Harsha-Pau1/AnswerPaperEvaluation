import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadButtonsComponent } from './upload-buttons.component';

describe('UploadButtonsComponent', () => {
  let component: UploadButtonsComponent;
  let fixture: ComponentFixture<UploadButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
