import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierUniteComponent } from './modifier-unite.component';

describe('ModifierUniteComponent', () => {
  let component: ModifierUniteComponent;
  let fixture: ComponentFixture<ModifierUniteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierUniteComponent]
    });
    fixture = TestBed.createComponent(ModifierUniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
