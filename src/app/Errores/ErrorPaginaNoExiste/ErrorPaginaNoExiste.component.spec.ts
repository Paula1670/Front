/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ErrorPaginaNoExisteComponent } from './ErrorPaginaNoExiste.component';

describe('ErrorPaginaNoExisteComponent', () => {
  let component: ErrorPaginaNoExisteComponent;
  let fixture: ComponentFixture<ErrorPaginaNoExisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorPaginaNoExisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPaginaNoExisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
