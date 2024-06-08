import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MifosxLibComponent } from './mifosx-lib.component';

describe('MifosxLibComponent', () => {
  let component: MifosxLibComponent;
  let fixture: ComponentFixture<MifosxLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MifosxLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MifosxLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
