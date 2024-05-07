import { CanActivateFn } from '@angular/router';
import { Router } from 'express';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);


  return true;
};
