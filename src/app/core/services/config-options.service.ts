import { Injectable } from '@angular/core';
import { Configuration } from '../models/config.model';

@Injectable()
export class ConfigOptionsService {
  private config: Configuration = {
    id: 0
  };

  constructor(){}

  setConfig(inputConfig: Configuration){
    for (const key in inputConfig){
      this.config[key] = inputConfig[key];
    }
  }

  getConfig(): Configuration{
    return this.config;
  }
}
