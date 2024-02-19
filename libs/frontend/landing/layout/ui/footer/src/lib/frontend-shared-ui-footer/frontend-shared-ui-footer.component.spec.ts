import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontendSharedUiFooterComponent } from './frontend-shared-ui-footer.component';

describe('FrontendSharedUiFooterComponent', () => {
  let component: FrontendSharedUiFooterComponent;
  let fixture: ComponentFixture<FrontendSharedUiFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontendSharedUiFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontendSharedUiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
