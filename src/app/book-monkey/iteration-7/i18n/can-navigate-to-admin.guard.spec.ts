import { TestBed, async } from '@angular/core/testing';
import { CanNavigateToAdminGuard } from './can-navigate-to-admin.guard';

describe('CanNavigateToAdminGuard', () => {
  let navigateToAdminGuard: CanNavigateToAdminGuard;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        CanNavigateToAdminGuard
      ]
    });
  }));

  beforeEach(() => {
    navigateToAdminGuard = TestBed.inject(CanNavigateToAdminGuard);
  });

  it('should return true when user already confirmed', () => {
    navigateToAdminGuard.accessGranted = true;
    expect(navigateToAdminGuard.canActivate()).toBeTruthy();
  });

  it('should return true when user confirms dialog', () => {
    navigateToAdminGuard.accessGranted = false;
    spyOn(window, 'confirm').and.returnValue(true);
    expect(navigateToAdminGuard.canActivate()).toBeTruthy();
  });

  it('should route to admin area after user confirmed dialog', () => {
    navigateToAdminGuard.accessGranted = false;
    spyOn(window, 'confirm').and.returnValue(false);
    expect(navigateToAdminGuard.canActivate()).toBeFalsy();
  });
});
