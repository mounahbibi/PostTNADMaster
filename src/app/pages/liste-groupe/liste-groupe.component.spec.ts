import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGroupesComponent } from './liste-groupe.component';

describe('ListeGroupeComponent', () => {
  let component: ListeGroupesComponent;
  let fixture: ComponentFixture<ListeGroupesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeGroupesComponent]
    });
    fixture = TestBed.createComponent(ListeGroupesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
