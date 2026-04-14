import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminregisterComponent } from './adminregister.component';

describe('AdminregisterComponent', () => {
  let component: AdminregisterComponent;
  let fixture: ComponentFixture<AdminregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminregisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminregisterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
