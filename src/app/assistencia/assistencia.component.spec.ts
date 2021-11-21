import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistenciaComponent } from './assistencia.component';

describe('AssistenciaComponent', () => {
  let component: AssistenciaComponent;
  let fixture: ComponentFixture<AssistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
