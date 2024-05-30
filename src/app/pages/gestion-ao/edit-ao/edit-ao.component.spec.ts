import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAOComponent } from './edit-ao.component';

describe('EditAOComponent', () => {
  let component: EditAOComponent;
  let fixture: ComponentFixture<EditAOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
