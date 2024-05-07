import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from 'express';

export const guestGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);


  return true;
};
