import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import AOS from 'aos';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  version = env.versions.appVersion;

  constructor() {
    AOS.init();
  }

  ngOnInit(): void {}
}
