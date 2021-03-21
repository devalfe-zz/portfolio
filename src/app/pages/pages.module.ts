import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './home/servicios/servicios.component';
import {
  FaIconLibrary,
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faCog,
  faPlayCircle,
  faPowerOff,
  faRocket,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faInstagram,
  faMediumM,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { PortafolioComponent } from './home/portafolio/portafolio.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactComponent } from './home/contact/contact.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ServiciosComponent,
    PortafolioComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FontAwesomeModule,
    CarouselModule
  ],
  exports: [FontAwesomeModule, CarouselModule]
})
export class PagesModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(
      faCog,
      faBars,
      faRocket,
      faPowerOff,
      faUserCircle,
      faPlayCircle,
      faGithub,
      faMediumM,
      faTwitter,
      faInstagram,
      faYoutube
    );
  }
}
