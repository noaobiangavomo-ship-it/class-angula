import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PermisoDenegado } from './permiso-denegado';

describe('PermisoDenegado', () => {
  let component: PermisoDenegado;
  let fixture: ComponentFixture<PermisoDenegado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PermisoDenegado],
    }).compileComponents();

    fixture = TestBed.createComponent(PermisoDenegado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
