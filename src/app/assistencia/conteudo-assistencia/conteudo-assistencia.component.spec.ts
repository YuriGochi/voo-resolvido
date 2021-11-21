import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoAssistenciaComponent } from './conteudo-assistencia.component';

describe('ConteudoAssistenciaComponent', () => {
  let component: ConteudoAssistenciaComponent;
  let fixture: ComponentFixture<ConteudoAssistenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoAssistenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoAssistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
