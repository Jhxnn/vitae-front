import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCvsComponent } from './user-cvs.component';

describe('UserCvsComponent', () => {
  let component: UserCvsComponent;
  let fixture: ComponentFixture<UserCvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCvsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
