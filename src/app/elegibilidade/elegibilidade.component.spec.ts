import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegibilidadeComponent } from './elegibilidade.component';

describe('ElegibilidadeComponent', () => {
  let component: ElegibilidadeComponent;
  let fixture: ComponentFixture<ElegibilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElegibilidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegibilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
