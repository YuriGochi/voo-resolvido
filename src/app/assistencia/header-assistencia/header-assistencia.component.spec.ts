import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAssistenciaComponent } from './header-assistencia.component';

describe('HeaderAssistenciaComponent', () => {
  let component: HeaderAssistenciaComponent;
  let fixture: ComponentFixture<HeaderAssistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAssistenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAssistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
