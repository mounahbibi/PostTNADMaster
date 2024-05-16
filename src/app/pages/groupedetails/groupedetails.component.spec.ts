import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedetailsComponent } from './groupedetails.component';

describe('GroupedetailsComponent', () => {
  let component: GroupedetailsComponent;
  let fixture: ComponentFixture<GroupedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupedetailsComponent]
    });
    fixture = TestBed.createComponent(GroupedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
