import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendLandingLayoutFeatureComponent } from './frontend-landing-layout-feature.component';

describe('FrontendLandingLayoutFeatureComponent', () => {
  let component: FrontendLandingLayoutFeatureComponent;
  let fixture: ComponentFixture<FrontendLandingLayoutFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendLandingLayoutFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendLandingLayoutFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
