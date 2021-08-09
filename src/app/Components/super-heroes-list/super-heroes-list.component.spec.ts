import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroesListComponent } from './super-heroes-list.component';

describe('SuperHeroesListComponent', () => {
  let component: SuperHeroesListComponent;
  let fixture: ComponentFixture<SuperHeroesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperHeroesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperHeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
