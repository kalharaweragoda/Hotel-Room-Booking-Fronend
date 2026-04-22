import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsearchComponent } from './roomsearch.component';

describe('RoomsearchComponent', () => {
  let component: RoomsearchComponent;
  let fixture: ComponentFixture<RoomsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomsearchComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
