import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadImovelComponent } from './cad-imovel.component';

describe('CadImovelComponent', () => {
  let component: CadImovelComponent;
  let fixture: ComponentFixture<CadImovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadImovelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
