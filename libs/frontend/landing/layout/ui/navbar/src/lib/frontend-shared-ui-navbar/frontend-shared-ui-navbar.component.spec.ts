import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendSharedUiNavbarComponent } from './frontend-shared-ui-navbar.component';

describe('FrontendSharedUiNavbarComponent', () => {
  let component: FrontendSharedUiNavbarComponent;
  let fixture: ComponentFixture<FrontendSharedUiNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendSharedUiNavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendSharedUiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
