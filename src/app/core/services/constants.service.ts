import { InjectionToken } from '@angular/core';

export interface ConstantService {
  App: string;
  Ver: string;
}

export const ConstantServiceToken = new InjectionToken<ConstantService>('ConstantService Token');
