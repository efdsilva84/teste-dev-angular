import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadImovelFormComponent } from './cad-imovel-form.component';

describe('CadImovelFormComponent', () => {
  let component: CadImovelFormComponent;
  let fixture: ComponentFixture<CadImovelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadImovelFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadImovelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
