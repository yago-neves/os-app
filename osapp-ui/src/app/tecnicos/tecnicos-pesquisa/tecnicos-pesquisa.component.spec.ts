import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicosPesquisaComponent } from './tecnicos-pesquisa.component';

describe('TecnicosPesquisaComponent', () => {
  let component: TecnicosPesquisaComponent;
  let fixture: ComponentFixture<TecnicosPesquisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnicosPesquisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnicosPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
