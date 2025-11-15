import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceImmobiliereComponent } from './agence-immobiliere.component';

describe('AgenceImmobiliereComponent', () => {
  let component: AgenceImmobiliereComponent;
  let fixture: ComponentFixture<AgenceImmobiliereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgenceImmobiliereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgenceImmobiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
