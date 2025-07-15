import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartModal } from './start-modal';

describe('StartModal', () => {
  let component: StartModal;
  let fixture: ComponentFixture<StartModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
