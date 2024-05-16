import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierGroupeComponent } from './modifier-groupe.component';

describe('ModifierGroupeComponent', () => {
  let component: ModifierGroupeComponent;
  let fixture: ComponentFixture<ModifierGroupeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierGroupeComponent]
    });
    fixture = TestBed.createComponent(ModifierGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
