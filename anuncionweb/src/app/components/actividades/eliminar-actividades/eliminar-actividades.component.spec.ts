import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarActividadesComponent } from './eliminar-actividades.component';

describe('EliminarActividadesComponent', () => {
  let component: EliminarActividadesComponent;
  let fixture: ComponentFixture<EliminarActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
