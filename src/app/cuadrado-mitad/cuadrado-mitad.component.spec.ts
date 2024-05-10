import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadradoMitadComponent } from './cuadrado-mitad.component';

describe('CuadradoMitadComponent', () => {
  let component: CuadradoMitadComponent;
  let fixture: ComponentFixture<CuadradoMitadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuadradoMitadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuadradoMitadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
