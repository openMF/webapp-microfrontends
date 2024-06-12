import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineractClientComponent } from './fineract-client.component';

describe('FineractClientComponent', () => {
  let component: FineractClientComponent;
  let fixture: ComponentFixture<FineractClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FineractClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FineractClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
