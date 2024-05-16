import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeUniteComponent } from './liste-unite.component';

describe('ListeUniteComponent', () => {
  let component: ListeUniteComponent;
  let fixture: ComponentFixture<ListeUniteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeUniteComponent]
    });
    fixture = TestBed.createComponent(ListeUniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
