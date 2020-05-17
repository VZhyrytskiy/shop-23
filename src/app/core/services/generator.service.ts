import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {
  randomString: string;

  constructor() {
    this.randomString = '';
  }

  private lowerCaseLettersCharCodes: any = {
    [Symbol.iterator]: this.generateIterator(97, 122)
  };

  private upperCaseLettersCharCodes: any = {
    [Symbol.iterator]: this.generateIterator(65, 90)
  };

  private digitsCharCodes: any = {
    [Symbol.iterator]: this.generateIterator(48, 57)
  };

  private charCodesArr = [
    Array.from(this.lowerCaseLettersCharCodes),
    Array.from(this.upperCaseLettersCharCodes),
    Array.from(this.digitsCharCodes)
  ];

  private generateIterator(from, to) {
    let current = from;
    const last = to;

    return () => ({
      next() {
        if (current <= last) {
          return {
            done: false,
            value: current++
          };
        } else {
          return {
            done: true
          };
        }
      }
    });
  }

  getRandomString(length: number) {
    this.randomString = '';

    for ( let i = 0; i < length; i++ ) {
      const randomIndex = (Math.floor(Math.random() * this.charCodesArr.length));
      const randomCharacter = String.fromCharCode(randomIndex);

      this.randomString += randomCharacter;
    }
 }
}
