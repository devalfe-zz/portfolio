import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortafolioComponent implements OnInit {
  customOptions: any = {
    loop: true,
    margin: 8,
    autoplay: true,
    lazyLoad: true,
    responsiveClass: true,

    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      940: {
        items: 3
      }
    }
  };
  constructor() {}

  ngOnInit(): void {}
}
