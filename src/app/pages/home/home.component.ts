import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'ngx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor() {
    AOS.init();
  }

  ngOnInit(): void {}
}
