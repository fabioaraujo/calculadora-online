import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JurosCompostosComponent } from './juros-compostos.component';

describe('JurosCompostosComponent', () => {
  let component: JurosCompostosComponent;
  let fixture: ComponentFixture<JurosCompostosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JurosCompostosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JurosCompostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
