import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './home/servicios/servicios.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PagesComponent, HomeComponent, ServiciosComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule]
})
export class PagesModule {}
