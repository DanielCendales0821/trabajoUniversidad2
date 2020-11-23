import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAnunciosComponent } from './eliminar-anuncios.component';

describe('EliminarAnunciosComponent', () => {
  let component: EliminarAnunciosComponent;
  let fixture: ComponentFixture<EliminarAnunciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarAnunciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
