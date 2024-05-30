import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAOComponent } from './add-ao.component';

describe('AddAOComponent', () => {
  let component: AddAOComponent;
  let fixture: ComponentFixture<AddAOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
