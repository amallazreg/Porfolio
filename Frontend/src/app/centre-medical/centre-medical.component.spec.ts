import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreMedicalComponent } from './centre-medical.component';

describe('CentreMedicalComponent', () => {
  let component: CentreMedicalComponent;
  let fixture: ComponentFixture<CentreMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentreMedicalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentreMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
