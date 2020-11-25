import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAccionesComponent } from './agregar-acciones.component';

describe('AgregarAccionesComponent', () => {
  let component: AgregarAccionesComponent;
  let fixture: ComponentFixture<AgregarAccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarAccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
