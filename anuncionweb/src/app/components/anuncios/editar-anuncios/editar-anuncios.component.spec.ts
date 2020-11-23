import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAnunciosComponent } from './editar-anuncios.component';

describe('EditarAnunciosComponent', () => {
  let component: EditarAnunciosComponent;
  let fixture: ComponentFixture<EditarAnunciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAnunciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
