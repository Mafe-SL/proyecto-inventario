import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaUserComponent } from './ventana-user.component';

describe('VentanaUserComponent', () => {
  let component: VentanaUserComponent;
  let fixture: ComponentFixture<VentanaUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentanaUserComponent]
    });
    fixture = TestBed.createComponent(VentanaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
