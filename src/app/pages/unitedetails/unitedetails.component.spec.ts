import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitedetailsComponent } from './unitedetails.component';

describe('UnitedetailsComponent', () => {
  let component: UnitedetailsComponent;
  let fixture: ComponentFixture<UnitedetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitedetailsComponent]
    });
    fixture = TestBed.createComponent(UnitedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
