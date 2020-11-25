import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAccionesComponent } from './editar-acciones.component';

describe('EditarAccionesComponent', () => {
  let component: EditarAccionesComponent;
  let fixture: ComponentFixture<EditarAccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
