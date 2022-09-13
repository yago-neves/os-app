import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicosCadastroComponent } from './tecnicos-cadastro.component';

describe('TecnicosCadastroComponent', () => {
  let component: TecnicosCadastroComponent;
  let fixture: ComponentFixture<TecnicosCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicosCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
