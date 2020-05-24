import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {
  constructor() { }

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
    ...Array.from(this.lowerCaseLettersCharCodes),
    ...Array.from(this.upperCaseLettersCharCodes),
    ...Array.from(this.digitsCharCodes)
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
    let randomString = '';

    for ( let i = 0; i < length; i++ ) {
      const randomArrIndex: number = (Math.floor(Math.random() * this.charCodesArr.length));
      const randomCharCode: any = this.charCodesArr[randomArrIndex];
      const randomCharacter = String.fromCharCode(randomCharCode);

      randomString += randomCharacter;
    }

    return randomString;
 }
}
