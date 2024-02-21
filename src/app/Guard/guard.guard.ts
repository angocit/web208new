import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let login:any = localStorage.getItem('user');
  login = JSON.parse(login);
  // console.log(login);  
  if (login.user.id==2){    
    return true;
  }
  else {
    router.navigate(['login']);
    return false;
  }
};
