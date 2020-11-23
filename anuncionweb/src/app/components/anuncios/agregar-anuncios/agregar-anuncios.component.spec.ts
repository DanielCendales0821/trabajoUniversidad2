import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAnunciosComponent } from './agregar-anuncios.component';

describe('AgregarAnunciosComponent', () => {
  let component: AgregarAnunciosComponent;
  let fixture: ComponentFixture<AgregarAnunciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarAnunciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
