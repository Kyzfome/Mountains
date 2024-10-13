import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighPlacesComponent } from './high-places.component';

describe('HighPlacesComponent', () => {
  let component: HighPlacesComponent;
  let fixture: ComponentFixture<HighPlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighPlacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
