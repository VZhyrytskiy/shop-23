import { InjectionToken } from '@angular/core';
import { GeneratorService } from '.';

export const RandomString5 = new InjectionToken<string>('RandomString5');

export const RandomStringNFactory = (n: number) => (generatorService: GeneratorService) => generatorService.getRandomString(n);
