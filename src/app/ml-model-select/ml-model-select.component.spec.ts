import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlModelSelectComponent } from './ml-model-select.component';

describe('MlModelSelectComponent', () => {
  let component: MlModelSelectComponent;
  let fixture: ComponentFixture<MlModelSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlModelSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlModelSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
