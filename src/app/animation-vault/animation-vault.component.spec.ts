import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationVaultComponent } from './animation-vault.component';

describe('AnimationVaultComponent', () => {
  let component: AnimationVaultComponent;
  let fixture: ComponentFixture<AnimationVaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationVaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationVaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
