import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAOComponent } from './list-ao.component';

describe('ListAOComponent', () => {
  let component: ListAOComponent;
  let fixture: ComponentFixture<ListAOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
