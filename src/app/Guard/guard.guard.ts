import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let login = localStorage.getItem('login');
  console.log(login);  
  let user = false;
  if (login=='ok'){
    user = true;
  }
  if (user){
    // router.navigate('dashboard');
    return true;
  }
  else {
    // router.navigate(['login']);
    return false;
  }
};
