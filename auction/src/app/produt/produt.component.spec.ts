import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutComponent } from './produt.component';

describe('ProdutComponent', () => {
  let component: ProdutComponent;
  let fixture: ComponentFixture<ProdutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
