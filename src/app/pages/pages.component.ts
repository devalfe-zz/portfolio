import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-pages',
  template: ' <router-outlet #o="outlet"></router-outlet> ',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
