import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponentComponent } from './user-list-component.component';

describe('UserListComponentComponent', () => {
  let component: UserListComponentComponent;
  let fixture: ComponentFixture<UserListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponentComponent]
    });
    fixture = TestBed.createComponent(UserListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
