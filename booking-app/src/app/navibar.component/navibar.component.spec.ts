import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavibarComponent } from './navibar.component';

describe('NavibarComponent', () => {
  let component: NavibarComponent;
  let fixture: ComponentFixture<NavibarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavibarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavibarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
