import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemdeservicoCriarComponent } from './ordemdeservico-criar.component';

describe('OrdemdeservicoCriarComponent', () => {
  let component: OrdemdeservicoCriarComponent;
  let fixture: ComponentFixture<OrdemdeservicoCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdemdeservicoCriarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemdeservicoCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
