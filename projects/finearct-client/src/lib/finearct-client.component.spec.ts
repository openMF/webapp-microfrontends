import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinearctClientComponent } from './finearct-client.component';

describe('FinearctClientComponent', () => {
  let component: FinearctClientComponent;
  let fixture: ComponentFixture<FinearctClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinearctClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinearctClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
