import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolasCadastroComponent } from './escolas-cadastro.component';

describe('EscolasCadastroComponent', () => {
  let component: EscolasCadastroComponent;
  let fixture: ComponentFixture<EscolasCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolasCadastroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolasCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
