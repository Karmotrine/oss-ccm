import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendRegisterFeatureComponent } from './frontend-register-feature.component';

describe('FrontendRegisterFeatureComponent', () => {
  let component: FrontendRegisterFeatureComponent;
  let fixture: ComponentFixture<FrontendRegisterFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendRegisterFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendRegisterFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
