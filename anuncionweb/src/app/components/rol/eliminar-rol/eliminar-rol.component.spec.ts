import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarRolComponent } from './eliminar-rol.component';

describe('EliminarRolComponent', () => {
  let component: EliminarRolComponent;
  let fixture: ComponentFixture<EliminarRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarRolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});