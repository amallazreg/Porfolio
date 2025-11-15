import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairesDynamiquesComponent } from './formulaires-dynamiques.component';

describe('FormulairesDynamiquesComponent', () => {
  let component: FormulairesDynamiquesComponent;
  let fixture: ComponentFixture<FormulairesDynamiquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulairesDynamiquesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulairesDynamiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
