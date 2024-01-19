import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  let user = true;
  const router = inject(Router);
  if (user){
    return true;
  }
  else {
    router.navigate(['product-detail/1']);
    return false;
  }
};
