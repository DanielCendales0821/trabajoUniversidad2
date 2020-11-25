import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAccionesComponent } from './eliminar-acciones.component';

describe('EliminarAccionesComponent', () => {
  let component: EliminarAccionesComponent;
  let fixture: ComponentFixture<EliminarAccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarAccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
