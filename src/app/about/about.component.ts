import { Component, OnInit, Inject, Optional } from '@angular/core';
import { ConstantServiceToken, ConstantService } from '../core';

const appInfo = { App: 'Devices Shop', Ver: '1.0' };

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [{ provide: ConstantServiceToken, useValue: appInfo }]
})
export class AboutComponent implements OnInit {
  appName: string;
  appVersion: string;

  constructor(
    @Inject(ConstantServiceToken)@Optional() public appInfo: ConstantService
  ) { }

  ngOnInit(): void {
    this.appName = appInfo.App;
    this.appVersion = appInfo.Ver;
  }
}
