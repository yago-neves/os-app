import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolasPesquisaComponent } from './escolas-pesquisa.component';

describe('EscolasPesquisaComponent', () => {
  let component: EscolasPesquisaComponent;
  let fixture: ComponentFixture<EscolasPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolasPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolasPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
