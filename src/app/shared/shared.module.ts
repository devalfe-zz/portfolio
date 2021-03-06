import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FaIconLibrary,
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faChartLine,
  faDraftingCompass,
  faFileCode,
  faPlayCircle,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faInstagram,
  faMediumM,
  faTwitter,
  faUikit,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule, CarouselModule],
  exports: [FontAwesomeModule, CarouselModule]
})
export class SharedModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(
      faBars,
      faUserCircle,
      faPlayCircle,
      faGithub,
      faMediumM,
      faTwitter,
      faInstagram,
      faYoutube,
      faFileCode,
      faUikit,
      faDraftingCompass,
      faChartLine
    );
  }
}
