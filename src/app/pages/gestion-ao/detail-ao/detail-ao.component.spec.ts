import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAOComponent } from './detail-ao.component';

describe('DetailAOComponent', () => {
  let component: DetailAOComponent;
  let fixture: ComponentFixture<DetailAOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
