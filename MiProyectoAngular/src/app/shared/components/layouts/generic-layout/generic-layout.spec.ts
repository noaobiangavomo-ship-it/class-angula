import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericLayout } from './generic-layout';

describe('GenericLayout', () => {
  let component: GenericLayout;
  let fixture: ComponentFixture<GenericLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(GenericLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
