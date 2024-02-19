import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendLoginFeatureComponent } from './frontend-login-feature.component';

describe('FrontendLoginFeatureComponent', () => {
  let component: FrontendLoginFeatureComponent;
  let fixture: ComponentFixture<FrontendLoginFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendLoginFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendLoginFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
