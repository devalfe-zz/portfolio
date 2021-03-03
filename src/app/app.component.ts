import { Component, OnInit } from '@angular/core';

import { environment as env } from '../environments/environment';
@Component({
  selector: 'ngx-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  isProd = env.production;
  envName = env.envName;
  version = env.versions.appVersion;
  year = new Date().getFullYear();
  logo = require('../assets/logo.png').default;
  title = env.appName;

  ngOnInit(): void {}
}
