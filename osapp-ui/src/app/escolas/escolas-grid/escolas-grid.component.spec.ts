import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolasGridComponent } from './escolas-grid.component';

describe('EscolasGridComponent', () => {
  let component: EscolasGridComponent;
  let fixture: ComponentFixture<EscolasGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolasGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolasGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
