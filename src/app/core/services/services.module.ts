import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const SERVICES = [];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [...SERVICES]
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders<ServicesModule> {
    return {
      ngModule: ServicesModule,
      providers: [...SERVICES]
    };
  }
}
